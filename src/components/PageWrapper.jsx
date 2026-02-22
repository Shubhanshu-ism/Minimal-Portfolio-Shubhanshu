import { motion } from 'framer-motion';

export const PageWrapper = ({ children }) => (
    <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-folio mx-auto pt-32 pb-20 px-4"
    >
        {children}
    </motion.main>
);
