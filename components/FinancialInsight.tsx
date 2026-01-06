import React from 'react';
import { ArrowLeft, TrendingUp, TrendingDown, PieChart, BarChart3 } from 'lucide-react';
import { Screen } from '@/app/page';
import { PieChart as RePieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface FinancialInsightProps {
  onNavigate: (screen: Screen) => void;
}

const categoryData = [
  { name: 'Makanan', value: 1500000, color: '#f97316' },
  { name: 'Transportasi', value: 800000, color: '#3b82f6' },
  { name: 'Belanja', value: 1250000, color: '#8b5cf6' },
  { name: 'Utilitas', value: 650000, color: '#10b981' },
  { name: 'Hiburan', value: 500000, color: '#ec4899' },
  { name: 'Lainnya', value: 500000, color: '#6b7280' },
];

const comparisonData = [
  { month: 'Nov', income: 8000000, expense: 6200000 },
  { month: 'Des', income: 12000000, expense: 5200000 },
];

export default function FinancialInsight({ onNavigate }: FinancialInsightProps) {
  const totalExpense = categoryData.reduce((sum, item) => sum + item.value, 0);
  const savingsRate = ((12000000 - 5200000) / 12000000) * 100;

  return (
    <div className="min-h-screen pb-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-b-[2rem] md:rounded-none px-6 md:px-8 lg:px-12 pt-12 pb-6 shadow-xl">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => onNavigate('dashboard')}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/30 transition-all md:hidden"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white">Financial Insight</h2>
        </div>
        <p className="text-blue-100 text-sm">Analisis mendalam perilaku keuangan Anda</p>
      </div>

      <div className="px-6 md:px-8 lg:px-12 mt-6 space-y-6">
        {/* Comparison Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-white/50">
          <h3 className="text-gray-800 mb-4">Perbandingan Bulan Ini vs Bulan Lalu</h3>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-sm text-green-700">Pemasukan</span>
              </div>
              <p className="text-green-700 mb-1">Rp 12.000.000</p>
              <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-lg">
                +50% dari bulan lalu
              </span>
            </div>

            <div className="bg-blue-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-blue-700">Pengeluaran</span>
              </div>
              <p className="text-blue-700 mb-1">Rp 5.200.000</p>
              <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-lg">
                -16% dari bulan lalu
              </span>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={comparisonData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#10b981" radius={[8, 8, 0, 0]} name="Pemasukan" />
              <Bar dataKey="expense" fill="#ef4444" radius={[8, 8, 0, 0]} name="Pengeluaran" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Spending Pattern */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-white/50">
            <h3 className="text-gray-800 mb-4">Pola Pengeluaran Berdasarkan Kategori</h3>

            <ResponsiveContainer width="100%" height={250}>
              <RePieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number | undefined) => value !== undefined ? `Rp ${value.toLocaleString('id-ID')}` : ''} />
              </RePieChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-2 gap-2 mt-4">
              {categoryData.map((category) => (
                <div key={category.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                  <span className="text-xs text-gray-600">{category.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Pengeluaran</span>
                <span className="text-gray-800">Rp {totalExpense.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>

          {/* Insights & Recommendations - condensed for desktop */}
          <div className="space-y-3">
            <h3 className="text-gray-800">Insight & Rekomendasi</h3>

            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-4 border border-green-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-green-800 mb-1">Tingkat Tabungan Sangat Baik!</h4>
                  <p className="text-sm text-green-700 leading-relaxed">
                    Kamu berhasil menabung {savingsRate.toFixed(1)}% dari pendapatan bulan ini. Ini jauh di atas rata-rata nasional (10-15%).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-4 border border-orange-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <PieChart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-orange-800 mb-1">Pengeluaran Makanan Tinggi</h4>
                  <p className="text-sm text-orange-700 leading-relaxed">
                    Pengeluaran makanan mencapai Rp 1.500.000 (29% dari total). Coba masak di rumah 2-3x seminggu untuk menghemat ~Rp 400.000/bulan.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-4 border border-blue-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-blue-800 mb-1">Pola Belanja Konsisten</h4>
                  <p className="text-sm text-blue-700 leading-relaxed">
                    Pengeluaran belanja bulanan Anda stabil di Rp 1.250.000. Ini menunjukkan kontrol keuangan yang baik!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}