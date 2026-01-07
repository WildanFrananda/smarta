"use client";

import React, { useState } from 'react';
import { Building2, Wallet, ArrowLeft, CheckCircle2, X, ChevronRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

// Indonesian Banks
const banks = [
  { id: 'bca', name: 'BCA', fullName: 'Bank Central Asia', color: 'from-blue-600 to-blue-700' },
  { id: 'bni', name: 'BNI', fullName: 'Bank Negara Indonesia', color: 'from-orange-500 to-orange-600' },
  { id: 'bri', name: 'BRI', fullName: 'Bank Rakyat Indonesia', color: 'from-blue-700 to-blue-800' },
  { id: 'mandiri', name: 'Mandiri', fullName: 'Bank Mandiri', color: 'from-blue-500 to-yellow-500' },
  { id: 'cimb', name: 'CIMB Niaga', fullName: 'CIMB Niaga', color: 'from-red-600 to-red-700' },
  { id: 'permata', name: 'Permata', fullName: 'Permata Bank', color: 'from-green-600 to-green-700' },
];

// Indonesian E-Wallets
const ewallets = [
  { id: 'gopay', name: 'GoPay', color: 'from-green-500 to-green-600' },
  { id: 'ovo', name: 'OVO', color: 'from-purple-500 to-purple-600' },
  { id: 'dana', name: 'DANA', color: 'from-blue-500 to-blue-600' },
  { id: 'shopeepay', name: 'ShopeePay', color: 'from-orange-500 to-red-500' },
  { id: 'linkaja', name: 'LinkAja', color: 'from-red-500 to-red-600' },
];

type TransferType = 'bank' | 'ewallet' | null;
type Step = 'select-type' | 'select-provider' | 'input-details' | 'success';

interface TransferModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TransferModal({ open, onOpenChange }: TransferModalProps) {
  const [step, setStep] = useState<Step>('select-type');
  const [transferType, setTransferType] = useState<TransferType>(null);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [amount, setAmount] = useState('');
  const [destination, setDestination] = useState('');

  const resetState = () => {
    setStep('select-type');
    setTransferType(null);
    setSelectedProvider(null);
    setAmount('');
    setDestination('');
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(resetState, 300);
  };

  const handleTypeSelect = (type: TransferType) => {
    setTransferType(type);
    setStep('select-provider');
  };

  const handleProviderSelect = (providerId: string) => {
    setSelectedProvider(providerId);
    setStep('input-details');
  };

  const handleTransfer = () => {
    // Simulate transfer (frontend only)
    setStep('success');
  };

  const getProviderName = () => {
    if (transferType === 'bank') {
      return banks.find(b => b.id === selectedProvider)?.name || '';
    }
    return ewallets.find(e => e.id === selectedProvider)?.name || '';
  };

  const formatCurrency = (value: string) => {
    const numValue = value.replace(/\D/g, '');
    return numValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setAmount(value);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur-xl border-white/50">
        {/* Step 1: Select Transfer Type */}
        {step === 'select-type' && (
          <>
            <DialogHeader>
              <DialogTitle className="text-center text-gray-800">
                Pilih Metode Transfer
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <button
                onClick={() => handleTypeSelect('bank')}
                className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <span className="text-gray-800 font-semibold">Bank Transfer</span>
                <span className="text-xs text-gray-500 mt-1">Transfer antar bank</span>
              </button>
              <button
                onClick={() => handleTypeSelect('ewallet')}
                className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/30">
                  <Wallet className="w-8 h-8 text-white" />
                </div>
                <span className="text-gray-800 font-semibold">E-Wallet</span>
                <span className="text-xs text-gray-500 mt-1">Transfer ke dompet digital</span>
              </button>
            </div>
          </>
        )}

        {/* Step 2: Select Provider */}
        {step === 'select-provider' && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setStep('select-type')}
                  className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 text-gray-600" />
                </button>
                <DialogTitle className="text-gray-800">
                  {transferType === 'bank' ? 'Pilih Bank Tujuan' : 'Pilih E-Wallet Tujuan'}
                </DialogTitle>
              </div>
            </DialogHeader>
            <div className="space-y-2 mt-4 max-h-80 overflow-y-auto pr-2">
              {(transferType === 'bank' ? banks : ewallets).map((provider) => (
                <button
                  key={provider.id}
                  onClick={() => handleProviderSelect(provider.id)}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 transition-all group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${provider.color} rounded-xl flex items-center justify-center shadow-md`}>
                    <span className="text-white text-sm font-bold">
                      {provider.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-gray-800">{provider.name}</p>
                    {'fullName' in provider && (
                      <p className="text-xs text-gray-500">{provider.fullName as string}</p>
                    )}
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </>
        )}

        {/* Step 3: Input Transfer Details */}
        {step === 'input-details' && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setStep('select-provider')}
                  className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 text-gray-600" />
                </button>
                <DialogTitle className="text-gray-800">
                  Transfer ke {getProviderName()}
                </DialogTitle>
              </div>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {transferType === 'bank' ? 'Nomor Rekening Tujuan' : 'Nomor HP / ID Akun'}
                </label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder={transferType === 'bank' ? 'Contoh: 1234567890' : 'Contoh: 081234567890'}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nominal Transfer
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">Rp</span>
                  <input
                    type="text"
                    value={formatCurrency(amount)}
                    onChange={handleAmountChange}
                    placeholder="0"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-lg font-semibold"
                  />
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Biaya Admin</span>
                  <span className="text-gray-800">Gratis</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Transfer</span>
                  <span className="font-bold text-gray-800">
                    Rp {amount ? formatCurrency(amount) : '0'}
                  </span>
                </div>
              </div>
              <button
                onClick={handleTransfer}
                disabled={!amount || !destination}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                Transfer Sekarang
              </button>
            </div>
          </>
        )}

        {/* Step 4: Success */}
        {step === 'success' && (
          <div className="text-center py-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30 animate-pulse">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Transfer Berhasil!</h3>
            <p className="text-gray-600 mb-6">
              Transfer kamu telah berhasil diproses
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Metode</span>
                <span className="font-medium text-gray-800">
                  {transferType === 'bank' ? 'Bank Transfer' : 'E-Wallet'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tujuan</span>
                <span className="font-medium text-gray-800">{getProviderName()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">{transferType === 'bank' ? 'No. Rekening' : 'No. HP / ID'}</span>
                <span className="font-medium text-gray-800">{destination}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between">
                <span className="text-gray-500">Nominal</span>
                <span className="font-bold text-lg text-green-600">
                  Rp {formatCurrency(amount)}
                </span>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              Selesai
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
