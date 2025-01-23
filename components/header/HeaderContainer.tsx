import React from 'react';
import { useLocation } from 'react-router-dom';
import { colors } from '../../styles/colors';

interface HeaderContainerProps {
  isScrolled: boolean;
  children: React.ReactNode;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({ isScrolled, children }) => {
  const location = useLocation();
  const isSpecialPage = ['/blog', '/services', '/about'].includes(location.pathname);
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-sm ${
        isSpecialPage || isScrolled 
          ? 'shadow-lg' 
          : ''
      }`}
      style={{
        backgroundColor: isSpecialPage || isScrolled 
          ? `${colors.offWhite.primary}F0`  // F0 for 94% opacity
          : 'transparent',
        borderBottom: isSpecialPage || isScrolled 
          ? `1px solid ${colors.offWhite.secondary}`
          : 'none'
      }}
    >
      <div className="container mx-auto px-8 h-20 flex items-center">
        {children}
      </div>
    </header>
  );
};

export default HeaderContainer;