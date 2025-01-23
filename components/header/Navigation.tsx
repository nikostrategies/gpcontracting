import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems, getPathFromNavItem } from '../../utils/constants';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { colors } from '../../styles/colors';

interface NavigationProps {
  onContactClick: (e: React.MouseEvent) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onContactClick }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const scrollPosition = useScrollPosition();
  const isAtTop = scrollPosition === 0 && currentPath === '/';

  const textColor = isAtTop ? '#F5F5F5' : colors.charcoal.dark;
  const activeColor = '#3B82F6'; // Modern blue that provides good contrast
  const hoverColor = isAtTop ? colors.silver.solid.primary : activeColor;
  
  return (
    <nav className="hidden md:flex items-center justify-end flex-1">
      <ul className="flex items-center gap-8">
        {navItems.map((item) => {
          const path = getPathFromNavItem(item);
          const isActive = currentPath === path;
          
          if (item === 'Contact') {
            return (
              <li key={item}>
                <button
                  onClick={onContactClick}
                  className="relative text-[13px] uppercase tracking-[0.2em] font-light
                           transition-all duration-200 ease-in-out group"
                  style={{ 
                    color: textColor
                  }}
                >
                  {item}
                  <span 
                    className="absolute -bottom-1 left-0 h-[1px] w-0 group-hover:w-full 
                             transition-all duration-200 ease-in-out"
                    style={{ backgroundColor: hoverColor }}
                  />
                </button>
              </li>
            );
          }
          
          return (
            <li key={item}>
              <Link
                to={path}
                className="relative text-[13px] uppercase tracking-[0.2em] font-light
                         transition-all duration-200 ease-in-out group"
                style={{ 
                  color: isActive ? activeColor : textColor
                }}
              >
                {item}
                <span 
                  className={`absolute -bottom-1 left-0 h-[1px] transition-all duration-200 ease-in-out
                           ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  style={{ backgroundColor: isActive ? activeColor : hoverColor }}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;