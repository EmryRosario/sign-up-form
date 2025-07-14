import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import { useState } from 'react';
import FormWrapper from '../components/FormWrapper';
import InputForm from '../components/InputForm';
import Button from '../components/Button';
import Modal from '../components/Modal';

export default function SignUp() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({});
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('El nombre es requerido')
        .min(3, 'El nombre debe tener al menos 3 caracteres')
        .matches(
          /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
          'El nombre solo puede contener letras y espacios',
        ),
      email: Yup.string()
        .required('El correo es requerido')
        .matches(
          /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
          'Debe colocar un correo valido',
        ),
      password: Yup.string()
        .min(8, 'Mínimo 8 caracteres')
        .required('La contraseña es requerida')
        .matches(/[A-Z]/, 'Debe contener al menos una mayúscula')
        .matches(
          /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/,
          'Debe contener al menos un carácter especial',
        )
        .matches(/[0-9]/, 'Debe contener al menos un número'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
        .required('Confirma tu contraseña'),
    }),
    validateOnChange: true,
    onSubmit: (values) => {
      toast.success('Se ha transferido el registro correctamente');
      setFormValues(values);
      setModalOpen(true);
    },
  });

  const handleChangeInput = (e) => {
    formik.handleChange(e);
    formik.setFieldTouched(e.target.name, true, false);
  };

  return (
    <>
      <FormWrapper title="Crear cuenta">
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <InputForm
            label="Nombre completo"
            name="name"
            value={formik.values.name}
            onChange={handleChangeInput}
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name}
            touched={formik.touched.name}
          />
          <InputForm
            label="Correo electrónico"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={handleChangeInput}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
            touched={formik.touched.email}
          />

          <InputForm
            label="Contraseña"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={handleChangeInput}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
            touched={formik.touched.password}
          />

          <InputForm
            label="Confirmar contraseña"
            name="confirmPassword"
            type="password"
            value={formik.values.confirmPassword}
            onChange={handleChangeInput}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            touched={formik.touched.confirmPassword}
          />
          <Button
            type="submit"
            isReady={
              Object.keys(formik.touched).length > 0 &&
              Object.keys(formik.errors).length === 0
            }
          >
            Enviar
          </Button>
        </form>
      </FormWrapper>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Detalles del registro"
      >
        <JSONPretty data={formValues} />
      </Modal>
    </>
  );
}
