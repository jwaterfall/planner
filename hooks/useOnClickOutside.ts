import { RefObject, useEffect } from 'react';

type AnyEvent = MouseEvent | TouchEvent;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  onClick: (event: AnyEvent) => void,
) => {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const element = ref?.current;

      if (!element || element.contains(event.target as Node)) return;

      onClick(event);
    };

    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);

    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };
  }, [ref, onClick]);
};

export default useOnClickOutside;
