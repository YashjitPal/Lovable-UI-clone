import React from 'react';
import Sidebar from './components/Sidebar';
import MainPreview from './components/MainPreview';

const App: React.FC = () => {
  return (
    <div className="flex h-screen w-full bg-main overflow-hidden text-sm">
      <Sidebar />
      <MainPreview />
    </div>
  );
};

export default App;