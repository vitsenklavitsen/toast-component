import React, { useState, useCallback } from "react";
import useKeydown from "../../hooks/useKeydown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([
    {
      id: "b5d649ad-3f88-49ab-94a5-43a14f59f7a4",
      variant: "notice",
      message: "Example notice toast",
    },
    {
      id: "f09d4865-b58b-480d-844d-5c673b5fd671",
      variant: "error",
      message: "Example error toast",
    },
  ]);

  function addToast(variant, message) {
    const newToast = { id: crypto.randomUUID(), variant, message };
    setToasts((toasts) => {
      return [...toasts, newToast];
    });
  }

  function handleDismiss(id) {
    setToasts(
      toasts.filter((toast) => {
        return toast.id !== id;
      })
    );
  }

  const handleEscape = useCallback(() => {
    setToasts([]);
  }, [setToasts]);

  useKeydown("Escape", handleEscape);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        setToasts,
        addToast,
        handleDismiss,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
