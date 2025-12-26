import React, { useState, useCallback, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainPreview from './components/MainPreview';

const App: React.FC = () => {
  const [sidebarWidth, setSidebarWidth] = useState(400);
  const [isDragging, setIsDragging] = useState(false);

  const startResizing = useCallback(() => {
    setIsDragging(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsDragging(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isDragging) {
        const newWidth = mouseMoveEvent.clientX;
        const totalWidth = document.body.clientWidth;
        
        // Constraints: Min 1/5th of total width, Max 37% of total width
        const minWidth = totalWidth / 5;
        const maxWidth = totalWidth * 0.37;

        if (newWidth >= minWidth && newWidth <= maxWidth) {
          setSidebarWidth(newWidth);
        }
      }
    },
    [isDragging]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div className={`flex h-screen w-full bg-main overflow-hidden text-sm ${isDragging ? 'cursor-[ew-resize] select-none' : ''}`}>
      <Sidebar width={sidebarWidth} />
      
      {/* Resizer Handle */}
      <div 
        className="w-0 relative z-50 group flex-shrink-0"
        onMouseDown={startResizing}
      >
         {/* Visible Blue Line (The "left bar" of preview panel) */}
         {/* Constrained to top 56px (TopBar height) and bottom 16px (padding) */}
         {/* Width reduced to 1.5px for a thinner look */}
         <div 
           className={`absolute w-[1.5px] left-0 rounded-full transition-all duration-300 ease-out 
             bg-gradient-to-b from-transparent via-[#3b82f6] to-transparent
             ${isDragging ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
           `}
           style={{ top: '56px', bottom: '16px', transform: 'translateX(-0.75px)' }}
         />
         
         {/* Invisible Hit Area - Extremely tight tolerance (approx 3.5px total width) */}
         {/* This ensures the line only appears when cursor is almost perfectly aligned */}
         <div className="absolute top-0 bottom-0 -left-[1px] -right-[1px] bg-transparent cursor-[ew-resize] hover:bg-transparent" />
      </div>

      <MainPreview />
    </div>
  );
};

export default App;