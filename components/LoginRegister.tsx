import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Sparkles, ArrowRight, Shield, Fingerprint, ArrowLeft, HelpCircle, X } from 'lucide-react';

interface LoginRegisterProps {
  onLogin: (email: string) => void;
  onBack: () => void;
}

export default function LoginRegister({ onLogin, onBack }: LoginRegisterProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showGuide, setShowGuide] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email || 'user@smarta.app');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-all group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Kembali</span>
        </button>

        {/* Main Card */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-3xl opacity-20 blur-xl"></div>

          {/* Glass Card */}
          <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            {/* Top Accent */}
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>

            <div className="p-8 md:p-10">
              {/* Logo Section */}
              <div className="flex flex-col items-center mb-8">
                <div className="relative mb-6">
                  {/* Logo Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-2xl opacity-40"></div>

                  {/* SMARTA Logo */}
                  <div className="relative">
                    <img
                      src="smarta.png"
                      alt="SMARTA Logo"
                      className="w-auto h-16 md:h-20 object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Welcome Text */}
              <div className="text-center mb-8">
                <h2 className="text-gray-800 mb-2">
                  {isLogin ? 'Selamat Datang Kembali' : 'Mulai Perjalanan Anda'}
                </h2>
                <p className="text-gray-500 text-sm">
                  {isLogin ? 'Masuk untuk melanjutkan' : 'Daftar untuk memulai'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email Input */}
                <div className="group">
                  <label className="block text-sm text-gray-600 mb-2 ml-1">Email / Nomor HP</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nama@email.com"
                      className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-gray-50/50 border-2 border-gray-200/50 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-400/10 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="group">
                  <label className="block text-sm text-gray-600 mb-2 ml-1">Password</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                      <Lock className="w-5 h-5" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-gray-50/50 border-2 border-gray-200/50 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-400/10 outline-none transition-all placeholder:text-gray-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {isLogin && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded-lg border-gray-300 text-blue-500 focus:ring-2 focus:ring-blue-400/20" />
                      <span className="text-gray-600">Ingat saya</span>
                    </label>
                    <button type="button" className="text-blue-500 hover:text-blue-600 transition-colors">
                      Lupa password?
                    </button>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative w-full mt-6 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>

                  <div className="relative w-full bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white py-4 rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.02] active:scale-[0.98]">
                    <span>{isLogin ? 'Masuk' : 'Daftar'}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/90 text-gray-500">atau masuk dengan</span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-gray-50/50 border-2 border-gray-200/50 hover:border-gray-300 hover:bg-white transition-all group">
                  <Shield className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                  <span className="text-sm text-gray-700">Biometric</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-gray-50/50 border-2 border-gray-200/50 hover:border-gray-300 hover:bg-white transition-all group">
                  <Fingerprint className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                  <span className="text-sm text-gray-700">Fingerprint</span>
                </button>
              </div>

              {/* Toggle Login/Register */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  {isLogin ? 'Belum punya akun?' : 'Sudah punya akun?'}
                  {' '}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-blue-500 hover:text-blue-600 transition-colors font-medium"
                  >
                    {isLogin ? 'Daftar di sini' : 'Masuk di sini'}
                  </button>
                </p>
              </div>

              {/* Security Badge */}
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
                <Shield className="w-4 h-4" />
                <span>Dilindungi dengan enkripsi end-to-end</span>
              </div>

              {/* Help Guide Button */}
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => setShowGuide(true)}
                  className="inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Panduan Penggunaan Aplikasi</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* User Guide Modal */}
        {showGuide && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in">
            <div className="relative max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-3xl opacity-20 blur-xl"></div>

                <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>

                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                          <HelpCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-gray-800">Panduan Penggunaan</h3>
                          <p className="text-sm text-gray-500">Aplikasi SMARTA</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowGuide(false)}
                        className="w-8 h-8 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <X className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="space-y-6 scrollbar-custom">
                      <section>
                        <h4 className="text-gray-800 mb-3">🎯 Memulai dengan SMARTA</h4>
                        <ol className="text-sm text-gray-600 space-y-2 ml-4 list-decimal">
                          <li>Daftar akun dengan email atau nomor HP Anda</li>
                          <li>Buat PIN 6 digit untuk keamanan tambahan (2FA)</li>
                          <li>Hubungkan rekening bank atau e-wallet Anda</li>
                          <li>Mulai catat transaksi dan kelola keuangan</li>
                        </ol>
                      </section>

                      <section>
                        <h4 className="text-gray-800 mb-3">💡 Fitur Utama</h4>
                        <div className="space-y-3">
                          <div className="bg-blue-50/50 rounded-xl p-3">
                            <p className="text-sm text-gray-800 mb-1">📊 Dashboard Keuangan</p>
                            <p className="text-xs text-gray-600">Pantau saldo, pemasukan, pengeluaran secara real-time dengan visualisasi yang mudah dipahami</p>
                          </div>
                          <div className="bg-purple-50/50 rounded-xl p-3">
                            <p className="text-sm text-gray-800 mb-1">💸 Pencatatan Transaksi</p>
                            <p className="text-xs text-gray-600">Catat pemasukan dan pengeluaran otomatis atau manual dengan kategorisasi lengkap</p>
                          </div>
                          <div className="bg-green-50/50 rounded-xl p-3">
                            <p className="text-sm text-gray-800 mb-1">📈 Financial Insight</p>
                            <p className="text-xs text-gray-600">Analisis pola pengeluaran dengan grafik interaktif dan rekomendasi hemat</p>
                          </div>
                          <div className="bg-orange-50/50 rounded-xl p-3">
                            <p className="text-sm text-gray-800 mb-1">🤖 AI Financial Coach</p>
                            <p className="text-xs text-gray-600">Dapatkan saran keuangan personal dari AI yang ramah dan tidak menghakimi</p>
                          </div>
                          <div className="bg-pink-50/50 rounded-xl p-3">
                            <p className="text-sm text-gray-800 mb-1">🎯 Financial Goals</p>
                            <p className="text-xs text-gray-600">Atur target tabungan dan pantau progress dengan health score</p>
                          </div>
                        </div>
                      </section>

                      <section>
                        <h4 className="text-gray-800 mb-3">🔒 Keamanan</h4>
                        <ul className="text-sm text-gray-600 space-y-2 ml-4 list-disc">
                          <li>Verifikasi 2 langkah dengan PIN 6 digit</li>
                          <li>Enkripsi end-to-end untuk semua data</li>
                          <li>Biometric & fingerprint authentication</li>
                          <li>Session timeout otomatis</li>
                        </ul>
                      </section>

                      <section>
                        <h4 className="text-gray-800 mb-3">🏦 Kolaborasi Banking</h4>
                        <p className="text-sm text-gray-600 mb-2">SMARTA dapat terhubung dengan:</p>
                        <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                          <li>Bank digital (BCA, Mandiri, BNI, BRI, dll)</li>
                          <li>E-wallet (GoPay, OVO, DANA, ShopeePay, dll)</li>
                          <li>Rekening giro dan tabungan</li>
                        </ul>
                      </section>

                      <section>
                        <h4 className="text-gray-800 mb-3">📱 Tips Penggunaan</h4>
                        <ul className="text-sm text-gray-600 space-y-2 ml-4 list-disc">
                          <li>Rutin catat transaksi untuk insight yang akurat</li>
                          <li>Set financial goals yang realistis</li>
                          <li>Konsultasi dengan AI Coach untuk saran personal</li>
                          <li>Review financial health score setiap minggu</li>
                          <li>Aktifkan notifikasi untuk reminder penting</li>
                        </ul>
                      </section>

                      <section className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-4 border border-blue-200/50">
                        <div className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-blue-800 mb-1 text-sm">Catatan Penting</h4>
                            <p className="text-xs text-blue-700">
                              SMARTA adalah aplikasi prototype untuk tujuan akademik. Tidak dimaksudkan untuk mengumpulkan PII atau data sensitif. Gunakan dengan bijak dan jangan masukkan informasi keuangan yang sebenarnya.
                            </p>
                          </div>
                        </div>
                      </section>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <button
                        onClick={() => setShowGuide(false)}
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all"
                      >
                        Mengerti, Tutup Panduan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}