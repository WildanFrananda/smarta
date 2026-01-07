"use client";

import React from 'react';
import { QrCode, CheckCircle, Smartphone } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface QRISModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function QRISModal({ open, onOpenChange }: QRISModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-sm sm:max-w-md mx-auto bg-white/95 backdrop-blur-xl border-white/50">
        <DialogHeader>
          <DialogTitle className="text-center text-gray-800 flex items-center justify-center gap-2">
            <QrCode className="w-5 h-5 text-purple-600" />
            Bayar dengan QRIS
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center pt-4">
          {/* QRIS Logo Badge */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 flex items-center gap-2">
            <QrCode className="w-4 h-4" />
            QRIS
          </div>

          {/* QR Code Container */}
          <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-lg border-2 border-gray-100 mb-4">
            {/* Dummy QR Code using SVG pattern */}
            <svg
              viewBox="0 0 200 200"
              className="rounded-lg w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52"
            >
              {/* Background */}
              <rect width="200" height="200" fill="white" />

              {/* QR Code Pattern - simplified dummy pattern */}
              {/* Corner squares */}
              <rect x="10" y="10" width="50" height="50" fill="#1a1a1a" />
              <rect x="17" y="17" width="36" height="36" fill="white" />
              <rect x="24" y="24" width="22" height="22" fill="#1a1a1a" />

              <rect x="140" y="10" width="50" height="50" fill="#1a1a1a" />
              <rect x="147" y="17" width="36" height="36" fill="white" />
              <rect x="154" y="24" width="22" height="22" fill="#1a1a1a" />

              <rect x="10" y="140" width="50" height="50" fill="#1a1a1a" />
              <rect x="17" y="147" width="36" height="36" fill="white" />
              <rect x="24" y="154" width="22" height="22" fill="#1a1a1a" />

              {/* Random pattern in the middle */}
              <rect x="70" y="10" width="7" height="7" fill="#1a1a1a" />
              <rect x="84" y="10" width="7" height="7" fill="#1a1a1a" />
              <rect x="98" y="10" width="7" height="7" fill="#1a1a1a" />
              <rect x="112" y="10" width="7" height="7" fill="#1a1a1a" />
              <rect x="126" y="10" width="7" height="7" fill="#1a1a1a" />

              <rect x="70" y="24" width="7" height="7" fill="#1a1a1a" />
              <rect x="98" y="24" width="7" height="7" fill="#1a1a1a" />
              <rect x="126" y="24" width="7" height="7" fill="#1a1a1a" />

              <rect x="77" y="38" width="7" height="7" fill="#1a1a1a" />
              <rect x="91" y="38" width="7" height="7" fill="#1a1a1a" />
              <rect x="105" y="38" width="7" height="7" fill="#1a1a1a" />
              <rect x="119" y="38" width="7" height="7" fill="#1a1a1a" />

              <rect x="70" y="52" width="7" height="7" fill="#1a1a1a" />
              <rect x="84" y="52" width="7" height="7" fill="#1a1a1a" />
              <rect x="112" y="52" width="7" height="7" fill="#1a1a1a" />

              {/* Middle section */}
              <rect x="10" y="70" width="7" height="7" fill="#1a1a1a" />
              <rect x="24" y="70" width="7" height="7" fill="#1a1a1a" />
              <rect x="52" y="70" width="7" height="7" fill="#1a1a1a" />
              <rect x="70" y="70" width="7" height="7" fill="#1a1a1a" />
              <rect x="98" y="70" width="7" height="7" fill="#1a1a1a" />
              <rect x="112" y="70" width="7" height="7" fill="#1a1a1a" />
              <rect x="140" y="70" width="7" height="7" fill="#1a1a1a" />
              <rect x="168" y="70" width="7" height="7" fill="#1a1a1a" />
              <rect x="182" y="70" width="7" height="7" fill="#1a1a1a" />

              <rect x="10" y="84" width="7" height="7" fill="#1a1a1a" />
              <rect x="38" y="84" width="7" height="7" fill="#1a1a1a" />
              <rect x="52" y="84" width="7" height="7" fill="#1a1a1a" />
              <rect x="84" y="84" width="7" height="7" fill="#1a1a1a" />
              <rect x="112" y="84" width="7" height="7" fill="#1a1a1a" />
              <rect x="126" y="84" width="7" height="7" fill="#1a1a1a" />
              <rect x="154" y="84" width="7" height="7" fill="#1a1a1a" />
              <rect x="182" y="84" width="7" height="7" fill="#1a1a1a" />

              <rect x="10" y="98" width="180" height="7" fill="#1a1a1a" />

              <rect x="10" y="112" width="7" height="7" fill="#1a1a1a" />
              <rect x="38" y="112" width="7" height="7" fill="#1a1a1a" />
              <rect x="52" y="112" width="7" height="7" fill="#1a1a1a" />
              <rect x="70" y="112" width="7" height="7" fill="#1a1a1a" />
              <rect x="98" y="112" width="7" height="7" fill="#1a1a1a" />
              <rect x="126" y="112" width="7" height="7" fill="#1a1a1a" />
              <rect x="140" y="112" width="7" height="7" fill="#1a1a1a" />
              <rect x="168" y="112" width="7" height="7" fill="#1a1a1a" />

              <rect x="10" y="126" width="7" height="7" fill="#1a1a1a" />
              <rect x="24" y="126" width="7" height="7" fill="#1a1a1a" />
              <rect x="52" y="126" width="7" height="7" fill="#1a1a1a" />
              <rect x="84" y="126" width="7" height="7" fill="#1a1a1a" />
              <rect x="112" y="126" width="7" height="7" fill="#1a1a1a" />
              <rect x="140" y="126" width="7" height="7" fill="#1a1a1a" />
              <rect x="154" y="126" width="7" height="7" fill="#1a1a1a" />
              <rect x="182" y="126" width="7" height="7" fill="#1a1a1a" />

              {/* Bottom right pattern */}
              <rect x="70" y="140" width="7" height="7" fill="#1a1a1a" />
              <rect x="84" y="140" width="7" height="7" fill="#1a1a1a" />
              <rect x="112" y="140" width="7" height="7" fill="#1a1a1a" />
              <rect x="140" y="140" width="7" height="7" fill="#1a1a1a" />
              <rect x="168" y="140" width="7" height="7" fill="#1a1a1a" />

              <rect x="70" y="154" width="7" height="7" fill="#1a1a1a" />
              <rect x="98" y="154" width="7" height="7" fill="#1a1a1a" />
              <rect x="126" y="154" width="7" height="7" fill="#1a1a1a" />
              <rect x="154" y="154" width="7" height="7" fill="#1a1a1a" />
              <rect x="182" y="154" width="7" height="7" fill="#1a1a1a" />

              <rect x="70" y="168" width="7" height="7" fill="#1a1a1a" />
              <rect x="84" y="168" width="7" height="7" fill="#1a1a1a" />
              <rect x="98" y="168" width="7" height="7" fill="#1a1a1a" />
              <rect x="112" y="168" width="14" height="7" fill="#1a1a1a" />
              <rect x="140" y="168" width="7" height="7" fill="#1a1a1a" />
              <rect x="168" y="168" width="7" height="7" fill="#1a1a1a" />

              <rect x="70" y="182" width="7" height="7" fill="#1a1a1a" />
              <rect x="98" y="182" width="7" height="7" fill="#1a1a1a" />
              <rect x="126" y="182" width="7" height="7" fill="#1a1a1a" />
              <rect x="154" y="182" width="7" height="7" fill="#1a1a1a" />
              <rect x="182" y="182" width="7" height="7" fill="#1a1a1a" />
            </svg>
          </div>

          {/* Merchant Info */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-3 sm:p-4 w-full border border-purple-100 mb-4">
            <div className="text-center mb-3">
              <p className="text-gray-500 text-xs">Nama Merchant</p>
              <p className="font-semibold text-gray-800">SMARTA DIGITAL</p>
            </div>
            <div className="border-t border-purple-200 pt-3 flex justify-between items-center">
              <span className="text-gray-500 text-sm">NMID</span>
              <span className="font-mono text-sm text-gray-700">ID1020031234567</span>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-2 w-full mb-4">
            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-3.5 h-3.5 text-purple-600" />
              </div>
              <span>Buka aplikasi e-wallet atau mobile banking</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <QrCode className="w-3.5 h-3.5 text-purple-600" />
              </div>
              <span>Pilih menu scan QRIS</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-3.5 h-3.5 text-purple-600" />
              </div>
              <span>Scan QR code dan konfirmasi pembayaran</span>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => onOpenChange(false)}
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            Tutup
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
