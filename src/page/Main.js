// App.jsx
import React, { createContext, useContext, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import EnrollFormModal from "../components/EntrollForm";

const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

// App component, wraps the header and footer, and includes other components or routes.
const Main = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formParams, setFormParams] = useState({});

  const openModal = (params) => {
    setIsModalOpen(true);
    setFormParams(params);
  };
  const closeModal = () => setIsModalOpen(false);
  const setTriggerModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      <Header />
      <main>
        {children}
      </main>
      <FloatingButton />
      <Footer />
      <EnrollFormModal triggerModal={isModalOpen} setTriggerModal={setTriggerModal} params={formParams} />
    </ModalContext.Provider>
  );
};

export default Main;
