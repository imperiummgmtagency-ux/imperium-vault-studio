import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const SectionWrapper = ({ children, id, className = "" }: SectionWrapperProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className={`py-20 md:py-32 lg:py-40 px-5 md:px-6 ${className}`}
  >
    <div className="max-w-5xl mx-auto">{children}</div>
  </motion.section>
);

export default SectionWrapper;
