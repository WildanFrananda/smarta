import React, { useState } from 'react';
import { Shield, CheckCircle, ScrollText, ArrowLeft } from 'lucide-react';

interface TermsConditionsProps {
  onAccept: () => void;
  onDecline: () => void;
}

export default function TermsConditions({ onAccept, onDecline }: TermsConditionsProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const isBottom = Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 10;
    if (isBottom) {
      setHasScrolled(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-2xl w-full">
        {/* Back Button */}
        <button
          onClick={onDecline}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm">Kembali</span>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/30">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-blue-700 mb-2">Perjanjian Pengguna</h1>
          <p className="text-gray-600">Syarat & Ketentuan Penggunaan SMARTA</p>
        </div>

        {/* Terms Content */}
        <div
          onScroll={handleScroll}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 mb-6 max-h-[400px] overflow-y-auto scrollbar-custom"
        >
          <div className="space-y-6 text-gray-700">
            <section>
              <h3 className="text-gray-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                1. Penerimaan Syarat
              </h3>
              <p className="text-sm leading-relaxed">
                Dengan mengakses dan menggunakan aplikasi SMARTA (Smart Transaction Assistant), Anda setuju untuk terikat dengan syarat dan ketentuan yang tercantum dalam perjanjian ini. Jika Anda tidak setuju dengan syarat-syarat ini, harap tidak melanjutkan penggunaan aplikasi.
              </p>
            </section>

            <section>
              <h3 className="text-gray-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                2. Penggunaan Layanan
              </h3>
              <p className="text-sm leading-relaxed mb-2">
                SMARTA menyediakan layanan manajemen keuangan personal yang mencakup:
              </p>
              <ul className="text-sm space-y-1 ml-6 list-disc">
                <li>Pencatatan transaksi digital</li>
                <li>Analisis keuangan personal</li>
                <li>Konsultasi AI Financial Coach</li>
                <li>Pengaturan target keuangan</li>
                <li>Notifikasi pintar keuangan</li>
              </ul>
            </section>

            <section>
              <h3 className="text-gray-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                3. Privasi & Keamanan Data
              </h3>
              <p className="text-sm leading-relaxed">
                Kami berkomitmen untuk melindungi privasi Anda. Data keuangan personal Anda disimpan dengan enkripsi tingkat tinggi. Kami tidak akan membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan eksplisit dari Anda, kecuali diwajibkan oleh hukum.
              </p>
            </section>

            <section>
              <h3 className="text-gray-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                4. Tanggung Jawab Pengguna
              </h3>
              <p className="text-sm leading-relaxed mb-2">
                Sebagai pengguna, Anda bertanggung jawab untuk:
              </p>
              <ul className="text-sm space-y-1 ml-6 list-disc">
                <li>Menjaga kerahasiaan akun dan password Anda</li>
                <li>Memberikan informasi yang akurat dan terkini</li>
                <li>Menggunakan layanan sesuai dengan hukum yang berlaku</li>
                <li>Tidak menyalahgunakan atau memanipulasi sistem</li>
              </ul>
            </section>

            <section>
              <h3 className="text-gray-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                5. Batasan Layanan
              </h3>
              <p className="text-sm leading-relaxed">
                SMARTA adalah aplikasi prototype untuk tujuan akademik dan demonstrasi. Saran dan rekomendasi yang diberikan oleh AI Coach bersifat informatif dan tidak menggantikan konsultasi profesional dari ahli keuangan bersertifikat. Keputusan keuangan Anda sepenuhnya adalah tanggung jawab pribadi.
              </p>
            </section>

            <section>
              <h3 className="text-gray-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                6. Disclaimer
              </h3>
              <p className="text-sm leading-relaxed">
                Aplikasi ini tidak dimaksudkan untuk mengumpulkan data Personally Identifiable Information (PII) atau informasi sensitif lainnya. SMARTA tidak bertanggung jawab atas kerugian finansial yang mungkin timbul dari penggunaan aplikasi ini.
              </p>
            </section>

            <section>
              <h3 className="text-gray-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                7. Perubahan Syarat & Ketentuan
              </h3>
              <p className="text-sm leading-relaxed">
                Kami berhak untuk mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan diberitahukan melalui aplikasi, dan penggunaan berkelanjutan setelah perubahan dianggap sebagai penerimaan terhadap syarat yang diperbarui.
              </p>
            </section>

            <section>
              <h3 className="text-gray-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                8. Kontak
              </h3>
              <p className="text-sm leading-relaxed">
                Jika Anda memiliki pertanyaan mengenai perjanjian ini, silakan hubungi kami di support@smarta.app
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-xs text-gray-500">
                Terakhir diperbarui: 5 Januari 2026
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {!hasScrolled && (
          <div className="text-center mb-4">
            <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
              <ScrollText className="w-4 h-4" />
              Gulir ke bawah untuk membaca seluruh perjanjian
            </p>
          </div>
        )}

        {/* Agreement Checkbox */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6 mb-6">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-1">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="w-5 h-5 rounded-lg border-2 border-gray-300 checked:bg-blue-500 checked:border-blue-500 cursor-pointer transition-all"
              />
              {isChecked && (
                <CheckCircle className="w-5 h-5 text-blue-500 absolute top-0 left-0 pointer-events-none" />
              )}
            </div>
            <span className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
              Saya telah membaca dan menyetujui syarat & ketentuan penggunaan aplikasi SMARTA. Saya memahami bahwa ini adalah aplikasi prototype dan bertanggung jawab penuh atas keputusan keuangan saya.
            </span>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={onDecline}
            className="py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all"
          >
            Tolak
          </button>
          <button
            onClick={onAccept}
            disabled={!isChecked || !hasScrolled}
            className="py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            Setuju & Lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
}