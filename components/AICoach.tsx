import React, { useState } from 'react';
import { ArrowLeft, Send, Sparkles, Bot } from 'lucide-react';
import { Screen } from '@/app/page';

interface AICoachProps {
  onNavigate: (screen: Screen) => void;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: 'Hai! Saya AI Coach keuangan Anda. Saya di sini untuk membantu Anda membuat keputusan keuangan yang lebih baik. Ada yang bisa saya bantu hari ini?',
    sender: 'ai',
    timestamp: new Date(),
  }
];

const suggestedQuestions = [
  'Bagaimana cara menghemat lebih banyak?',
  'Analisis pengeluaran saya',
  'Tips investasi untuk pemula',
  'Apakah saya boros?',
];

export default function AICoach({ onNavigate }: AICoachProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputText),
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setInputText('');
  };

  const getAIResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();

    if (lowerQuestion.includes('hemat') || lowerQuestion.includes('saving')) {
      return 'Berdasarkan analisis saya, Anda sudah melakukan pekerjaan yang sangat baik! Tingkat tabungan Anda 56.7% - luar biasa! 🎉\n\nUntuk mengoptimalkan lebih lanjut:\n\n1. Pengeluaran makanan Anda (Rp 1.5jt) bisa dikurangi dengan meal prep 2-3x seminggu\n2. Manfaatkan promo kartu kredit untuk belanja bulanan\n3. Review langganan digital yang jarang digunakan\n\nDengan optimasi ini, Anda bisa menabung tambahan ~Rp 500rb/bulan! 💰';
    }

    if (lowerQuestion.includes('analisis') || lowerQuestion.includes('pengeluaran')) {
      return 'Mari saya analisis pola pengeluaran Anda:\n\n📊 Breakdown:\n• Makanan: 29% (Rp 1.5jt) - Sedikit tinggi\n• Belanja: 24% (Rp 1.25jt) - Normal\n• Transportasi: 15% (Rp 800rb) - Efisien\n• Utilitas: 13% (Rp 650rb) - Baik\n\n✅ Yang sudah bagus:\n- Pengeluaran konsisten & terkontrol\n- Tidak ada kategori yang ekstrem\n\n💡 Peluang perbaikan:\n- Kurangi makan di luar 1-2x/minggu\n- Bandingkan harga sebelum belanja bulanan';
    }

    if (lowerQuestion.includes('investasi') || lowerQuestion.includes('invest')) {
      return 'Bagus sekali Anda mulai tertarik investasi! Dengan tingkat tabungan 56.7%, Anda punya modal kuat untuk mulai.\n\n🌱 Untuk Pemula:\n\n1. Emergency Fund dulu (3-6 bulan pengeluaran) = ~Rp 15-30 jt\n2. Mulai dengan Reksa Dana Pasar Uang (risk rendah)\n3. Setelah nyaman, coba Reksa Dana Campuran\n4. Pelajari gradual tentang saham\n\n⚠️ Ingat:\n- Jangan investasi uang yang akan dipakai 1-2 tahun ke depan\n- Diversifikasi itu penting\n- Start small, learn big\n\nMau saya bantu hitung berapa yang bisa dialokasikan untuk investasi?';
    }

    if (lowerQuestion.includes('boros')) {
      return 'Tidak sama sekali! Data Anda menunjukkan:\n\n✨ Tingkat tabungan: 56.7% (Excellent!)\n📉 Pengeluaran vs pendapatan: Sangat sehat\n📊 Spending pattern: Konsisten & terkontrol\n\nAnda sebenarnya termasuk kategori "financially disciplined"! 🎯\n\nYang perlu dijaga:\n- Maintain kebiasaan baik ini\n- Jangan terlalu ketat sampai tidak menikmati hidup\n- Balance antara saving & living\n\nKamu hebat! Keep it up! 💪';
    }

    return 'Terima kasih atas pertanyaannya! Berdasarkan data keuangan Anda, saya melihat Anda sudah mengelola keuangan dengan sangat baik. Tingkat tabungan 56.7% adalah pencapaian luar biasa!\n\nAda aspek keuangan spesifik yang ingin kita diskusikan lebih dalam? Saya siap membantu dengan analisis detail. 😊';
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputText(question);
  };

  return (
    <div className="min-h-screen pb-6 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-b-[2rem] md:rounded-none px-6 md:px-8 lg:px-12 pt-12 pb-6 shadow-xl">
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('dashboard')}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/30 transition-all md:hidden"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-white">AI Financial Coach</h2>
              <p className="text-pink-100 text-xs">Pendamping keuangan personal</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 px-6 md:px-8 lg:px-12 py-6 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] md:max-w-[70%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
              {message.sender === 'ai' && (
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs text-gray-500">AI Coach</span>
                </div>
              )}
              <div
                className={`rounded-2xl p-4 ${message.sender === 'user'
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white'
                    : 'bg-white/80 backdrop-blur-sm border border-white/50 shadow-md text-gray-700'
                  }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
              </div>
              <p className="text-xs text-gray-400 mt-1 px-2">
                {message.timestamp.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Suggested Questions */}
      {messages.length <= 2 && (
        <div className="px-6 md:px-8 lg:px-12 pb-4">
          <p className="text-xs text-gray-500 mb-3">Pertanyaan yang sering diajukan:</p>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedQuestion(question)}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl text-xs text-gray-700 whitespace-nowrap hover:border-pink-300 hover:bg-pink-50 transition-all"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="px-6 md:px-8 lg:px-12 pb-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-3 flex items-center gap-3 max-w-3xl mx-auto">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Tanya tentang keuangan Anda..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
          />
          <button
            onClick={handleSend}
            disabled={!inputText.trim()}
            className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}