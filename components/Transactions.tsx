import React, { useState } from 'react';
import { ArrowLeft, Calendar, Filter, Search, Plus, ShoppingBag, Home, Utensils, Car, Briefcase, Heart, Gift, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { Screen } from '@/app/page';

interface TransactionsProps {
  onNavigate: (screen: Screen) => void;
}

const transactions = [
  { id: 1, title: 'Gaji Bulanan', amount: 8500000, type: 'income', category: 'Gaji', date: '2025-12-01', icon: Briefcase },
  { id: 2, title: 'Belanja Bulanan', amount: -1250000, type: 'expense', category: 'Belanja', date: '2025-12-03', icon: ShoppingBag },
  { id: 3, title: 'Bayar Listrik', amount: -450000, type: 'expense', category: 'Utilitas', date: '2025-12-05', icon: Home },
  { id: 4, title: 'Makan Siang', amount: -85000, type: 'expense', category: 'Makanan', date: '2025-12-10', icon: Utensils },
  { id: 5, title: 'Bensin', amount: -200000, type: 'expense', category: 'Transportasi', date: '2025-12-12', icon: Car },
  { id: 6, title: 'Freelance Project', amount: 3500000, type: 'income', category: 'Freelance', date: '2025-12-15', icon: Briefcase },
  { id: 7, title: 'Kopi & Snack', amount: -65000, type: 'expense', category: 'Makanan', date: '2025-12-18', icon: Utensils },
  { id: 8, title: 'Hadiah Ulang Tahun', amount: -350000, type: 'expense', category: 'Hadiah', date: '2025-12-20', icon: Gift },
];

const categories = ['Semua', 'Belanja', 'Makanan', 'Transportasi', 'Utilitas', 'Gaji', 'Freelance', 'Hadiah'];

export default function Transactions({ onNavigate }: TransactionsProps) {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredTransactions = selectedCategory === 'Semua'
    ? transactions
    : transactions.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen pb-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-b-[2rem] md:rounded-none px-6 md:px-8 lg:px-12 pt-12 pb-6 shadow-xl">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => onNavigate('dashboard')}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/30 transition-all md:hidden"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white">Transaksi & Pencatatan</h2>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300" />
          <input
            type="text"
            placeholder="Cari transaksi..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-blue-200 focus:bg-white/30 focus:ring-2 focus:ring-white/50 outline-none transition-all"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 text-white text-sm hover:bg-white/30 transition-all">
            <Calendar className="w-4 h-4" />
            Bulan Ini
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 text-white text-sm hover:bg-white/30 transition-all">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      <div className="px-6 md:px-8 lg:px-12 mt-6 space-y-6">
        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap transition-all ${selectedCategory === category
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                : 'bg-white/80 text-gray-700 border border-gray-200 hover:border-blue-300'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Transaction List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredTransactions.map((transaction) => {
            const Icon = transaction.icon;
            return (
              <div
                key={transaction.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-white/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${transaction.type === 'income'
                    ? 'bg-green-100'
                    : 'bg-red-100'
                    }`}>
                    <Icon className={`w-6 h-6 ${transaction.type === 'income'
                      ? 'text-green-600'
                      : 'text-red-600'
                      }`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-800 mb-1">{transaction.title}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{transaction.category}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">
                        {new Date(transaction.date).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short'
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`${transaction.type === 'income'
                      ? 'text-green-600'
                      : 'text-red-600'
                      }`}>
                      {transaction.type === 'income' ? '+' : '-'}Rp {Math.abs(transaction.amount).toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add Transaction Button */}
        <button
          onClick={() => setShowAddModal(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl shadow-blue-500/40 flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all active:scale-95 z-50"
        >
          <Plus className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Add Transaction Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end justify-center z-50 p-6">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl animate-slide-up">
            <h3 className="text-gray-800 mb-4">Tambah Transaksi</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Judul</label>
                <input
                  type="text"
                  placeholder="Nama transaksi"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Jumlah</label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Tipe</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="py-3 rounded-xl bg-green-50 border-2 border-green-400 text-green-600 hover:bg-green-100 transition-all">
                    <ArrowDownLeft className="w-5 h-5 mx-auto mb-1" />
                    Pemasukan
                  </button>
                  <button className="py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 hover:bg-gray-100 transition-all">
                    <ArrowUpRight className="w-5 h-5 mx-auto mb-1" />
                    Pengeluaran
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Kategori</label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all">
                  <option>Pilih kategori</option>
                  <option>Belanja</option>
                  <option>Makanan</option>
                  <option>Transportasi</option>
                  <option>Utilitas</option>
                  <option>Gaji</option>
                  <option>Freelance</option>
                </select>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
                >
                  Batal
                </button>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}