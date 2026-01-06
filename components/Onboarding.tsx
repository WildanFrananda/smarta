import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, TrendingUp, Shield } from 'lucide-react';

interface OnboardingProps {
  onStart: () => void;
}

export default function Onboarding({ onStart }: OnboardingProps) {
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    // Simulate logo loading animation
    setTimeout(() => setLogoLoaded(true), 100);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-md w-full text-center">
        {/* Animated Logo Container */}
        <div className="mb-12">
          <div className={`relative transition-all duration-1000 ${logoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            {/* Logo Glow Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-3xl opacity-30 transition-all duration-1000 ${logoLoaded ? 'scale-100' : 'scale-0'}`}></div>
            </div>

            {/* Main Logo with Animation */}
            <div className={`relative flex items-center justify-center mb-6 transition-all duration-1000 delay-300 ${logoLoaded ? 'scale-100 rotate-0' : 'scale-50 rotate-12'}`}>
              <img
                src="smarta.png"
                alt="SMARTA Logo"
                className="w-auto h-32 md:h-40 object-contain drop-shadow-2xl animate-float"
                onLoad={() => setLogoLoaded(true)}
              />
            </div>

            {/* Sparkle Effects */}
            <div className="absolute top-0 left-1/4 animate-pulse">
              <Sparkles className="w-6 h-6 text-yellow-400" style={{ animationDelay: '0.5s' }} />
            </div>
            <div className="absolute top-8 right-1/4 animate-pulse">
              <Sparkles className="w-4 h-4 text-blue-400" style={{ animationDelay: '1s' }} />
            </div>
            <div className="absolute bottom-4 left-1/3 animate-pulse">
              <Sparkles className="w-5 h-5 text-purple-400" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className={`mb-8 transition-all duration-1000 delay-500 ${logoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 mb-4">
            Smart Transaction Assistant
          </h1>
          <p className="text-gray-600 leading-relaxed px-4">
            Kelola keuangan dengan cerdas, capai tujuan finansial lebih mudah
          </p>
        </div>

        {/* Features */}
        <div className={`space-y-4 mb-12 transition-all duration-1000 delay-700 ${logoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/50 flex items-start gap-4 hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-gray-800 mb-1">Financial Insight</h3>
              <p className="text-sm text-gray-600">Analisis keuangan personal real-time</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/50 flex items-start gap-4 hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-gray-800 mb-1">AI Financial Coach</h3>
              <p className="text-sm text-gray-600">Pendampingan keuangan dengan AI</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/50 flex items-start gap-4 hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-gray-800 mb-1">Keamanan Terjamin</h3>
              <p className="text-sm text-gray-600">Enkripsi end-to-end & 2FA</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`transition-all duration-1000 delay-1000 ${logoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={onStart}
            className="group relative w-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>

            <div className="relative w-full bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white py-4 px-8 rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.02] active:scale-[0.98]">
              <span>Mulai Sekarang</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Version */}
        <p className={`mt-8 text-xs text-gray-500 transition-all duration-1000 delay-1200 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}>
          Version 1.0.0 • © 2026 SMARTA
        </p>
      </div>
    </div>
  );
}