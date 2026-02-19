"use client";

import React from 'react';
import Link from 'next/link';
import { Bot, ArrowRight, Zap, Shield, MessageCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-100 overflow-x-hidden">
      {/* 導覽列 */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-2">
          <Bot size={32} className="text-indigo-400" />
          <span className="text-2xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            X-Bot
          </span>
        </div>
        <div className="hidden md:flex space-x-8 font-medium text-slate-300">
          <a href="#" className="hover:text-white transition">功能特色</a>
          <a href="#" className="hover:text-white transition">客戶案例</a>
          <a href="#" className="hover:text-white transition">方案計價</a>
        </div>
        
        {/* 這裡使用 Link 導向我們剛剛做好的 dashboard 頁面 */}
        <Link 
          href="/dashboard"
          className="bg-white text-slate-900 px-6 py-2.5 rounded-full font-bold hover:bg-indigo-50 transition shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center"
        >
          登入後台 <ArrowRight size={16} className="ml-2" />
        </Link>
      </nav>

      {/* 英雄區塊 (Hero Section) */}
      <div className="relative pt-20 pb-32 flex flex-col items-center justify-center text-center px-4">
        {/* 背景光暈效果 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-semibold backdrop-blur-sm">
          🚀 X-Islands 旗下最新力作
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
          讓 AI 成為您的 <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
            24H 金牌客服管家
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
          專為民宿與地方業者打造的 LINE 智能回覆系統。<br />
          零程式碼基礎、三分鐘建立專屬知識庫，從此告別半夜回覆訊息的疲勞。
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            href="/dashboard"
            className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition transform hover:-translate-y-1"
          >
            免費體驗 X-Bot
          </Link>
          <button className="px-8 py-4 rounded-full font-bold text-lg border border-slate-700 hover:bg-slate-800 transition text-slate-300">
            預約專人展示
          </button>
        </div>

        {/* 模擬介面漂浮圖 */}
        <div className="mt-20 relative w-full max-w-4xl mx-auto perspective-1000">
           <div className="w-full h-64 md:h-96 bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex transform rotate-x-12 scale-105 opacity-90">
              <div className="w-1/3 border-r border-slate-700 p-4 hidden md:block">
                <div className="h-4 w-24 bg-slate-700 rounded mb-6"></div>
                <div className="space-y-3">
                  <div className="h-8 w-full bg-slate-700 rounded"></div>
                  <div className="h-8 w-full bg-slate-700 rounded"></div>
                  <div className="h-8 w-full bg-indigo-600/30 border border-indigo-500/50 rounded"></div>
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <div className="h-8 w-48 bg-slate-700 rounded mb-8"></div>
                <div className="flex-1 space-y-4">
                  <div className="flex justify-end"><div className="h-10 w-48 bg-emerald-500/80 rounded-2xl rounded-tr-none"></div></div>
                  <div className="flex justify-start"><div className="h-16 w-64 bg-slate-700 rounded-2xl rounded-tl-none"></div></div>
                  <div className="flex justify-end"><div className="h-10 w-32 bg-emerald-500/80 rounded-2xl rounded-tr-none"></div></div>
                </div>
              </div>
           </div>
        </div>
      </div>

      {/* 特色區塊 (Features Section) */}
      <div className="bg-slate-950 py-24 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">為什麼選擇 X-Bot？</h2>
            <p className="text-slate-400">解決旅遊業最痛的客服人力問題，將時間還給現場服務。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition group">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Zap size={28} className="text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">三分鐘建置大腦</h3>
              <p className="text-slate-400 leading-relaxed">
                只需填寫表單或上傳您的入住須知 PDF，X-Bot 就能立刻學會所有房價、交通與規矩，不需要寫任何程式碼。
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition group">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <MessageCircle size={28} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">無縫接軌 LINE OA</h3>
              <p className="text-slate-400 leading-relaxed">
                台灣客人最愛用 LINE。只要一鍵授權，X-Bot 就能直接進駐您的官方帳號，代您親切回覆所有重複性問題。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition group">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Shield size={28} className="text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">精準判斷不瞎掰</h3>
              <p className="text-slate-400 leading-relaxed">
                遇到不懂的問題或需要真人處理的訂單（如：殺價、特殊要求），X-Bot 會聰明地暫停並通知管家接手，絕不亂報價。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}