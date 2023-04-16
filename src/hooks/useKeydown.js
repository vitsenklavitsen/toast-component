import { useEffect } from "react";

function useKeydown(keyCode, callback) {
  useEffect(() => {
    function handleKeydown(event) {
      if (event.key === keyCode) {
        callback(event);
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [keyCode, callback]);
}

export default useKeydown;
