'use client';

import { useEffect } from 'react';
import css from './Modal.module.css';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={css.backdrop} onClick={onClose}>
      <div
        className={css.modal}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}