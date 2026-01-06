import React from 'react';
import { LogOut, AlertCircle, Shield, Sparkles } from 'lucide-react';

interface LogoutConfirmationProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export default function LogoutConfirmation({ onConfirm, onCancel }: LogoutConfirmationProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Futuristic Background - Same as Login */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Main Card */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-3xl opacity-20 blur-xl"></div>

          {/* Glass Card */}
          <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            {/* Top Accent - Warning Color */}
            <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500"></div>

            <div className="p-8 md:p-10">
              {/* Logo Section */}
              <div className="flex flex-col items-center mb-8">
                <div className="relative mb-6">
                  {/* Icon Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-orange-600 rounded-2xl blur-xl opacity-50"></div>

                  {/* Icon */}
                  <div className="relative w-20 h-20 bg-gradient-to-br from-red-400 via-red-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-500/50">
                    <LogOut className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* SMARTA Logo */}
                <div className="mb-4">
                  <img
                    src="smarta.png"
                    alt="SMARTA Logo"
                    className="w-auto h-12 object-contain"
                  />
                </div>
              </div>

              {/* Confirmation Text */}
              <div className="text-center mb-8">
                <h2 className="text-gray-800 mb-3">
                  Keluar dari Akun?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Anda akan keluar dari akun SMARTA. Data Anda akan tetap aman dan tersimpan.
                </p>
              </div>

              {/* Warning Info */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-4 mb-8 border border-orange-200/50">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-orange-800 mb-1 text-sm">Informasi</h4>
                    <p className="text-xs text-orange-700 leading-relaxed">
                      Anda perlu login kembali untuk mengakses dashboard dan fitur-fitur SMARTA.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={onConfirm}
                  className="group relative w-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>

                  <div className="relative w-full bg-gradient-to-r from-red-500 via-red-600 to-orange-600 text-white py-4 rounded-2xl shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.02] active:scale-[0.98]">
                    <LogOut className="w-5 h-5" />
                    <span>Ya, Keluar dari Akun</span>
                  </div>
                </button>

                <button
                  onClick={onCancel}
                  className="w-full py-4 rounded-2xl bg-gray-50/50 border-2 border-gray-200/50 text-gray-700 hover:border-gray-300 hover:bg-white transition-all"
                >
                  Batal
                </button>
              </div>

              {/* Security Badge */}
              <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-500">
                <Shield className="w-4 h-4" />
                <span>Sesi Anda akan berakhir dengan aman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}