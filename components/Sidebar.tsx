import React from 'react';
import { 
  ChevronDown, 
  Clock, 
  PanelLeftClose, 
  Lightbulb, 
  FileCode2, 
  Plus, 
  MessageSquare, 
  MoreHorizontal,
  ThumbsUp,
  ThumbsDown,
  Copy,
  AudioLines,
  ArrowUp
} from 'lucide-react';

// Refined Annotate Icon to match the "pen with curved line at back" exactly
const AnnotateIcon = ({ size = 16, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* The curved squiggle line at the back */}
    <path d="M4 12c0-4 4-7 8-7s8 3 8 7-4 7-8 7-8-3-8-7Z" className="opacity-40" strokeWidth="1.5" />
    {/* The diagonal pen/pencil */}
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const Sidebar: React.FC = () => {
  return (
    <div className="w-[400px] flex-shrink-0 flex flex-col bg-sidebar h-full overflow-hidden">
      {/* Header */}
      <div className="h-14 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-1.5 rounded-md transition-colors">
          <span className="font-semibold text-gray-200">Melody Maker Studio</span>
          <ChevronDown size={14} className="text-gray-500" />
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <div className="flex items-center gap-1">
            <button className="p-1.5 hover:text-white transition-colors"><Clock size={16} /></button>
            <button className="p-1.5 hover:text-white transition-colors"><PanelLeftClose size={16} /></button>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-8">
        {/* Date Divider */}
        <div className="flex justify-center">
          <span className="text-xs text-gray-500">Dec 26 at 6:24 PM</span>
        </div>

        {/* User Message - Updated to be fully rounded on all corners */}
        <div className="flex justify-end">
          <div className="bg-[#27272a] text-gray-200 px-4 py-3 rounded-2xl max-w-[90%] text-[15px] leading-relaxed shadow-sm border border-white/5">
            code the website where I can make music by adjusting some aspects and stuff
          </div>
        </div>

        {/* AI Thought Process */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Lightbulb size={16} className="text-yellow-500/80" />
            <span className="text-xs font-medium">Thought for 12s</span>
          </div>

          <div className="text-gray-300 text-[15px] leading-relaxed space-y-4">
            <p>
              I'll build a sleek music creation app with a dark, neon-synth aesthetic inspired by DAWs and drum machines.
            </p>

            <div className="space-y-2">
              <p className="font-semibold text-white">First version features:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-400 marker:text-gray-600">
                <li>Beat sequencer grid (4 tracks × 16 steps)</li>
                <li>Tempo and volume controls</li>
                <li>Play/pause functionality</li>
                <li>Visual beat indicators with animations</li>
                <li>Different synth sounds per track</li>
              </ul>
            </div>

            <div className="space-y-1">
              <p><strong className="text-white">Design:</strong> Dark cyberpunk theme with glowing cyan/teal accents, warm amber highlights, smooth animations, and a futuristic feel.</p>
            </div>
          </div>

          {/* File Editing Status */}
          <div className="flex items-center gap-2 text-gray-500">
            <FileCode2 size={16} />
            <span className="text-xs">Editing <span className="font-mono text-gray-400 bg-white/5 px-1 rounded">index.css</span></span>
          </div>
          
          {/* Response Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
             <div className="flex items-center gap-1">
                <button className="p-1.5 text-gray-500 hover:text-gray-300 transition-colors"><ThumbsUp size={14} /></button>
                <button className="p-1.5 text-gray-500 hover:text-gray-300 transition-colors"><ThumbsDown size={14} /></button>
             </div>
             <button className="p-1.5 text-gray-500 hover:text-gray-300 transition-colors"><Copy size={14} /></button>
             <button className="p-1.5 text-gray-500 hover:text-gray-300 transition-colors ml-auto"><MoreHorizontal size={14} /></button>
          </div>
        </div>
      </div>

      {/* Footer Input Area */}
      <div className="p-4 pt-0 mt-auto">
        {/* Suggestion Pills with Fade Effect */}
        <div className="relative mb-3">
          <div className="flex gap-2 overflow-x-auto no-scrollbar px-1 scroll-smooth">
             {['Add preset patterns', 'Add audio effects', 'Add MIDI support', 'Customize synth', 'Add more'].map((text, i) => (
               <button key={i} className="whitespace-nowrap px-4 py-2 rounded-xl bg-[#27272a] text-sm text-gray-200 hover:bg-[#3f3f46] transition-colors font-medium border border-transparent">
                  {text}
               </button>
             ))}
          </div>
          {/* Fade Right Overlay */}
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-sidebar to-transparent pointer-events-none" />
          {/* Fade Left Overlay (optional, subtle) */}
          <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-sidebar to-transparent pointer-events-none" />
        </div>

        {/* Prompt Input Box */}
        <div className="bg-[#27272a] rounded-[26px] p-3 relative flex flex-col gap-2 shadow-lg">
           <textarea 
              placeholder="Ask Lovable..." 
              className="w-full bg-transparent text-gray-100 placeholder-gray-400 resize-none outline-none min-h-[48px] px-3 py-2 text-[16px] font-normal"
              rows={1}
           />
           <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                 <button className="p-2.5 rounded-full bg-[#3f3f46]/60 text-gray-300 hover:bg-[#3f3f46] hover:text-white transition-colors">
                    <Plus size={18} />
                 </button>
                 <button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#3f3f46]/60 text-gray-300 hover:bg-[#3f3f46] hover:text-white transition-colors text-xs font-medium">
                    <AnnotateIcon size={16} />
                    Annotate app
                 </button>
              </div>
              
              <div className="flex items-center gap-2">
                 <button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#3f3f46]/60 text-gray-300 hover:bg-[#3f3f46] hover:text-white transition-colors text-xs font-medium">
                    <MessageSquare size={16} />
                    Chat
                 </button>
                 <button className="p-2.5 rounded-full bg-[#3f3f46]/60 text-gray-300 hover:bg-[#3f3f46] hover:text-white transition-colors">
                    <AudioLines size={18} />
                 </button>
                 <button className="p-2.5 rounded-full bg-[#d4d4d8] text-black hover:bg-white transition-colors flex items-center justify-center shadow-md">
                    <ArrowUp size={18} strokeWidth={2.5} />
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;