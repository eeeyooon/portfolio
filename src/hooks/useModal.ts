import { useState } from "react";

interface UseModalReturn<T> {
  isOpen: boolean;
  selectedItem: T | null;
  openModal: (item: T) => void;
  closeModal: () => void;
}

function useModal<T>(): UseModalReturn<T> {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<T | null>(null);

  const openModal = (item: T) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  return {
    isOpen,
    selectedItem,
    openModal,
    closeModal,
  };
}

export default useModal;
