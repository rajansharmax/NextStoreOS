import { useState, useEffect } from 'react';
import { isMobile as defaultIsMobile } from 'react-device-detect';

const useDeviceDetect = (size = 768) => {
    const [isMobile, setIsMobile] = useState(defaultIsMobile);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= size);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile;
};

export default useDeviceDetect;
