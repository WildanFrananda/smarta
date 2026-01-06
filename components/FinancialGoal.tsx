import React, { useState } from 'react';
import { ArrowLeft, Target, Plus, Plane, Home as HomeIcon, GraduationCap, Car, TrendingUp } from 'lucide-react';
import { Screen } from '@/app/page';

interface FinancialGoalProps {
  onNavigate: (screen: Screen) => void;
}

interface Goal {
  id: number;
  title: string;
  target: number;
  current: number;
  deadline: string;
  icon: React.ElementType;
  color: string;
}

const goals: Goal[] = [
  {
    id: 1,
    title: 'Liburan ke Jepang',
    target: 25000000,
    current: 12500000,
    deadline: '2026-06-01',
    icon: Plane,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Dana Darurat',
    target: 30000000,
    current: 25000000,
    deadline: '2026-12-31',
    icon: Target,
    color: 'green',
  },
  {
    id: 3,
    title: 'DP Motor Baru',
    target: 8000000,
    current: 3500000,
    deadline: '2026-09-01',
    icon: Car,
    color: 'purple',
  },
];

export default function FinancialGoal({ onNavigate }: FinancialGoalProps) {
  const [showAddModal, setShowAddModal] = useState(false);

  // Calculate Financial Health Score
  const totalSavings = 25000000;
  const monthlyIncome = 12000000;
  const monthlyExpense = 5200000;
  const savingsRate = ((monthlyIncome - monthlyExpense) / monthlyIncome) * 100;
  const emergencyFundMonths = totalSavings / monthlyExpense;

  // Simple scoring algorithm
  const healthScore = Math.min(100, Math.round(
    (savingsRate * 0.4) + // 40% weight on savings rate
    (Math.min(emergencyFundMonths / 6, 1) * 30) + // 30% weight on emergency fund (target: 6 months)
    (goals.reduce((sum, goal) => sum + (goal.current / goal.target), 0) / goals.length * 30) // 30% weight on goal progress
  ));

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreGradient = (score: number) => {
    if (score >= 80) return 'from-green-400 to-green-600';
    if (score >= 60) return 'from-blue-400 to-blue-600';
    if (score >= 40) return 'from-orange-400 to-orange-600';
    return 'from-red-400 to-red-600';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Needs Improvement';
  };

  return (
    <div className="min-h-screen pb-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-b-[2rem] md:rounded-none px-6 md:px-8 lg:px-12 pt-12 pb-6 shadow-xl">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => onNavigate('dashboard')}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/30 transition-all md:hidden"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white">Financial Goal & Health</h2>
        </div>
        <p className="text-teal-100 text-sm">Target keuangan dan skor kesehatan</p>
      </div>

      <div className="px-6 md:px-8 lg:px-12 mt-6 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Financial Health Score */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-white/50">
            <h3 className="text-gray-800 mb-6">Financial Health Score</h3>

            <div className="flex flex-col items-center mb-6">
              <div className="relative w-40 h-40 mb-4">
                <svg className="transform -rotate-90 w-40 h-40">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#e5e7eb"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${(healthScore / 100) * 439.6} 439.6`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" className={`${healthScore >= 80 ? 'stop-color-green-400' : healthScore >= 60 ? 'stop-color-blue-400' : 'stop-color-orange-400'}`} />
                      <stop offset="100%" className={`${healthScore >= 80 ? 'stop-color-green-600' : healthScore >= 60 ? 'stop-color-blue-600' : 'stop-color-orange-600'}`} />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-4xl ${getScoreColor(healthScore)}`}>{healthScore}</span>
                  <span className="text-sm text-gray-500">/100</span>
                </div>
              </div>

              <div className={`px-4 py-2 rounded-xl bg-gradient-to-r ${getScoreGradient(healthScore)} bg-opacity-10`}>
                <span className={`${getScoreColor(healthScore)}`}>{getScoreLabel(healthScore)}</span>
              </div>
            </div>

            {/* Health Metrics */}
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-sm text-gray-600">Savings Rate</span>
                <span className="text-green-600">{savingsRate.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-sm text-gray-600">Emergency Fund</span>
                <span className="text-blue-600">{emergencyFundMonths.toFixed(1)} bulan</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Active Goals</span>
                <span className="text-purple-600">{goals.length} target</span>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl p-5 border border-teal-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-teal-800 mb-1">Rekomendasi Target</h4>
                <p className="text-sm text-teal-700 leading-relaxed">
                  Dengan savings rate saat ini (56.7%), Anda bisa mencapai target &quot;Liburan ke Jepang&quot; dalam 2 bulan! Sisihkan Rp 6.25jt/bulan untuk mencapainya tepat waktu. 🎯
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Goals List */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-800">Target Keuangan Saya</h3>
            <button
              onClick={() => setShowAddModal(true)}
              className="text-teal-600 text-sm flex items-center gap-1 hover:text-teal-700"
            >
              <Plus className="w-4 h-4" />
              Tambah
            </button>
          </div>

          <div className="space-y-3">
            {goals.map((goal) => {
              const Icon = goal.icon;
              const progress = (goal.current / goal.target) * 100;
              const monthsLeft = Math.ceil(
                (new Date(goal.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24 * 30)
              );

              return (
                <div
                  key={goal.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-white/50"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-${goal.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 text-${goal.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-800 mb-1">{goal.title}</h4>
                      <p className="text-xs text-gray-500">Target: {new Date(goal.deadline).toLocaleDateString('id-ID', { year: 'numeric', month: 'long' })}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-700">
                        {progress.toFixed(0)}%
                      </p>
                      <p className="text-xs text-gray-500">{monthsLeft} bulan</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-${goal.color}-400 to-${goal.color}-600 rounded-full transition-all duration-500`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Rp {goal.current.toLocaleString('id-ID')}
                    </span>
                    <span className="text-sm text-gray-800">
                      Rp {goal.target.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Add Goal Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end justify-center z-50 p-6">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
            <h3 className="text-gray-800 mb-4">Tambah Target Baru</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Nama Target</label>
                <input
                  type="text"
                  placeholder="Contoh: Beli Laptop Baru"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Target Jumlah</label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Deadline</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all"
                />
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
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30 hover:shadow-xl transition-all"
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