import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HashLinkScroll = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                // Adjust for the fixed header
                const headerHeight = 80; 
                const topOffset = element.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({ top: topOffset, behavior: 'smooth' });
            }
        }
    }, [hash]);

    return null; // This component doesn't render any UI
};

export default HashLinkScroll;