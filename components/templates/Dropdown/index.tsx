import { FC, useRef, useState, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { Item, Menu } from './styles';

export const DropdownItem = Item;

export interface IDropdownMenuProps {
  referenceElement: HTMLElement;
  show: boolean;
  onHide: () => void;
}

export const DropdownMenu: FC<PropsWithChildren<IDropdownMenuProps>> = ({
  referenceElement,
  show,
  onHide,
  children,
}) => {
  const ref = useRef();
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  useOnClickOutside(ref, onHide);

  return (
    <>
      {show &&
        createPortal(
          <div
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            <Menu ref={ref}>{children}</Menu>
          </div>,
          document.querySelector('#menus'),
        )}
    </>
  );
};
