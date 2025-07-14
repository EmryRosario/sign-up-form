export default function InputForm({
  label,
  name,
  type = 'text',
  placeholder = '',
  value,
  error,
  touched,
  onChange,
  onBlur,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full border rounded-md px-3 py-2 focus:outline-none transition-colors
          ${
            touched
              ? error
                ? 'border-gray-300 focus:ring-2 focus:ring-gray-300'
                : 'border-blue-500 focus:ring-2 focus:ring-blue-400'
              : 'border-gray-300 focus:ring-2 focus:ring-gray-300'
          }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
