import { useState, useEffect } from 'react';

const useSmallScreenSize = (): boolean => {
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

    const handleResize = () => {
        const width = window.innerWidth;
        setIsSmallScreen(width < 1000);
    };

    useEffect(() => {
        handleResize(); // Check the initial screen size
        window.addEventListener('resize', handleResize); // Attach resize event listener

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty dependency array ensures this only runs once on mount

    return isSmallScreen; // Return the value to be used by other components
};

export default useSmallScreenSize;
