import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "", y = 36 }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
        {children}
    </motion.div>
);

export const Eyebrow = ({ children }) => (
    <p className="uppercase tracking-[0.3em] text-xs font-semibold text-[#D4AF37]">
        {children}
    </p>
);

export const Ornament = ({ className = "" }) => (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-[#D4AF37]/50" />
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
                d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z"
                fill="#D4AF37"
            />
        </svg>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/50 to-[#D4AF37]/50" />
    </div>
);
