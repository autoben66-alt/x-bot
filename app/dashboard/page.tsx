"use client";

import React, { useState } from 'react';
import { 
  Save, 
  MessageCircle, 
  Wifi, 
  Clock, 
  Settings, 
  Power, 
  Smartphone,
  CheckCircle2,
  Bot,
  Database,
  LineChart,
  CreditCard,
  MessageSquare,
  UploadCloud,
  Plus
} from 'lucide-react';

const XBotDashboard = () => {
  // 模擬資料庫中的業者設定 (User Config)
  const [config, setConfig] = useState({
    isActive: true, 
    isLineConnected: true,
    shopName: "灣琉海景 Villa",
    checkIn: "15:00",
    checkOut: "11:00",
    wifiSsid: "Bayliu_Guest",
    wifiPass: "bayliu888",
    tone: "enthusiastic",
    customRules: "遇到客人殺價，委婉拒絕並說明我們已經是優惠價。"
  });

  // 模擬自訂問答庫
  const [qaList, setQaList] = useState([
    { q: "請問有提供早餐嗎？", a: "有的！我們提供在地特色洪媽媽早餐，供應時間為 08:00 - 10:00。" },
    { q: "可以帶寵物嗎？", a: "不好意思，為了維護其他旅客權益，我們目前全面禁止攜帶寵物入住喔。" }
  ]);

  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: 'assistant', content: '嗨！我是灣琉海景 Villa 的 AI 小管家，有什麼我可以幫您的嗎？😊' }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setConfig(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSaveMessage("AI 模型訓練完成！知識庫已同步。");
      setTimeout(() => setSaveMessage(""), 3000);
    }, 1200); // 模擬稍微長一點的訓練時間
  };

  // 模擬更聰明的 AI 回覆邏輯
  const simulateAIResponse = (question) => {
    let response = "";
    const q = question.toLowerCase();

    // 1. 先找自訂問答庫
    const matchedQA = qaList.find(item => q.includes(item.q.replace(/請問|嗎|？|\?/g, '')));
    if (matchedQA) {
      return matchedQA.a + (config.tone === 'enthusiastic' ? " 🥰" : "");
    }

    // 2. 找基礎設定
    if (q.includes("wifi") || q.includes("網路")) {
      response = `收到！我們的 WiFi 帳號是【${config.wifiSsid}】，密碼是【${config.wifiPass}】。📶`;
    } else if (q.includes("入住") || q.includes("幾點") || q.includes("時間")) {
      response = `我們的入住時間是 ${config.checkIn} 之後，退房時間是 ${config.checkOut} 之前。🏠`;
    } else if (q.includes("便宜") || q.includes("折扣") || q.includes("殺價")) {
      response = `關於價格的部分，${config.customRules} 感謝您的體諒！🙏`;
    } else {
      response = `這個問題有點考倒我了😅！我先幫您記錄下來，稍後真人管家會親自回覆您喔！`;
    }

    if (config.tone === 'professional') {
      response = response.replace(/喔！|🥰|📶|🏠|🙏|😅/g, "。").replace("😊", "");
    }

    return response;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newHistory = [...chatHistory, { role: 'user', content: inputMessage }];
    setChatHistory(newHistory);
    const currentInput = inputMessage;
    setInputMessage("");

    setTimeout(() => {
      const aiReply = simulateAIResponse(currentInput);
      setChatHistory(prev => [...prev, { role: 'assistant', content: aiReply }]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans text-slate-800">
      
      {/* 獨立產品的側邊導航 */}
      <aside className="w-full md:w-64 bg-[#0f172a] text-white flex-shrink-0 flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <Bot size={28} className="text-indigo-400" />
            <h1 className="text-2xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
              X-Bot
            </h1>
          </div>
          <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-widest font-semibold">by X-Islands</p>
        </div>
        
        <nav className="flex-1 mt-6 px-4 space-y-2">
          <a href="#" className="flex items-center space-x-3 px-4 py-3 bg-indigo-500 bg-opacity-10 rounded-xl text-indigo-400 font-medium border border-indigo-500 border-opacity-20">
            <Database size={20} />
            <span>AI 知識庫訓練</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-slate-200 rounded-xl transition">
            <MessageSquare size={20} />
            <span>對話接管與紀錄</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-slate-200 rounded-xl transition">
            <LineChart size={20} />
            <span>成效與數據分析</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-slate-200 rounded-xl transition">
            <Settings size={20} />
            <span>LINE 官方帳號串接</span>
          </a>
        </nav>

        <div className="p-4 m-4 bg-slate-800 rounded-xl border border-slate-700">
          <div className="flex items-center space-x-2 text-sm text-slate-300 mb-2">
            <CreditCard size={16} />
            <span className="font-bold">專業版方案</span>
          </div>
          <p className="text-xs text-slate-500 mb-3">本月已為您省下 32 小時客服時間</p>
          <div className="w-full bg-slate-900 rounded-full h-2">
            <div className="bg-indigo-500 h-2 rounded-full w-3/4"></div>
          </div>
          <p className="text-[10px] text-right text-slate-500 mt-1">Token 使用量 75%</p>
        </div>
      </aside>

      {/* 主內容區 */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          
          <header className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">知識庫訓練中心</h2>
              <p className="text-slate-500 mt-1">餵給 AI 越多資訊，它就能幫您回答越準確。</p>
            </div>
            <div className="flex items-center space-x-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200">
              <div className="relative flex h-3 w-3">
                {config.isActive && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>}
                <span className={`relative inline-flex rounded-full h-3 w-3 ${config.isActive ? 'bg-green-500' : 'bg-red-500'}`}></span>
              </div>
              <span className="text-sm font-bold text-slate-700">
                {config.isActive ? 'AI 正在值班中' : 'AI 已暫停服務'}
              </span>
            </div>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* 左側：強大的設定區塊 */}
            <div className="xl:col-span-2 space-y-6">
              
              {/* 總開關 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                    <Power size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">啟用 AI 自動回覆</h3>
                    <p className="text-sm text-slate-500">當您忙碌時，X-Bot 將第一時間回覆客人。</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" name="isActive" checked={config.isActive} onChange={handleInputChange} className="sr-only peer" />
                  <div className="w-14 h-7 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>

              {/* 基礎參數 - 簡化排版 */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center">
                  <Settings size={18} className="mr-2 text-indigo-500" /> 基礎變數設定
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">入住時間 / 退房時間</label>
                    <div className="flex space-x-2">
                      <input type="time" name="checkIn" value={config.checkIn} onChange={handleInputChange} className="w-1/2 p-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                      <input type="time" name="checkOut" value={config.checkOut} onChange={handleInputChange} className="w-1/2 p-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">WiFi 帳號 / 密碼</label>
                    <div className="flex space-x-2">
                      <input type="text" name="wifiSsid" value={config.wifiSsid} onChange={handleInputChange} className="w-1/2 p-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                      <input type="text" name="wifiPass" value={config.wifiPass} onChange={handleInputChange} className="w-1/2 p-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 進階：自訂問答庫 (展現產品力) */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-slate-800 flex items-center">
                    <Database size={18} className="mr-2 text-indigo-500" /> 自訂專屬問答庫 (Q&A)
                  </h3>
                  <button className="text-sm text-indigo-600 font-bold hover:text-indigo-800 flex items-center bg-indigo-50 px-3 py-1.5 rounded-lg">
                    <Plus size={16} className="mr-1" /> 新增問答
                  </button>
                </div>
                
                <div className="space-y-3">
                  {qaList.map((qa, index) => (
                    <div key={index} className="border border-slate-200 rounded-xl p-4 hover:border-indigo-300 transition group relative">
                      <div className="font-bold text-slate-700 mb-1 flex items-start">
                        <span className="text-indigo-500 mr-2">Q:</span> {qa.q}
                      </div>
                      <div className="text-slate-600 text-sm flex items-start">
                        <span className="text-emerald-500 mr-2 font-bold">A:</span> {qa.a}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 文件上傳區 (概念展示) */}
                <div className="mt-6 border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:bg-slate-50 transition cursor-pointer">
                  <UploadCloud size={32} className="mx-auto text-slate-400 mb-2" />
                  <p className="text-sm font-bold text-slate-600">上傳您的民宿介紹 PDF / Word 檔</p>
                  <p className="text-xs text-slate-400 mt-1">AI 會自動閱讀文件，並在客人發問時提取正確答案。</p>
                </div>
              </div>

               {/* AI 個性與指令 */}
               <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center">
                  <MessageCircle size={18} className="mr-2 text-indigo-500" /> AI 個性與隱藏指令
                </h3>
                
                <div className="mb-6 flex space-x-4">
                  <label className={`flex-1 border-2 rounded-xl p-4 cursor-pointer transition ${config.tone === 'enthusiastic' ? 'border-indigo-500 bg-indigo-50 shadow-sm' : 'border-slate-200 hover:border-indigo-200'}`}>
                    <input type="radio" name="tone" value="enthusiastic" checked={config.tone === 'enthusiastic'} onChange={handleInputChange} className="hidden" />
                    <div className="font-bold text-slate-800">🔥 充滿熱情與在地人情味</div>
                  </label>
                  <label className={`flex-1 border-2 rounded-xl p-4 cursor-pointer transition ${config.tone === 'professional' ? 'border-indigo-500 bg-indigo-50 shadow-sm' : 'border-slate-200 hover:border-indigo-200'}`}>
                    <input type="radio" name="tone" value="professional" checked={config.tone === 'professional'} onChange={handleInputChange} className="hidden" />
                    <div className="font-bold text-slate-800">👔 專業俐落飯店管家風</div>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">給 AI 的特殊交代 (System Prompt 增強)</label>
                  <textarea 
                    name="customRules" 
                    value={config.customRules}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm text-slate-600 h-24"
                    placeholder="例如：絕對不要答應客人提早入住的要求..."
                  ></textarea>
                </div>
              </div>

              {/* 儲存按鈕 */}
              <div className="flex items-center justify-end pt-2 pb-8">
                <span className="text-emerald-600 font-bold text-sm transition-opacity duration-300 mr-4" style={{ opacity: saveMessage ? 1 : 0 }}>
                  <CheckCircle2 size={18} className="inline mr-1" />
                  {saveMessage}
                </span>
                <button 
                  onClick={handleSave}
                  disabled={isSaving}
                  className={`flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-8 py-3.5 rounded-xl font-bold hover:shadow-lg hover:from-indigo-700 hover:to-cyan-700 transition transform active:scale-95 ${isSaving ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <Save size={20} />
                  <span>{isSaving ? '正在編譯神經網路...' : '儲存並重新訓練 AI'}</span>
                </button>
              </div>

            </div>

            {/* 右側：即時測試沙盒 (更現代感的手機框) */}
            <div className="xl:col-span-1">
              <div className="sticky top-8">
                
                <div className="flex items-center justify-between mb-4 px-2">
                  <h3 className="font-bold text-slate-700 flex items-center">
                    <Smartphone size={18} className="mr-2" /> 即時測試沙盒
                  </h3>
                  <button onClick={() => setChatHistory([{ role: 'assistant', content: '嗨！測試重啟，請發問。' }])} className="text-xs text-slate-400 hover:text-indigo-500">
                    清空對話
                  </button>
                </div>

                <div className="bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-slate-800 w-full max-w-sm mx-auto h-[650px] flex flex-col relative overflow-hidden">
                  
                  {/* 手機瀏海 */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>

                  {/* LINE Header */}
                  <div className="bg-[#242e38] text-white p-4 pt-8 rounded-t-3xl flex items-center space-x-3 z-10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-md">
                      <Bot size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{config.shopName}</div>
                      <div className="text-[10px] text-green-400 font-medium">● 機器人自動回覆中</div>
                    </div>
                  </div>

                  {/* Chat Area */}
                  <div className="flex-1 bg-[#7289da] bg-opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] overflow-y-auto p-4 space-y-4">
                     
                     {chatHistory.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                          {msg.role === 'assistant' && (
                             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 flex-shrink-0 mr-2 flex items-center justify-center text-white text-xs shadow-sm mt-1">
                               <Bot size={14} />
                             </div>
                          )}
                          <div className={`max-w-[80%] p-3.5 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                            msg.role === 'user' 
                              ? 'bg-emerald-400 text-slate-900 rounded-tr-sm' 
                              : 'bg-white text-slate-800 rounded-tl-sm'
                          }`}>
                            {msg.content}
                          </div>
                        </div>
                     ))}
                  </div>

                  {/* Input Area */}
                  <form onSubmit={handleSendMessage} className="bg-white p-2.5 flex items-center space-x-2 rounded-b-3xl border-t border-slate-100 pb-4">
                    <input 
                      type="text" 
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="測試發問 (如: 早餐吃什麼?)"
                      className="flex-1 bg-slate-100 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />
                    <button type="submit" disabled={!inputMessage.trim()} className="bg-indigo-500 w-10 h-10 flex items-center justify-center rounded-full text-white disabled:opacity-50 hover:bg-indigo-600 hover:shadow-md transition">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default XBotDashboard;