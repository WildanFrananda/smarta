import React from 'react';
import { ArrowLeft, User, Mail, Phone, Shield, Bell, HelpCircle, LogOut, ChevronRight, Sparkles } from 'lucide-react';
import { Screen } from '@/app/page';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProfileProps {
  onNavigate: (screen: Screen) => void;
  onLogout: () => void;
}

export default function Profile({ onNavigate, onLogout }: ProfileProps) {
  return (
    <div className="min-h-screen pb-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-b-[2rem] px-6 pt-12 pb-8 shadow-xl">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => onNavigate('dashboard')}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white">Profil Saya</h2>
        </div>

        {/* Profile Card */}
        <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-white/50 shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1699795572415-23e125a7ede4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHVzZXIlMjBwcm9maWxlfGVufDF8fHx8MTc2NzQyMzM1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="User Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-white mb-1">Sabrina Nur Amelia</h2>
              <p className="text-blue-100 text-sm mb-2">sabrina.nur.amelia@email.com</p>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <span className="text-xs text-white">Premium Member</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* SMARTA Logo Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-white/50 text-center">
          <div className="w-16 h-16 bg-transparent rounded-2xl flex items-center justify-center mx-auto mb-3 overflow-hidden">
            <ImageWithFallback
              src="smarta.png"
              alt="SMARTA Logo"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h3 className="text-blue-600 mb-1">SMARTA</h3>
          <p className="text-xs text-gray-500">Smart Transaction Assistant</p>
          <p className="text-xs text-gray-400 mt-2">Version 1.0.0</p>
        </div>

        {/* Account Settings */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-white/50 overflow-hidden">
          <h3 className="text-gray-800 px-5 pt-5 pb-3">Akun & Informasi</h3>

          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50/50 transition-all border-t border-gray-100">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="text-gray-800">Informasi Pribadi</h4>
              <p className="text-xs text-gray-500">Edit nama, email, nomor HP</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50/50 transition-all border-t border-gray-100">
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
              <Mail className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="text-gray-800">Email & Verifikasi</h4>
              <p className="text-xs text-gray-500">Kelola email dan verifikasi akun</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50/50 transition-all border-t border-gray-100">
            <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
              <Phone className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="text-gray-800">Nomor Telepon</h4>
              <p className="text-xs text-gray-500">+62 812-3456-7890</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Security & Settings */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-white/50 overflow-hidden">
          <h3 className="text-gray-800 px-5 pt-5 pb-3">Keamanan & Pengaturan</h3>

          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50/50 transition-all border-t border-gray-100">
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-red-600" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="text-gray-800">Keamanan Akun</h4>
              <p className="text-xs text-gray-500">Password, PIN, biometrik</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={() => onNavigate('notifications')}
            className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50/50 transition-all border-t border-gray-100"
          >
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
              <Bell className="w-5 h-5 text-orange-600" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="text-gray-800">Notifikasi</h4>
              <p className="text-xs text-gray-500">Kelola preferensi notifikasi</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Help & Support */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-white/50 overflow-hidden">
          <h3 className="text-gray-800 px-5 pt-5 pb-3">Bantuan & Dukungan</h3>

          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50/50 transition-all border-t border-gray-100">
            <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-teal-600" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="text-gray-800">Pusat Bantuan</h4>
              <p className="text-xs text-gray-500">FAQ dan panduan penggunaan</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50/50 transition-all border-t border-gray-100">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="text-gray-800">Hubungi Kami</h4>
              <p className="text-xs text-gray-500">support@smarta.app</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="w-full bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-md border border-red-200 hover:bg-red-50 transition-all flex items-center justify-center gap-3 group"
        >
          <LogOut className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />
          <span className="text-red-600">Keluar dari Akun</span>
        </button>

        {/* Footer */}
        <div className="text-center py-4">
          <p className="text-xs text-gray-400">
            © 2026 SMARTA. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Made with ❤️ for better financial future
          </p>
        </div>
      </div>
    </div>
  );
}