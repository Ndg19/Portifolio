import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();

    const progressPath = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
            className="fixed bottom-10 right-10 z-[50] hidden md:block"
        >
            <button
                onClick={scrollToTop}
                className="relative w-14 h-14 flex items-center justify-center bg-gray-900 border border-white/10 rounded-full text-yellow-500 hover:text-white transition-colors group"
            >
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <motion.circle
                        cx="28"
                        cy="28"
                        r="26"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="transparent"
                        className="text-yellow-500/20"
                    />
                    <motion.circle
                        cx="28"
                        cy="28"
                        r="26"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="transparent"
                        strokeDasharray="163.36"
                        style={{ pathLength: progressPath }}
                        className="text-yellow-500"
                    />
                </svg>
                <ArrowUp size={24} className="relative z-10 group-hover:-translate-y-1 transition-transform" />
            </button>
        </motion.div>
    );
};

export default BackToTop;
