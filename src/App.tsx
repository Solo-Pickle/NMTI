/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { toPng } from 'html-to-image';
import { roles, questions } from './data';
import { Step, RoleKey, CalculationResult, Language } from './types';
import { calculateResult } from './logic';
import { ChevronLeft, Share2, RotateCcw, BookOpen, Languages, Download } from 'lucide-react';
import { uiTranslations } from './i18n';
// ---------- Google Analytics 初始化 ----------
// 请将下方的 MEASUREMENT_ID 替换为你在 GA4 中实际获取的 Measurement ID (以 G- 开头)
const MEASUREMENT_ID = 'G-BVBMZG71TE'; // 🔁 替换为你的真实 ID

// 加载 GA 脚本并初始化
const initGA = () => {
  if (typeof window !== 'undefined' && !window.gtag) {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', MEASUREMENT_ID);
  }
};

// 通用事件追踪函数
const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// --- Shared Components ---

const Disclaimer = ({ lang }: { lang: Language }) => (
  <p className="text-[10px] text-gray-400 mt-8 text-center pb-8">
    {uiTranslations[lang].disclaimer}
  </p>
);

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '' 
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}) => {
  const variants = {
    primary: 'bg-[#9db495] text-white font-bold py-4 px-8 rounded-xl nmti-button-shadow active:scale-95 transition-all text-lg tracking-wide',
    secondary: 'bg-white text-[#9db495] font-bold py-3 px-6 rounded-xl border-2 border-[#9db495] nmti-button-shadow active:scale-95 transition-all',
    ghost: 'bg-transparent text-gray-500 font-medium py-2 px-4'
  };

  return (
    <button onClick={onClick} className={`${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// --- Page Components ---

const Home = ({ 
  onStart, 
  onViewGallery, 
  lang, 
  onToggleLang 
}: { 
  onStart: () => void; 
  onViewGallery: () => void;
  lang: Language;
  onToggleLang: () => void;
  key?: React.Key;
}) => {
  const t = uiTranslations[lang];
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-10 text-center max-w-md mx-auto relative"
    >
      <div className="absolute top-6 right-6">
        <button 
          onClick={onToggleLang}
          className="flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-2 rounded-full text-xs font-bold text-[#9db495] border border-[#9db495]/20 shadow-sm active:scale-95 transition-all"
        >
          <Languages size={14} />
          {t.langSwitch}
        </button>
      </div>

      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12 w-full flex justify-center"
      >
        <img 
          src="/assets/cover_nmti_home.jpg" 
          alt="NMTI" 
          className="w-[85%] rounded-2xl nmti-shadow"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h1 className="text-4xl font-display font-black text-[#3a403a] mb-4 tracking-tight">
          {t.homeTitle}
        </h1>
        <p className="text-lg text-gray-500 mb-14 font-medium">
          {t.homeSubtitle}
        </p>

        <div className="flex flex-col gap-6 items-center">
          <Button onClick={onStart} className="w-64">
            {t.startBtn}
          </Button>
          <Button variant="secondary" onClick={onViewGallery} className="w-64 flex items-center justify-center gap-2">
            <BookOpen size={20} />
            {t.galleryBtn}
          </Button>
        </div>
      </motion.div>

      <Disclaimer lang={lang} />
    </motion.div>
  );
};

const Quiz = ({ 
  onSubmit, 
  onBack,
  lang
}: { 
  onSubmit: (answers: Record<number, number>) => void;
  onBack: () => void;
  lang: Language;
  key?: React.Key;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleSelect = (optionIdx: number) => {
    const newAnswers = { ...answers, [currentQuestion.id]: optionIdx };
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setTimeout(() => setCurrentIndex(currentIndex + 1), 200);
    } else {
      onSubmit(newAnswers);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      onBack();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen p-6 flex flex-col max-w-md mx-auto"
    >
      <div className="flex items-center gap-4 mb-2">
        <button onClick={handlePrev} className="p-2 -ml-2 text-gray-400">
          <ChevronLeft size={24} />
        </button>
        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#9db495]" 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-sm font-bold text-gray-400 min-w-[40px]">
          {currentIndex + 1}/{questions.length}
        </span>
      </div>
      <p className="text-[10px] text-gray-400 text-center mb-6 tracking-wider">
        {uiTranslations[lang].progressLabel}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex-1 flex flex-col pt-4"
        >
          <div className="bg-white p-8 rounded-2xl nmti-shadow mb-10 min-h-[160px] flex items-center justify-center border-t-4 border-[#9db495]">
            <h2 className="text-xl font-bold text-[#3a403a] text-center leading-relaxed">
              {currentQuestion.question[lang]}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {currentQuestion.options.map((option, idx) => (
              <motion.button
                key={idx}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelect(idx)}
                className={`w-full p-5 text-left rounded-xl border transition-all font-medium text-base
                  ${answers[currentQuestion.id] === idx 
                    ? 'bg-[#f0f3f0] border-[#9db495] text-[#9db495] shadow-sm' 
                    : 'bg-white border-gray-100 text-gray-600 hover:border-[#9db495]/30'
                  }`}
              >
                {option.text[lang]}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const Loading = ({ onFinish, lang }: { onFinish: () => void; lang: Language; key?: React.Key }) => {
  const messages = uiTranslations[lang].loadingMsgs;
  const [msg] = useState(() => messages[Math.floor(Math.random() * messages.length)]);

  useEffect(() => {
    const timer = setTimeout(onFinish, 1800);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#f2f5f2]">
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 2, repeat: Infinity, ease: "linear" },
          scale: { duration: 1, repeat: Infinity }
        }}
        className="w-20 h-20 border-4 border-gray-200 border-t-[#9db495] rounded-full mb-8"
      />
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xl font-bold text-[#9db495]"
      >
        {msg}
      </motion.p>
    </div>
  );
};

const Result = ({ 
  result, 
  onRestart,
  lang
}: { 
  result: CalculationResult; 
  onRestart: () => void;
  lang: Language;
  key?: React.Key;
}) => {
  const role = roles[result.finalType];
  const hiddenRole = result.hiddenType ? roles[result.hiddenType] : null;
  const t = uiTranslations[lang];
  const resultRef = useRef<HTMLDivElement>(null);

  const handleSaveImage = useCallback(async () => {
    if (resultRef.current === null) return;
    try {
      const dataUrl = await toPng(resultRef.current, {
        cacheBust: true,
        backgroundColor: '#f2f5f2',
      });
      const link = document.createElement('a');
      link.download = `NMTI-Result-${role.name[lang]}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('oops, something went wrong!', err);
    }
  }, [role.name, lang]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen pb-12 bg-[#f2f5f2]"
    >
      <div ref={resultRef} className="bg-[#f2f5f2] pt-10 pb-6">
        {/* Result Hero Section */}
        <div className="p-6 text-center">
          <motion.div
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="relative inline-block mb-6"
          >
            <img 
              src={role.image} 
              alt={role.name[lang]} 
              className="w-64 h-64 object-cover rounded-2xl nmti-shadow mx-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-4 -right-2 bg-[#b89b5e] text-white py-2 px-4 rounded-lg font-bold shadow-lg rotate-6 text-sm">
              {role.slogan[lang]}
            </div>
          </motion.div>

          <h1 className="text-4xl font-black text-[#3a403a] mb-2">{role.name[lang]}</h1>
          <p className="text-xl font-bold text-[#9db495] mb-6">{role.type[lang]}</p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {role.keywords[lang].map((word, i) => (
              <span key={i} className="bg-[#eef1ee] text-[#9db495] px-4 py-1.5 rounded-full text-sm font-bold border border-[#9db495]/10">
                #{word}
              </span>
            ))}
          </div>
        </div>

        {/* Content Cards */}
        <div className="px-6 space-y-6 max-w-md mx-auto">
          <section className="bg-white p-6 rounded-2xl nmti-shadow border-t-4 border-[#9db495]">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-[#3a403a]">
              <span className="w-1.5 h-5 bg-[#9db495] rounded-full" />
              {t.resultPersonaImg}
            </h3>
            <p className="text-gray-600 leading-relaxed font-medium">{role.description[lang]}</p>
          </section>

          <section className="bg-white p-6 rounded-2xl nmti-shadow border-t-4 border-[#b89b5e]">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-[#3a403a]">
              <span className="w-1.5 h-5 bg-[#b89b5e] rounded-full" />
              {t.resultDailyState}
            </h3>
            <ul className="space-y-2">
              {role.dailyState[lang].map((s, i) => (
                <li key={i} className="flex gap-2 text-gray-600 font-medium">
                  <span className="text-[#b89b5e] font-bold">●</span>
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white p-6 rounded-2xl nmti-shadow border-t-4 border-[#9db495]">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-[#3a403a]">
              <span className="w-1.5 h-5 bg-[#9db495] rounded-full" />
              {t.resultStrength}
            </h3>
            <p className="text-gray-600 leading-relaxed font-bold">{role.exclusiveStrength[lang]}</p>
          </section>

          <section className="bg-[#9db495]/5 p-6 rounded-2xl border-2 border-[#9db495]/20">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-[#9db495]">
              {t.resultGuide}
            </h3>
            <ul className="space-y-3">
              {role.dailyActionGuide[lang].map((g, i) => (
                <li key={i} className="bg-white p-3 rounded-xl border border-gray-100 text-gray-700 text-sm font-medium">
                  {g}
                </li>
              ))}
            </ul>
          </section>

          {hiddenRole && (
            <section className="bg-white/50 p-6 rounded-2xl border-2 border-dashed border-[#9db495]/30">
              <h3 className="text-lg font-bold mb-4 text-[#9db495]/60 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-[#9db495]/30 rounded-full" />
                {t.resultHiddenRole}
              </h3>
              <div className="flex items-center gap-4">
                <img src={hiddenRole.image} alt={hiddenRole.name[lang]} className="w-16 h-16 rounded-xl grayscale opacity-60" />
                <div>
                  <p className="font-bold text-[#3a403a]">{hiddenRole.name[lang]}</p>
                  <p className="text-xs text-gray-500 font-medium">{t.resultHiddenDesc}</p>
                </div>
              </div>
            </section>
          )}

          <div className="mt-8 text-center">
            <p className="text-xs text-[#9db495]/50 font-display font-black tracking-widest uppercase">
              NMTI Personality Assessment
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 max-w-md mx-auto flex flex-col items-center gap-6 py-10">
          <Button onClick={onRestart} className="w-full flex items-center justify-center gap-2">
            <RotateCcw size={20} />
            {t.restartBtn}
          </Button>
          <div className="flex w-full">
            <Button variant="secondary" onClick={handleSaveImage} className="flex-1 flex items-center justify-center gap-2">
              <Download size={20} />
              {t.shareBtn}
            </Button>
          </div>
        </div>
      
      <Disclaimer lang={lang} />
    </motion.div>
  );
};

const Gallery = ({ onBack, lang }: { onBack: () => void; lang: Language; key?: React.Key }) => {
  const t = uiTranslations[lang];
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-[#f2f5f2] p-6 pb-12"
    >
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-400">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-2xl font-black text-[#3a403a]">{t.galleryTitle}</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
        {(Object.keys(roles) as RoleKey[]).map((key) => {
          const role = roles[key];
          return (
            <motion.div
              key={key}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl nmti-shadow border-t-4 border-[#9db495] relative overflow-hidden group"
            >
              <div className="flex items-start gap-4">
                <img src={role.image} alt={role.name[lang]} className="w-20 h-20 rounded-xl object-cover border border-gray-100 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-black text-[#3a403a]">{role.name[lang]}</h3>
                  <p className="text-[#9db495] font-bold text-sm mb-2">{role.type[lang]}</p>
                  <p className="text-gray-500 text-xs italic bg-gray-50 p-2 rounded-lg border-l-4 border-[#9db495]/30">
                    “{role.slogan[lang]}”
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="secondary" onClick={onBack} className="w-64">
          {t.backHomeBtn}
        </Button>
      </div>

      <Disclaimer lang={lang} />
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [step, setStep] = useState<Step>('home');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [lang, setLang] = useState<Language>('zh');

  const handleStart = () => setStep('quiz');
  const handleViewGallery = () => setStep('gallery');
  const handleBackHome = () => setStep('home');
  const toggleLang = () => setLang(prev => prev === 'zh' ? 'en' : 'zh');

  const handleQuizSubmit = (answers: Record<number, number>) => {
    const calcResult = calculateResult(answers, questions);
    setResult(calcResult);
    setStep('loading');
  };

  const handleRestart = () => {
    setResult(null);
    setStep('home');
  };

  return (
    <div className="min-h-screen bg-[#fcfdfc] select-none overflow-x-hidden text-[#3a403a]">
      <AnimatePresence mode="wait">
        {step === 'home' && (
          <Home 
            key="home" 
            onStart={handleStart} 
            onViewGallery={handleViewGallery} 
            lang={lang} 
            onToggleLang={toggleLang}
          />
        )}
        {step === 'quiz' && (
          <Quiz 
            key="quiz" 
            onSubmit={handleQuizSubmit} 
            onBack={handleBackHome} 
            lang={lang}
          />
        )}
        {step === 'loading' && (
          <Loading 
            key="loading" 
            onFinish={() => setStep('result')} 
            lang={lang}
          />
        )}
        {step === 'result' && result && (
          <Result 
            key="result" 
            result={result} 
            onRestart={handleRestart} 
            lang={lang}
          />
        )}
        {step === 'gallery' && (
          <Gallery 
            key="gallery" 
            onBack={handleBackHome} 
            lang={lang}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
