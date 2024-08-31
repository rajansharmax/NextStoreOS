import { useState, useEffect } from 'react';
import { isMobile as defaultIsMobile } from 'react-device-detect';

const useDeviceDetect = () => {
    const [isMobile, setIsMobile] = useState(defaultIsMobile);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Set initial value based on window width
        handleResize();

        // Listen for resize events
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile;
};

export default useDeviceDetect;
