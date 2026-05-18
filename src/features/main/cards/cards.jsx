import React, { useEffect, useRef, useState } from 'react';
import CenterText from './centerText';
import CardText from './cardText';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const containerRef = useRef(null);
  const rowOneRef = useRef(null);
  const rowTwoRef = useRef(null);

  // Active state to track which article popup should be open
  const [activeArticle, setActiveArticle] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (rowOneRef.current) {
        const initialCards = rowOneRef.current.querySelectorAll('.card-animate');
        
        gsap.fromTo(
          initialCards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: rowOneRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (rowTwoRef.current) {
        gsap.fromTo(
          rowTwoRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: rowTwoRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert(); 
  }, []);

  const articles = [
    {
      id: 1,
      category: "Featured Article",
      title: "Common Myths About GLP-1 Weight Loss Drugs & The Truths You Actually Need",
      description: "So, you've done your homework, talked to your doctor, and maybe even decided to start a GLP-1 medication. Then the opinions start arriving... Let's sort through some of the most common myths and the truths you actually need to hear.",
      readTime: "9 MIN READ"
    },
    {
      id: 2,
      category: "Health Insight",
      title: "Common Myths About GLP-1 Medications: What Patients on Mounjaro and Wegovy Need to Know.",
      description: "So, you've done your homework, talked to your doctor, and maybe even decided to start (or seriously consider) a GLP-1...",
      readTime: "4 MIN READ"
    },
    {
      id: 3,
      category: "Health Insight",
      title: "How Do GLP-1 Medications Work? Mounjaro, Wegovy, and the Science Behind Appetite Suppression.",
      description: "In our last article, we talked about what GLP-1 medications are—a lab-made version of a natural hormone your body already...",
      readTime: "4 MIN READ"
    },
    {
      id: 4,
      category: "Health Insight",
      title: "What Are GLP-1 Medications? A Plain-Language Guide to Mounjaro, Wegovy, and Ozempic.",
      description: "If you've just been prescribed a GLP-1 medication, you might be hearing a lot of new terms, seeing before-and-after...",
      readTime: "4 MIN READ"
    },
    {
      id: 5,
      category: "Health Insight",
      title: "How to Track Your GLP-1 Progress for Long-Term Weight Loss Success.",
      description: "GLP-1 medications like Mounjaro can be a powerful kick-start to weight loss, but long-term success relies on more than...",
      readTime: "4 MIN READ"
    },
    {
      id: 6,
      category: "Health Insight",
      title: "Why Tracking Your GLP-1 Journey Matters: Getting More From Every Dose of Mounjaro or Wegovy.",
      description: "The recent rise in Mounjaro prices has caused some people to rethink their dosing schedules or pause treatment...",
      readTime: "4 MIN READ"
    }
  ];

  return (
    <div id="library" ref={containerRef} className="bg-[#e6eae8] min-h-screen pb-20 scroll-mt-20">
      <CenterText />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div ref={rowOneRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="card-animate">
            <CardText {...articles[0]} onOpenPopup={() => setActiveArticle(articles[0])} />
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="card-animate">
              <CardText {...articles[1]} onOpenPopup={() => setActiveArticle(articles[1])} />
            </div>
            <div className="card-animate">
              <CardText {...articles[2]} onOpenPopup={() => setActiveArticle(articles[2])} />
            </div>
          </div>
        </div>

        <div ref={rowTwoRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card-animate">
            <CardText {...articles[3]} onOpenPopup={() => setActiveArticle(articles[3])} />
          </div>
          <div className="card-animate">
            <CardText {...articles[4]} onOpenPopup={() => setActiveArticle(articles[4])} />
          </div>
          <div className="card-animate">
            <CardText {...articles[5]} onOpenPopup={() => setActiveArticle(articles[5])} />
          </div>
        </div>

      </div>

      {activeArticle && (
        <ArticleDetailModal 
          article={activeArticle} 
          onClose={() => setActiveArticle(null)} 
        />
      )}
    </div>
  );
};

const ArticleDetailModal = ({ article, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-[2px] p-4 font-sans">
      
      <div className="bg-white w-full max-w-[1060px] h-full max-h-[80vh] rounded-[24px] shadow-xl flex flex-col overflow-hidden relative border border-slate-100">
        
        <div className="p-6 md:p-8 pb-4 border-b border-slate-150 bg-white sticky top-0 z-10">
          <div className="flex justify-between items-start gap-4">
            <div className="space-y-1 max-w-[85%]">
              <h2 className="text-xl md:text-2xl font-extrabold text-[#0f2137] tracking-tight leading-tight">
                {article.title}
              </h2>
              <p className="text-xs md:text-sm text-slate-500 font-normal">
                Sorting through the most common myths and the truths you actually need to hear
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 10.742l4.571-2.286M15.176 13.514l-4.57 2.285M19 12a3 3 0 11-6 0 3 3 0 016 0zM9.75 6a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM9.75 18a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </button>
              
              <button 
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#ff725e] text-white flex items-center justify-center shadow-xs hover:bg-[#e6614f] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[11px] md:text-xs text-slate-400 font-semibold pt-3">
            <span className="text-slate-800">Lotessa Team</span>
            <span className="text-slate-200">|</span>
            <div className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>2025-10-13T09:32:47.779788+00:00</span>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto p-6 md:p-8 flex-grow bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-4 text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal tracking-wide pr-2">
              <p>So, you've done your homework, talked to your doctor, and maybe even decided to start (or seriously consider) a <strong className="text-zinc-900 font-bold">GLP-1</strong> medication.</p>
              <p>Then the opinions start arriving.</p>
              <p>A colleague tells you it's "basically cheating."</p>
              <p>While these medications were first developed for type 2 diabetes, some are approved in specific doses for weight management. Whether they're right for you depends on your medical history, not just a diagnosis. That's why an individualised assessment with your doctor matters most.</p>
              <p>A family member warns you that you'll "never be able to enjoy your favourite foods again."</p>
              <p>And somewhere online, someone claims they "lost 20 pounds in a month without changing a thing."</p>
              <p>It can be hard to know what's real and what's just a story passed along without facts. Let's sort through some of the most common myths and the truths you actually need to hear.</p>
              <p>"You'll lose all the weight instantly."</p>
              <p>Everybody responds differently. Factors like your metabolism, health conditions, daily habits, and even how you eat while on the medication all affect results. Two people on the same treatment may have completely different experiences and that's normal.</p>
              <p><strong className="text-zinc-900 font-bold">GLP-1</strong>  medications are valuable tools, backed by science, but they're not a one-step solution. The best results happen when they're combined with healthy lifestyle habits and ongoing medical support. Ignore the noise, the real path forward is the one that works for your body, at your pace.</p>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end lg:sticky lg:top-0">
              <div className="w-full max-w-[240px] flex justify-center items-center">
                <img 
                  src="/logo/MainImage2.png" 
                  alt="Lotessa Application Interface Preview View" 
                  className="w-full h-auto object-contain max-h-[360px]"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Cards;