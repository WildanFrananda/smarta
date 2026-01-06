import React, { useState } from 'react';
import { ArrowLeft, Shield, Lock, Smartphone, Eye, Key, CheckCircle, AlertCircle, Fingerprint } from 'lucide-react';
import { Screen } from '@/app/page';

interface SecurityProps {
  onNavigate: (screen: Screen) => void;
}

export default function Security({ onNavigate }: SecurityProps) {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [biometricEnabled, setBiometricEnabled] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState('15');
  const [showChangePin, setShowChangePin] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pb-24 md:pb-8">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => onNavigate('profile')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Kembali</span>
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-gray-800">Keamanan</h1>
              <p className="text-sm text-gray-500">Kelola pengaturan keamanan akun</p>
            </div>
          </div>

          {/* Security Status */}
          <div className="bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 rounded-3xl p-6 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-green-100 text-sm">Status Keamanan</p>
                <h3 className="text-white">Terlindungi</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span>Level: Sangat Aman</span>
              <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full w-[90%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Factor Authentication */}
        <div className="mb-6">
          <h3 className="text-gray-800 mb-4">Autentikasi Dua Faktor</h3>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-gray-100 mb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-800 mb-1">PIN 6 Digit</h4>
                  <p className="text-sm text-gray-500 mb-3">
                    Gunakan PIN untuk verifikasi setiap transaksi dan login
                  </p>
                  {twoFactorEnabled && (
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span>Aktif sejak 5 Jan 2026</span>
                    </div>
                  )}
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={twoFactorEnabled}
                  onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-gray-100">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Fingerprint className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-800 mb-1">Biometric Login</h4>
                  <p className="text-sm text-gray-500 mb-3">
                    Gunakan sidik jari atau Face ID untuk akses cepat
                  </p>
                  {biometricEnabled && (
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span>Terdaftar 1 perangkat</span>
                    </div>
                  )}
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={biometricEnabled}
                  onChange={(e) => setBiometricEnabled(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
            </div>
          </div>
        </div>

        {/* PIN Management */}
        <div className="mb-6">
          <h3 className="text-gray-800 mb-4">Manajemen PIN</h3>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Key className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-800 mb-1">Ubah PIN</h4>
                  <p className="text-sm text-gray-500">Terakhir diubah: 5 Jan 2026</p>
                </div>
              </div>
              <button
                onClick={() => setShowChangePin(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all text-sm"
              >
                Ubah PIN
              </button>
            </div>

            <div className="bg-blue-50/50 rounded-xl p-3 border border-blue-200/50">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-700">
                  Gunakan PIN yang unik dan mudah diingat. Jangan gunakan tanggal lahir atau urutan angka berulang.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Session Settings */}
        <div className="mb-6">
          <h3 className="text-gray-800 mb-4">Pengaturan Sesi</h3>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-gray-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-800 mb-1">Auto Logout</h4>
                <p className="text-sm text-gray-500 mb-4">
                  Keluar otomatis setelah tidak aktif
                </p>
                <select
                  value={sessionTimeout}
                  onChange={(e) => setSessionTimeout(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10 outline-none transition-all text-sm"
                >
                  <option value="5">5 menit</option>
                  <option value="15">15 menit</option>
                  <option value="30">30 menit</option>
                  <option value="60">1 jam</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Active Devices */}
        <div className="mb-6">
          <h3 className="text-gray-800 mb-4">Perangkat Aktif</h3>

          <div className="space-y-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-800 text-sm mb-1">iPhone 14 Pro</h4>
                    <p className="text-xs text-gray-500">Jakarta • Aktif sekarang</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-green-100 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-green-700">Perangkat ini</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-800 text-sm mb-1">Chrome - MacBook Pro</h4>
                    <p className="text-xs text-gray-500">Jakarta • 2 jam lalu</p>
                  </div>
                </div>
                <button className="px-3 py-1.5 text-xs text-red-600 hover:bg-red-50 rounded-lg transition-all">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Security Tips */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-5 border border-purple-200/50">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h4 className="text-purple-800 mb-2 text-sm">Tips Keamanan</h4>
              <ul className="text-xs text-purple-700 space-y-1.5">
                <li>✓ Selalu aktifkan 2FA untuk keamanan maksimal</li>
                <li>✓ Ubah PIN secara berkala (setiap 3 bulan)</li>
                <li>✓ Jangan bagikan PIN atau OTP kepada siapapun</li>
                <li>✓ Logout dari perangkat yang tidak dikenal</li>
                <li>✓ Gunakan biometric untuk akses cepat dan aman</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Change PIN Modal */}
      {showChangePin && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="relative max-w-md w-full">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-3xl opacity-20 blur-xl"></div>

              <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50">
                <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>

                <div className="p-6">
                  <h3 className="text-gray-800 mb-4">Ubah PIN</h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">PIN Lama</label>
                      <input
                        type="password"
                        maxLength={6}
                        placeholder="••••••"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10 outline-none transition-all text-center text-2xl tracking-widest"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">PIN Baru</label>
                      <input
                        type="password"
                        maxLength={6}
                        placeholder="••••••"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10 outline-none transition-all text-center text-2xl tracking-widest"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Konfirmasi PIN Baru</label>
                      <input
                        type="password"
                        maxLength={6}
                        placeholder="••••••"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10 outline-none transition-all text-center text-2xl tracking-widest"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setShowChangePin(false)}
                      className="py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all"
                    >
                      Batal
                    </button>
                    <button
                      onClick={() => setShowChangePin(false)}
                      className="py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all"
                    >
                      Simpan
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
