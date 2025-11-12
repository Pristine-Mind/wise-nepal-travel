export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: string[];
}

export default function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="fixed top-20 left-0 right-0 bg-white shadow-lg">
        <div className="px-4 py-6 space-y-4">
          {items.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-700 hover:text-blue-600 font-medium"
              onClick={onClose}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
