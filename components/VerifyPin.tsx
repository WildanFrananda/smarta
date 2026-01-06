import React, { useState, useRef, useEffect } from 'react';
import { Lock, Shield, AlertCircle, ArrowLeft } from 'lucide-react';

interface VerifyPinProps {
  onSuccess: () => void;
  onBack: () => void;
}

export default function VerifyPin({ onSuccess, onBack }: VerifyPinProps) {
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const maxAttempts = 3;

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handlePinChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newPin = [...pin];
    newPin[index] = value.slice(-1);
    setPin(newPin);
    setError('');

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Verify PIN when complete
    if (index === 5 && value) {
      const enteredPin = newPin.join('');
      // In real app, verify against stored PIN
      // For demo, accept any 6-digit PIN
      setTimeout(() => {
        if (enteredPin.length === 6) {
          onSuccess();
        } else {
          const newAttempts = attempts + 1;
          setAttempts(newAttempts);
          if (newAttempts >= maxAttempts) {
            setError('Terlalu banyak percobaan. Silakan login kembali.');
            setTimeout(() => onBack(), 2000);
          } else {
            setError(`PIN salah. Sisa percobaan: ${maxAttempts - newAttempts}`);
            setPin(['', '', '', '', '', '']);
            inputRefs.current[0]?.focus();
          }
        }
      }, 300);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (!pin[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else {
        const newPin = [...pin];
        newPin[index] = '';
        setPin(newPin);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

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
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-3xl opacity-20 blur-xl"></div>

          <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>

            <div className="p-8 md:p-10">
              {/* Icon */}
              <div className="flex flex-col items-center mb-8">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl blur-xl opacity-50"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50">
                    <Lock className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Logo */}
                <div className="mb-4">
                  <img
                    src="smarta.png"
                    alt="SMARTA Logo"
                    className="w-auto h-10 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="text-center mb-8">
                <h2 className="text-gray-800 mb-2">
                  Verifikasi PIN
                </h2>
                <p className="text-gray-500 text-sm">
                  Masukkan PIN 6 digit Anda untuk melanjutkan
                </p>
              </div>

              {/* PIN Input */}
              <div className="flex justify-center gap-3 mb-6">
                {pin.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => { inputRefs.current[index] = el }}
                    type="password"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handlePinChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className={`w-12 h-14 text-center text-2xl rounded-xl border-2 ${error
                      ? 'border-red-400 bg-red-50'
                      : digit
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 bg-gray-50'
                      } focus:border-blue-500 focus:ring-4 focus:ring-blue-400/10 outline-none transition-all`}
                  />
                ))}
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6">
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Attempts Indicator */}
              <div className="mb-8">
                <div className="flex justify-center gap-2">
                  {[...Array(maxAttempts)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all ${i < attempts ? 'bg-red-500' : 'bg-gray-300'
                        }`}
                    ></div>
                  ))}
                </div>
                <p className="text-xs text-center text-gray-500 mt-2">
                  Percobaan: {attempts}/{maxAttempts}
                </p>
              </div>

              {/* Security Info */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-4 mb-6 border border-blue-200/50">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-blue-800 mb-1 text-sm">Verifikasi 2 Langkah</h4>
                    <p className="text-xs text-blue-700">
                      PIN Anda melindungi akses ke akun dan transaksi keuangan. Jangan bagikan PIN kepada siapapun.
                    </p>
                  </div>
                </div>
              </div>

              {/* Forgot PIN */}
              <div className="text-center">
                <button
                  onClick={onBack}
                  className="text-sm text-blue-500 hover:text-blue-600 transition-colors"
                >
                  Lupa PIN? Login ulang
                </button>
              </div>

              {/* Security Badge */}
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
                <Shield className="w-4 h-4" />
                <span>Koneksi aman dengan enkripsi end-to-end</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}