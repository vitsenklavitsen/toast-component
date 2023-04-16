import { useEffect } from "react";

function useKeydown(keyCode, callback) {
  useEffect(() => {
    function handleKeydown(event) {
      if (event.key === keyCode) {
        callback();
      }
    }

    window.addEventListener("keydown", handleKeydown);
    console.log("Eventlistener added");

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [keyCode, callback]);
}

export default useKeydown;
