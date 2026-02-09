import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            setIsHovering(!!target.closest('a, button, input, textarea'));
        };

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseover', handleHover);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-yellow-500 pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'rgba(234, 179, 8, 0.1)' : 'transparent',
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-yellow-500 rounded-full pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                }}
            />
        </>
    );
};

export default CustomCursor;
