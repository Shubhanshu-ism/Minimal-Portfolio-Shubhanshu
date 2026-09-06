import { motion } from 'framer-motion';

export const PageWrapper = ({ children }) => (
    <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-folio mx-auto pt-32 pb-20 px-4"
    >
        {children}
    </motion.main>
);
