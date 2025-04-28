import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';

import '../styles/App.scss';

function Modal({ isOpen, onClose, children }) {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal"
            onClick={onClose} // prevent closing when clicking inside
            initial={{ top: '80%', scale: 0, rotate: 180 }}
            animate={{ top: '0%', scale: 1, rotate: 0 }}
            exit={{ top: '-80%', scale: 0, rotate: -180}}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.15, }}
            whileTap={{
              scale: 0.5,
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default Modal;