import { RefObject, useEffect } from "react";

export default function useClickOutsideClose<T extends HTMLDivElement>(
  ref: RefObject<T | null>,
  setState: React.Dispatch<React.SetStateAction<boolean>>,
) {
  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (ref?.current && !ref.current.contains(event.target as Node)) {
        setState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.addEventListener("mousedown", handleClickOutSide);
    };
  }, [ref, setState]);
}
