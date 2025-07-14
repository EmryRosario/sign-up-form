export default function FormWrapper({ title, children }) {
  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-gray-800">{title}</h1>
      {children}
    </div>
  );
}
