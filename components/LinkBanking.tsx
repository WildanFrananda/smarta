import React, { useState } from 'react';
import { ArrowLeft, Building2, Wallet, Check, Plus, Shield, AlertCircle } from 'lucide-react';
import { Screen } from '@/app/page';

interface LinkBankingProps {
  onNavigate: (screen: Screen) => void;
}

interface BankAccount {
  id: string;
  name: string;
  type: 'bank' | 'ewallet';
  accountNumber: string;
  balance: number;
  logo: string;
  connected: boolean;
}

export default function LinkBanking({ onNavigate }: LinkBankingProps) {
  const [accounts, setAccounts] = useState<BankAccount[]>([
    { id: '1', name: 'BCA', type: 'bank', accountNumber: '****1234', balance: 5250000, logo: '🏦', connected: true },
    { id: '2', name: 'Mandiri', type: 'bank', accountNumber: '****5678', balance: 3100000, logo: '🏦', connected: true },
    { id: '3', name: 'GoPay', type: 'ewallet', accountNumber: '081234567890', balance: 450000, logo: '💳', connected: true },
    { id: '4', name: 'OVO', type: 'ewallet', accountNumber: '081234567890', balance: 275000, logo: '💳', connected: false },
    { id: '5', name: 'DANA', type: 'ewallet', accountNumber: '081234567890', balance: 0, logo: '💳', connected: false },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedType, setSelectedType] = useState<'bank' | 'ewallet'>('bank');

  const availableBanks = [
    { name: 'BCA', logo: '🏦' },
    { name: 'Mandiri', logo: '🏦' },
    { name: 'BNI', logo: '🏦' },
    { name: 'BRI', logo: '🏦' },
    { name: 'CIMB Niaga', logo: '🏦' },
    { name: 'Permata', logo: '🏦' },
    { name: 'Danamon', logo: '🏦' },
    { name: 'BSI', logo: '🏦' },
  ];

  const availableEwallets = [
    { name: 'GoPay', logo: '💳' },
    { name: 'OVO', logo: '💳' },
    { name: 'DANA', logo: '💳' },
    { name: 'ShopeePay', logo: '💳' },
    { name: 'LinkAja', logo: '💳' },
    { name: 'Flip', logo: '💳' },
  ];

  const connectedAccounts = accounts.filter(acc => acc.connected);
  const totalBalance = connectedAccounts.reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pb-24 md:pb-8">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Kembali</span>
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-gray-800">Link Banking & E-Wallet</h1>
              <p className="text-sm text-gray-500">Hubungkan akun keuangan Anda</p>
            </div>
          </div>

          {/* Total Balance Card */}
          <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-3xl p-6 text-white shadow-xl">
            <p className="text-blue-100 text-sm mb-2">Total Saldo Terhubung</p>
            <h2 className="text-white mb-4">Rp {totalBalance.toLocaleString('id-ID')}</h2>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4" />
              <span>{connectedAccounts.length} akun terhubung</span>
            </div>
          </div>
        </div>

        {/* Security Info */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-4 mb-6 border border-blue-200/50">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="text-blue-800 mb-1 text-sm">Keamanan Terjamin</h4>
              <p className="text-xs text-blue-700">
                Koneksi menggunakan OAuth 2.0 dan enkripsi bank-level. Data Anda aman dan tidak akan dibagikan kepada pihak ketiga.
              </p>
            </div>
          </div>
        </div>

        {/* Connected Accounts */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-800">Akun Terhubung</h3>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all text-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Akun</span>
            </button>
          </div>

          <div className="space-y-3">
            {connectedAccounts.length > 0 ? (
              connectedAccounts.map((account) => (
                <div
                  key={account.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-2xl">
                      {account.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-gray-800">{account.name}</h4>
                        <div className="flex items-center gap-1 px-2 py-0.5 bg-green-100 rounded-lg">
                          <Check className="w-3 h-3 text-green-600" />
                          <span className="text-xs text-green-700">Terhubung</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">{account.accountNumber}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">Saldo</p>
                      <p className="text-gray-800">Rp {account.balance.toLocaleString('id-ID')}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-100">
                <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600 mb-1">Belum ada akun terhubung</p>
                <p className="text-sm text-gray-500">Tambahkan akun bank atau e-wallet Anda</p>
              </div>
            )}
          </div>
        </div>

        {/* Available Accounts */}
        <div>
          <h3 className="text-gray-800 mb-4">Akun Tersedia</h3>

          <div className="space-y-3">
            {accounts.filter(acc => !acc.connected).map((account) => (
              <div
                key={account.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-2xl">
                    {account.logo}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-800 mb-1">{account.name}</h4>
                    <p className="text-sm text-gray-500">
                      {account.type === 'bank' ? 'Bank Digital' : 'E-Wallet'}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setAccounts(accounts.map(acc =>
                        acc.id === account.id ? { ...acc, connected: true } : acc
                      ));
                    }}
                    className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all text-sm"
                  >
                    Hubungkan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Account Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="relative max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-3xl opacity-20 blur-xl"></div>

              <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50">
                <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>

                <div className="p-6">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-gray-800 mb-2">Tambah Akun Baru</h3>
                    <p className="text-sm text-gray-500">Pilih jenis dan provider akun</p>
                  </div>

                  {/* Type Selector */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <button
                      onClick={() => setSelectedType('bank')}
                      className={`p-4 rounded-2xl border-2 transition-all ${selectedType === 'bank'
                        ? 'bg-blue-50 border-blue-500'
                        : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <Building2 className={`w-6 h-6 mx-auto mb-2 ${selectedType === 'bank' ? 'text-blue-600' : 'text-gray-600'}`} />
                      <p className={`text-sm ${selectedType === 'bank' ? 'text-blue-700' : 'text-gray-700'}`}>Bank Digital</p>
                    </button>
                    <button
                      onClick={() => setSelectedType('ewallet')}
                      className={`p-4 rounded-2xl border-2 transition-all ${selectedType === 'ewallet'
                        ? 'bg-blue-50 border-blue-500'
                        : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <Wallet className={`w-6 h-6 mx-auto mb-2 ${selectedType === 'ewallet' ? 'text-blue-600' : 'text-gray-600'}`} />
                      <p className={`text-sm ${selectedType === 'ewallet' ? 'text-blue-700' : 'text-gray-700'}`}>E-Wallet</p>
                    </button>
                  </div>

                  {/* Provider List */}
                  <div className="mb-6">
                    <h4 className="text-gray-700 mb-3 text-sm">
                      {selectedType === 'bank' ? 'Pilih Bank' : 'Pilih E-Wallet'}
                    </h4>
                    <div className="grid grid-cols-2 gap-3 max-h-64 overflow-y-auto scrollbar-custom">
                      {(selectedType === 'bank' ? availableBanks : availableEwallets).map((provider) => (
                        <button
                          key={provider.name}
                          className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition-all"
                        >
                          <span className="text-2xl">{provider.logo}</span>
                          <span className="text-sm text-gray-700">{provider.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-yellow-800 mb-1 text-sm">Demo Mode</h4>
                        <p className="text-xs text-yellow-700">
                          Ini adalah fitur demo. Dalam aplikasi nyata, Anda akan diarahkan ke halaman autentikasi provider yang aman.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setShowAddModal(false)}
                      className="py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all"
                    >
                      Batal
                    </button>
                    <button
                      onClick={() => setShowAddModal(false)}
                      className="py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all"
                    >
                      Lanjutkan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
