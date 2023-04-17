import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  // const { pathname } = useLocation();
  const pathname = useLocation().pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
