import React from 'react';
import { 
  Cloud, 
  Palette, 
  Code2, 
  LineChart, 
  Plus, 
  Monitor,
  RefreshCw,
  ExternalLink,
  Share2,
  Github,
  Zap
} from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="h-14 flex items-center justify-between px-6 w-full flex-shrink-0 bg-main">
      {/* Left Group */}
      <div className="flex items-center gap-4">
        <button className="bg-[#1e293b] text-[#60a5fa] px-3 py-1.5 rounded-md flex items-center gap-2 text-xs font-medium border border-[#3b82f6]/20 shadow-[0_0_10px_rgba(59,130,246,0.1)] transition-all hover:bg-[#1e293b]/80">
          <Monitor size={14} />
          Preview
        </button>
        <div className="flex items-center gap-3.5 text-gray-400">
           <Cloud size={18} className="hover:text-gray-200 cursor-pointer transition-colors" />
           <Palette size={18} className="hover:text-gray-200 cursor-pointer transition-colors" />
           <Code2 size={18} className="hover:text-gray-200 cursor-pointer transition-colors" />
           <LineChart size={18} className="hover:text-gray-200 cursor-pointer transition-colors" />
           <Plus size={18} className="hover:text-gray-200 cursor-pointer transition-colors" />
        </div>
      </div>

      {/* Center Address Bar */}
      <div className="flex-1 max-w-xl px-8">
        <div className="bg-[#1c1c1c] border border-[#383838] rounded-lg flex items-center h-9 px-3 gap-2 group focus-within:border-gray-500 transition-all duration-200">
          <div className="text-gray-500 flex items-center">
            <Monitor size={14} className="text-gray-500" />
          </div>
          <span className="text-gray-500 text-xs">/</span>
          <input 
            className="bg-transparent border-none outline-none text-xs text-gray-300 w-full placeholder-gray-600" 
            placeholder="localhost:3000"
            disabled 
          />
          <div className="flex items-center gap-2 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink size={12} className="hover:text-white cursor-pointer" />
            <RefreshCw size={12} className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Right Group */}
      <div className="flex items-center gap-3">
        <div className="flex items-center -space-x-1.5 mr-1">
             <img src="https://picsum.photos/32/32?random=1" className="w-6 h-6 rounded-full border border-main" alt="User" />
        </div>
        <button className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors px-1">
          <Share2 size={16} />
          <span className="text-xs font-medium">Share</span>
        </button>
        <button className="p-1.5 text-gray-400 hover:text-white transition-colors">
          <Github size={18} />
        </button>
        
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xs font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/10">
          <Zap size={12} fill="currentColor" />
          Upgrade
        </button>

        <button className="px-4 py-1.5 rounded-md bg-[#3b82f6] hover:bg-blue-600 text-white text-xs font-semibold transition-colors shadow-lg shadow-blue-500/20">
          Publish
        </button>
      </div>
    </div>
  );
};

export default TopBar;