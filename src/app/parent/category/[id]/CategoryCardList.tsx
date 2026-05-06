"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Mic, Volume2, CheckCircle2, XCircle, AlertCircle, Globe } from "lucide-react";

interface Card {
  id: number;
  wordAr: string;
  imageUrl: string | null;
}

export function CategoryCardList({ cards }: { cards: Card[] }) {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [listening, setListening] = useState(false);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      setIsSupported(false);
    }
  }, []);

  // Text-to-Speech Function
  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ar-SA";
      window.speechSynthesis.speak(utterance);
    }
  };

  // Speech-to-Text Pronunciation Check
  const checkPronunciation = (expectedWord: string, cardId: number) => {
    if (!isSupported) {
      return;
    }

    const Recognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    const recognition = new Recognition();
    recognition.lang = "ar-SA";
    recognition.interimResults = false;

    recognition.onstart = () => {
      setListening(true);
      setActiveCard(cardId);
      setFeedback(null);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      console.log("Transcript:", transcript);
      
      // Simple string comparison for AI-like logic
      if (transcript.includes(expectedWord) || expectedWord.includes(transcript)) {
        setFeedback("correct");
        speak("أحسنت! إجابة صحيحة");
      } else {
        setFeedback("wrong");
        speak("حاول مرة أخرى يا بطل");
      }
    };

    recognition.onerror = () => {
      setListening(false);
      setFeedback("wrong");
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  const displayCards = cards.length > 0 ? cards : [
    { id: 1, wordAr: "أسد", imageUrl: "https://cdn-icons-png.flaticon.com/512/616/616412.png" },
    { id: 2, wordAr: "فيل", imageUrl: "https://cdn-icons-png.flaticon.com/512/616/616430.png" },
    { id: 3, wordAr: "قطة", imageUrl: "https://cdn-icons-png.flaticon.com/512/616/616432.png" },
    { id: 4, wordAr: "كلب", imageUrl: "https://cdn-icons-png.flaticon.com/512/616/616408.png" },
    { id: 5, wordAr: "عصفور", imageUrl: "https://cdn-icons-png.flaticon.com/512/616/616428.png" },
  ];

  return (
    <div className="space-y-10">
      {!isSupported && (
        <div className="max-w-2xl mx-auto p-8 bg-coral/10 border-2 border-coral/20 rounded-[3rem] flex items-center gap-6 animate-pulse backdrop-blur-xl">
           <div className="w-16 h-16 bg-coral/20 rounded-full flex items-center justify-center text-coral shadow-inner">
              <Globe className="w-8 h-8" />
           </div>
           <div>
              <p className="text-xl font-black text-slate-800 dark:text-white italic tracking-tight mb-1">تنبيه تقني يا بطل! ⚠️</p>
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400">متصفحك لا يدعم التعرف على الكلام بالكامل. يفضل استخدام متصفح <span className="text-coral underline underline-offset-4 font-black">جوجل كروم</span> لتجربة كل المميزات السحرية ✨</p>
           </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12">
        {displayCards.map((card) => (
          <div 
            key={card.id}
            onClick={() => speak(card.wordAr)}
            className={`group flex flex-col items-center bg-white dark:bg-slate-900 rounded-[3.5rem] p-10 shadow-premium transition-all hover:scale-105 active:scale-95 border-2 border-transparent hover:border-primary/30 cursor-pointer relative overflow-hidden backdrop-blur-xl ${activeCard === card.id ? "ring-4 ring-primary/20" : ""}`}
          >
            {/* Card Status Feedback */}
            {activeCard === card.id && feedback === "correct" && (
              <div className="absolute top-8 left-8 animate-bounce z-20">
                <CheckCircle2 className="w-14 h-14 text-accent drop-shadow-lg" />
              </div>
            )}
            {activeCard === card.id && feedback === "wrong" && (
              <div className="absolute top-8 left-8 animate-shake z-20">
                <XCircle className="w-14 h-14 text-coral drop-shadow-lg" />
              </div>
            )}

            <div className="relative w-full aspect-square mb-10 rounded-[2.5rem] overflow-hidden bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-10 group-hover:p-6 transition-all duration-700 shadow-inner">
               {card.imageUrl ? (
                 <img src={card.imageUrl} alt={card.wordAr} className="w-full h-full object-contain drop-shadow-2xl animate-float" />
               ) : (
                 <div className="text-9xl">🖼️</div>
               )}
            </div>
            
            <h3 className="text-4xl font-black text-slate-dark dark:text-white mb-10 tracking-tighter drop-shadow-sm group-hover:scale-110 transition-transform duration-500">{card.wordAr}</h3>

            <div className="flex gap-4 w-full">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  speak(card.wordAr);
                }}
                className="flex-1 py-6 rounded-[2rem] bg-blue/10 dark:bg-blue/5 text-blue hover:bg-blue hover:text-white transition-all flex items-center justify-center gap-3 font-black group-hover:shadow-glow-blue"
              >
                <Volume2 className="w-7 h-7" />
                <span>انطق</span>
              </button>
              <button 
                disabled={!isSupported}
                onClick={(e) => {
                  e.stopPropagation();
                  checkPronunciation(card.wordAr, card.id);
                }}
                className={`flex-1 py-6 rounded-[2rem] transition-all flex items-center justify-center gap-3 disabled:opacity-30 disabled:grayscale font-black ${listening && activeCard === card.id ? "bg-red-400 text-white animate-pulse" : "bg-coral/10 dark:bg-coral/5 text-coral hover:bg-coral hover:text-white group-hover:shadow-glow-coral"}`}
              >
                <Mic className="w-7 h-7" />
                <span>{listening && activeCard === card.id ? "اسمعك..." : "تحدي"}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
