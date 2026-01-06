import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Send, Wallet, PlusCircle, TrendingUp, TrendingDown, Bell, User, BarChart3, Target, MessageCircle, Building2, Link } from 'lucide-react';
import { Screen } from '@/app/page';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
}

const chartData = [
  { name: 'Jan', income: 4000, expense: 2400 },
  { name: 'Feb', income: 3000, expense: 1398 },
  { name: 'Mar', income: 5000, expense: 3800 },
  { name: 'Apr', income: 4500, expense: 3908 },
  { name: 'May', income: 6000, expense: 4800 },
  { name: 'Jun', income: 5500, expense: 3800 },
];

export default function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-b-[2rem] md:rounded-none px-6 md:px-8 lg:px-12 pt-12 pb-8 shadow-xl">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-blue-100 text-sm mb-1">Selamat datang kembali,</p>
            <h2 className="text-white">Sabrina Nur Amelia</h2>
          </div>
          <div className="flex gap-3 md:hidden">
            <button
              onClick={() => onNavigate('notifications')}
              className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/30 transition-all"
            >
              <Bell className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => onNavigate('profile')}
              className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/30 transition-all"
            >
              <User className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-2xl max-w-2xl">
          <p className="text-blue-100 text-sm mb-2">Saldo Utama</p>
          <h1 className="text-white mb-4">Rp 12.450.000</h1>

          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/20">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-green-400/30 rounded-lg flex items-center justify-center">
                  <ArrowDownLeft className="w-4 h-4 text-green-200" />
                </div>
                <span className="text-blue-100 text-xs">Pemasukan</span>
              </div>
              <p className="text-white">Rp 8.500.000</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-red-400/30 rounded-lg flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-red-200" />
                </div>
                <span className="text-blue-100 text-xs">Pengeluaran</span>
              </div>
              <p className="text-white">Rp 5.200.000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-8 lg:px-12 mt-6 space-y-6">
        {/* Quick Actions */}
        <div>
          <h3 className="text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            <button className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-white/50 hover:shadow-lg transition-all active:scale-95">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Send className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs text-gray-700">Transfer</p>
            </button>
            <button className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-white/50 hover:shadow-lg transition-all active:scale-95">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs text-gray-700">Bayar</p>
            </button>
            <button
              onClick={() => onNavigate('transactions')}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-white/50 hover:shadow-lg transition-all active:scale-95"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <PlusCircle className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs text-gray-700">Catat</p>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Chart Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-white/50">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-800">Grafik Keuangan</h3>
              <button className="text-xs text-blue-500">6 Bulan</button>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f87171" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f87171" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <Tooltip />
                <Area type="monotone" dataKey="income" stroke="#60a5fa" fillOpacity={1} fill="url(#colorIncome)" />
                <Area type="monotone" dataKey="expense" stroke="#f87171" fillOpacity={1} fill="url(#colorExpense)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Financial Insight */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-5 border border-blue-200/50">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-blue-800 mb-1">Financial Insight</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pengeluaran bulan ini turun 12% dari bulan lalu! Kamu berhasil menghemat Rp 750.000. Pertahankan kebiasaan baik ini! 🎉
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button
            onClick={() => onNavigate('insight')}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-white/50 hover:shadow-lg transition-all active:scale-95 text-left"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center mb-3">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-gray-800 mb-1">Insight</h4>
            <p className="text-xs text-gray-500">Analisis keuangan</p>
          </button>

          <button
            onClick={() => onNavigate('coach')}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-white/50 hover:shadow-lg transition-all active:scale-95 text-left"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center mb-3">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-gray-800 mb-1">AI Coach</h4>
            <p className="text-xs text-gray-500">Pendamping keuangan</p>
          </button>

          <button
            onClick={() => onNavigate('goal')}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-white/50 hover:shadow-lg transition-all active:scale-95 text-left"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl flex items-center justify-center mb-3">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-gray-800 mb-1">Financial Goal</h4>
            <p className="text-xs text-gray-500">Target & skor</p>
          </button>

          <button
            onClick={() => onNavigate('transactions')}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-white/50 hover:shadow-lg transition-all active:scale-95 text-left"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-xl flex items-center justify-center mb-3">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-gray-800 mb-1">Transaksi</h4>
            <p className="text-xs text-gray-500">Riwayat lengkap</p>
          </button>
        </div>
      </div>
    </div>
  );
}