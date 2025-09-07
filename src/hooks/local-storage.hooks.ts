import { useEffect } from "react";

const useLocalStorage = (state: any, storageKey: string) => {
  useEffect(() => {
    if (typeof state === "object") {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } else {
      localStorage.setItem(storageKey, state.toString());
    }
  }, [state, storageKey]);
};

export default useLocalStorage;
