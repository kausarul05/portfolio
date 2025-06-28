'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 w-5 h-5 rounded-full bg-blue-500 mix-blend-difference pointer-events-none z-[9999] transition-transform duration-75"
            style={{
                transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
            }}
        />
    );
}
