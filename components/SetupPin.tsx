import React, { useState, useRef, useEffect } from 'react';
import { Lock, Shield, Check, ArrowRight } from 'lucide-react';

interface SetupPinProps {
  onComplete: () => void;
  onSkip: () => void;
}

export default function SetupPin({ onComplete, onSkip }: SetupPinProps) {
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const [confirmPin, setConfirmPin] = useState(['', '', '', '', '', '']);
  const [step, setStep] = useState<'create' | 'confirm'>('create');
  const [error, setError] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
  }, [step]);

  const handlePinChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers

    const currentPin = step === 'create' ? pin : confirmPin;
    const setCurrentPin = step === 'create' ? setPin : setConfirmPin;

    const newPin = [...currentPin];
    newPin[index] = value.slice(-1); // Only take last digit
    setCurrentPin(newPin);
    setError('');

    // Auto focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if PIN is complete
    if (index === 5 && value) {
      if (step === 'create') {
        setTimeout(() => {
          setStep('confirm');
          setConfirmPin(['', '', '', '', '', '']);
        }, 300);
      } else {
        // Verify PINs match
        const pinString = pin.join('');
        const confirmPinString = newPin.join('');
        if (pinString === confirmPinString) {
          setTimeout(() => {
            onComplete();
          }, 500);
        } else {
          setError('PIN tidak cocok. Silakan coba lagi.');
          setTimeout(() => {
            setConfirmPin(['', '', '', '', '', '']);
            inputRefs.current[0]?.focus();
          }, 1000);
        }
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      const currentPin = step === 'create' ? pin : confirmPin;
      const setCurrentPin = step === 'create' ? setPin : setConfirmPin;

      if (!currentPin[index] && index > 0) {
        // Move to previous input if current is empty
        inputRefs.current[index - 1]?.focus();
      } else {
        // Clear current input
        const newPin = [...currentPin];
        newPin[index] = '';
        setCurrentPin(newPin);
      }
    }
  };

  const currentPin = step === 'create' ? pin : confirmPin;
  const isComplete = currentPin.every(digit => digit !== '');

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 w-full max-w-md">
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
                  {step === 'create' ? 'Buat PIN Keamanan' : 'Konfirmasi PIN Anda'}
                </h2>
                <p className="text-gray-500 text-sm">
                  {step === 'create'
                    ? 'Buat PIN 6 digit untuk keamanan akun Anda'
                    : 'Masukkan kembali PIN yang sama'}
                </p>
              </div>

              {/* PIN Input */}
              <div className="flex justify-center gap-3 mb-6">
                {currentPin.map((digit, index) => (
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
                <div className="mb-6 text-center">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className={`w-8 h-1 rounded-full transition-all ${step === 'create' || step === 'confirm' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                  <div className={`w-8 h-1 rounded-full transition-all ${step === 'confirm' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                </div>
                <p className="text-xs text-center text-gray-500">
                  Langkah {step === 'create' ? '1' : '2'} dari 2
                </p>
              </div>

              {/* Security Info */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-4 mb-6 border border-blue-200/50">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-blue-800 mb-1 text-sm">Tips Keamanan</h4>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• Gunakan PIN yang mudah diingat namun sulit ditebak</li>
                      <li>• Jangan gunakan tanggal lahir atau urutan angka</li>
                      <li>• PIN akan digunakan untuk verifikasi transaksi</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Skip Button */}
              <button
                onClick={onSkip}
                className="w-full py-3 rounded-2xl bg-gray-50 border border-gray-200 text-gray-600 hover:bg-gray-100 transition-all text-sm"
              >
                Lewati untuk sekarang
              </button>

              {/* Security Badge */}
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
                <Shield className="w-4 h-4" />
                <span>Verifikasi 2 Langkah Aktif</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}