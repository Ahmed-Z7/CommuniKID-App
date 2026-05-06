"use client";

import { useState } from "react";
import Link from "next/link";

export default function CardInteraction() {
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState<null | "correct" | "incorrect">(null);
  
  // Mock data/actions
  const word = "أسد";
  const image = "🦁"; // SVG or Image in production

  const handleRecord = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      setFeedback("correct"); // Mock evaluation
    }, 2000);
  };

  const playSound = () => {
    // In production, use Web Speech API or Audio object
    console.log("Playing sound for:", word);
  };

  return (
    <div className="min-h-screen bg-soft-bg flex flex-col p-6 font-bold">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <Link href="/parent/home" className="p-4 bg-white rounded-2xl shadow-soft text-2xl">
          ❌
        </Link>
        <div className="flex gap-2">
          {[1, 2, 3].map((s) => (
            <span key={s} className={`text-2xl ${feedback === 'correct' && s <= 1 ? 'animate-bounce' : 'grayscale opacity-30'}`}>
              ⭐️
            </span>
          ))}
        </div>
        <div className="p-4 bg-white rounded-2xl shadow-soft text-2xl">
          ⚙️
        </div>
      </header>

      {/* Main Card */}
      <main className="flex-1 flex flex-col items-center justify-center gap-10">
        <div className={`glass-card w-full max-w-sm aspect-square rounded-[4rem] flex flex-col items-center justify-center gap-8 shadow-2xl border-4 transition-all duration-500 ${
          feedback === 'correct' ? 'border-accent bg-accent/10' : 
          feedback === 'incorrect' ? 'border-red-400 bg-red-50' : 'border-white/40'
        }`}>
          <div className="text-[120px] drop-shadow-xl hover:scale-110 transition-transform">
            {image}
          </div>
          <h2 className="text-6xl font-black text-slate-800 tracking-widest">{word}</h2>
        </div>

        {/* Interaction Buttons */}
        <div className="grid grid-cols-2 gap-8 w-full max-w-md">
          <button 
            onClick={playSound}
            className="flex flex-col items-center gap-4 bg-white p-8 rounded-[3rem] shadow-soft hover:bg-primary/5 transition-all active:scale-90"
          >
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-4xl">
              🔊
            </div>
            <span className="text-primary text-xl">اسمع</span>
          </button>

          <button 
            onClick={handleRecord}
            className={`flex flex-col items-center gap-4 p-8 rounded-[3rem] shadow-soft transition-all active:scale-95 ${
              isRecording ? 'bg-red-100 animate-pulse' : 'bg-white hover:bg-secondary/5'
            }`}
          >
            <div className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl ${
              isRecording ? 'bg-red-500 text-white' : 'bg-secondary/20'
            }`}>
              {isRecording ? '⏹' : '🎤'}
            </div>
            <span className="text-secondary text-xl font-bold">{isRecording ? 'بنسجل...' : 'قولها'}</span>
          </button>
        </div>

        {/* AI Feedback Overlay */}
        {feedback && (
          <div className={`fixed inset-x-0 bottom-32 mx-6 p-6 rounded-3xl text-center shadow-2xl animate-in slide-in-from-bottom-10 fade-in duration-500 ${
            feedback === 'correct' ? 'bg-accent text-white' : 'bg-red-500 text-white'
          }`}>
            <p className="text-2xl font-black">
              {feedback === 'correct' ? 'برافو عليك! شاطر جداً ❤️🌟' : 'حاول مرة تانية يا بطل! 💪'}
            </p>
          </div>
        )}
      </main>

      {/* Progress Footer */}
      <footer className="mt-auto pt-8">
        <div className="w-full h-4 bg-white/50 rounded-full overflow-hidden border border-white/20">
          <div className="w-1/3 h-full bg-primary" />
        </div>
      </footer
    </div>
  );
}
