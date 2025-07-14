
## ✅ Objetivo

Construir un formulario de registro simple que cumpla con los requisitos funcionales y técnicos definidos.

---

## 📝 Requisitos funcionales

1. **Campos del formulario**
   - Nombre completo
   - Correo electrónico
   - Contraseña
   - Confirmar contraseña

2. **Validaciones obligatorias**
   - Todos los campos son requeridos.
   - El correo debe tener un formato válido.
   - La contraseña debe cumplir con criterios de seguridad:
     - Mínimo 8 caracteres.
     - Al menos una letra mayúscula.
     - Al menos un número.
     - Al menos un carácter especial.

3. **Comportamiento esperado**
   - Validación en tiempo real mientras se completan los campos.
   - Mostrar un mensaje de éxito al enviar el formulario correctamente.
   - Mostrar los datos en un modal con el contenido en formato JSON.


---

## 💡 Explicación funcional

Este proyecto es una aplicación de registro hecha en **React**. El formulario permite "crear una cuenta" completando los campos principales: **nombre completo, correo electrónico y una contraseña con su confirmación**.

Las validaciones se realizan mientras se escriben los datos. Cuenta con las siguientes validaciones.

 **1. Nombre completo:**
	  - Requerido de manera obligatoria
	  - Mínimo 3 caracteres
 **2. Correo electrónico:**
	  - Requerido de manera obligatoria
	  - Debe tener formato estándar de correos electrónicos
 **3. Contraseña:**
	  - Requerido de manera obligatoria
	   - Mínimo 8 caracteres
	   - Debe contener al menos una mayúscula
	   - Debe contener al menos un carácter especial
	   - Debe contener al menos un número
 **4. Confirmación contraseña:**
	 - Debe coincidir con la contraseña anteriormente suministrada

Cuando el formulario se envía correctamente, aparece un mensaje de confirmación y un modal donde se muestran los datos ingresados en formato JSON.

Para el diseño se optó por Tailwind CSS, de modo que la interfaz se vea limpia y funcione bien en distintos tamaños de pantalla.

---

## 🛠️ Tecnologías y/o Dependencias utilizadas

- **Vite**: Facilita una configuración rápida del entorno y tiempos de carga muy reducidos durante el desarrollo.
- **React**: Biblioteca principal para el desarrollo de la interfaz de usuario, la cual nos permite hacer componentes reutilizables.
- **Tailwind CSS** – Biblioteca de estilo utilitarios la cual permite estilar componentes de una manera organizada y ágil.
- **Formik**: Para manejar el estado del formulario y sus validaciones, facilita el control de los campos y muestra errores en tiempo real mientras se completan los datos.
- **Yup**: Permite realizar la definición de las validaciones requeridas en los campos de una manera optima y eficiente.
- **React Hot Toast** – Utilizado para enviar notificación al usuario al momento de enviar los datos.
- **React JSON Pretty** – Mostrar datos enviados en formato JSON de una manera legible y clara.
- **Prettier** - Mantener un formato de código consistente de forma automática, lo que facilita la lectura y la organización del repositorio.

---
### 🔹 Componente SignUp

**Descripción:**  
Es el componente principal que contiene la lógica del formulario de registro. Se encarga de:

- Inicializar Formik con los valores iniciales y el esquema de validación de Yup.
- Controlar el estado de visualización del modal y el almacenamiento de los datos enviados.
- Mostrar las notificaciones cuando el formulario se completa correctamente.
- Renderizar todos los componentes internos (FormWrapper, InputForm, Button y Modal).

**Props:**  
No recibe props directamente, ya que su estado es interno.

**Uso:**  
Este componente se importa y se renderiza en la aplicación principal (`App.jsx`).

---
## 🧩 Componentes reutilizables

El proyecto está dividido en componentes reutilizables para mantener un código organizado y fácil de mantener:

- **FormWrapper**  
  Contenedor que envuelve el formulario.  
  ✅ Recibe:
  - `title` (string): el título que se muestra en la parte superior.  
  - `children`: los elementos internos del formulario.

- **InputForm**  
  Componente que representa un campo de entrada con su etiqueta y validación.  
  ✅ Recibe varias props:
  - `label`: texto de la etiqueta.
  - `name`: nombre del campo.
  - `type`: tipo de input (texto, email, password).
  - `placeholder`: texto de ayuda.
  - `value`: valor del input.
  - `onChange`: función que se ejecuta al cambiar el valor.
  - `onBlur`: función que se ejecuta al perder el foco.
  - `error`: mensaje de error si la validación falla.
  - `touched`: indica si el campo fue tocado.

- **Button**  
  Botón principal para las interfaces.  
  ✅ Recibe:
  - `type`: tipo de botón (por ejemplo, `submit`).
  - `isReady`: booleano que indica si el formulario está listo para accionarse(cambia el estilo).
  - `onClick`: función opcional al hacer click.
  - `children`: texto o contenido del botón.

- **Modal**  
  Ventana emergente que muestra los datos ingresados.  
  ✅ Recibe:
  - `isOpen`: booleano que indica si se muestra el modal.
  - `onClose`: función que se ejecuta al cerrarlo.
  - `title`: título del modal.
  - `children`: contenido a mostrar dentro del modal (por ejemplo, el JSON).

---