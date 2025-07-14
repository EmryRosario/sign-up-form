import Button from './Button';

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 max-w-lg w-full">
        {title && (
          <h2 className="text-xl font-semibold mb-4 text-white">{title}</h2>
        )}
        <div className="max-h-80 overflow-auto text-sm mb-6">{children}</div>
        <Button isReady onClick={onClose}>
          Cerrar
        </Button>
      </div>
    </div>
  );
}
