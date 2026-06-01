'use client';

import {
  ReactNode,
  useEffect,
} from 'react';

import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode;
  onClose: () => void;
};

export default function Modal({
  children,
  onClose,
}: Props) {
  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener(
      'keydown',
      handleEscape
    );

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      'hidden';

    return () => {
      window.removeEventListener(
        'keydown',
        handleEscape
      );

      document.body.style.overflow =
        originalOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div onClick={onClose}>
      <div
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        {children}
      </div>
    </div>,
    document.body
  );
}