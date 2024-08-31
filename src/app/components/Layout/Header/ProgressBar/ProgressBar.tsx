import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { StyledProgress } from './styled';

const ProgressBar = () => {
    const pathname = usePathname();
    const [progress, setProgress] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        const startLoading = () => {
            setIsLoading(true);
            setProgress(0);
            interval = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress >= 90) {
                        clearInterval(interval);
                        return prevProgress;
                    }
                    return prevProgress + 10;
                });
            }, 200);
        };

        const completeLoading = () => {
            clearInterval(interval);
            setProgress(100);
            setTimeout(() => {
                setIsLoading(false);
                setProgress(0);
            }, 300);
        };

        startLoading();
        completeLoading();

        return () => {
            clearInterval(interval);
        };
    }, [pathname]);

    if (!isLoading) return null;

    return (
        <StyledProgress
            percent={progress}
            showInfo={false}
            status="active"
            strokeWidth={2}
            strokeColor={"#25db4a"}
        />
    );
};

export default ProgressBar;
