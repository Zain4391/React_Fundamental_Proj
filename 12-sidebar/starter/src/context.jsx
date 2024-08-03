import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isOpenSide, setIsOpenSide] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openSide = () => {
    setIsOpenSide(true);
  };
  const closeSide = () => {
    setIsOpenSide(false);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        isOpenSide,
        isOpenModal,
        openSide,
        closeSide,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
