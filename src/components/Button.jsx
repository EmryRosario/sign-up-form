export default function Button({
  children,
  type = 'button',
  isReady = false,
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={!isReady || disabled}
      className={`w-full text-white font-semibold py-2 rounded-md transition-colors
        ${
          isReady
            ? '[background-color:#13b9e9] hover:[background-color:#0fa5d0] cursor-pointer'
            : 'bg-gray-600 cursor-not-allowed'
        }`}
    >
      {children}
    </button>
  );
}
