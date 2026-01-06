import React from 'react';
import { ArrowLeft, AlertTriangle, TrendingUp, Bell, Target, Sparkles, Calendar } from 'lucide-react';
import { Screen } from '@/app/page';

interface NotificationsProps {
  onNavigate: (screen: Screen) => void;
}

interface Notification {
  id: number;
  type: 'warning' | 'success' | 'info' | 'reminder';
  title: string;
  message: string;
  time: string;
  icon: any;
  color: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    type: 'warning',
    title: 'Peringatan Pengeluaran',
    message: 'Pengeluaran kategori Makanan minggu ini sudah mencapai 75% dari budget bulanan.',
    time: '2 jam yang lalu',
    icon: AlertTriangle,
    color: 'orange',
  },
  {
    id: 2,
    type: 'success',
    title: 'Target Tercapai!',
    message: 'Selamat! Anda berhasil mencapai 50% dari target "Liburan ke Jepang". Pertahankan! 🎉',
    time: '5 jam yang lalu',
    icon: Target,
    color: 'green',
  },
  {
    id: 3,
    type: 'info',
    title: 'Insight Positif',
    message: 'Pengeluaran bulan ini turun 16% dari bulan lalu. Kamu melakukan pekerjaan yang hebat!',
    time: '1 hari yang lalu',
    icon: TrendingUp,
    color: 'blue',
  },
  {
    id: 4,
    type: 'reminder',
    title: 'Reminder Pembayaran',
    message: 'Tagihan listrik jatuh tempo dalam 3 hari (8 Januari). Jangan lupa bayar ya!',
    time: '1 hari yang lalu',
    icon: Calendar,
    color: 'purple',
  },
  {
    id: 5,
    type: 'info',
    title: 'Tips Keuangan',
    message: 'Dengan savings rate 56.7%, Anda bisa mulai mempertimbangkan investasi jangka panjang.',
    time: '2 hari yang lalu',
    icon: Sparkles,
    color: 'teal',
  },
  {
    id: 6,
    type: 'success',
    title: 'Kebiasaan Baik!',
    message: 'Anda konsisten mencatat transaksi selama 30 hari berturut-turut. Luar biasa! 💪',
    time: '3 hari yang lalu',
    icon: TrendingUp,
    color: 'green',
  },
  {
    id: 7,
    type: 'reminder',
    title: 'Review Bulanan',
    message: 'Saatnya review keuangan bulanan! Lihat insight dan atur target bulan depan.',
    time: '5 hari yang lalu',
    icon: Calendar,
    color: 'purple',
  },
];

export default function Notifications({ onNavigate }: NotificationsProps) {
  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border') => {
    const colorMap = {
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
      teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200' },
    };
    return colorMap[color as keyof typeof colorMap]?.[type] || colorMap.blue[type];
  };

  return (
    <div className="min-h-screen pb-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-b-[2rem] px-6 pt-12 pb-6 shadow-xl">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => onNavigate('dashboard')}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white">Notifikasi</h2>
        </div>
        <p className="text-blue-100 text-sm">Peringatan dan insight keuangan</p>
      </div>

      <div className="px-6 mt-6">
        {/* Notification Count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-600">{notifications.length} notifikasi</p>
          <button className="text-sm text-blue-500 hover:text-blue-600">Tandai semua dibaca</button>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className={`bg-gradient-to-br ${getColorClasses(notification.color, 'bg')} to-white/50 backdrop-blur-sm rounded-2xl p-4 border ${getColorClasses(notification.color, 'border')} hover:shadow-lg transition-all`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${getColorClasses(notification.color, 'text')} bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${getColorClasses(notification.color, 'text')}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="text-gray-800">{notification.title}</h4>
                      {notification.type === 'warning' && (
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-400">{notification.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Settings */}
        <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-white/50">
          <h3 className="text-gray-800 mb-4">Pengaturan Notifikasi</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-gray-800 mb-1">Peringatan Overspending</h4>
                <p className="text-xs text-gray-500">Notifikasi saat pengeluaran melebihi budget</p>
              </div>
              <button className="w-12 h-7 bg-blue-500 rounded-full relative transition-all">
                <div className="w-5 h-5 bg-white rounded-full absolute right-1 top-1 shadow-md"></div>
              </button>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div>
                <h4 className="text-gray-800 mb-1">Insight Positif</h4>
                <p className="text-xs text-gray-500">Kabar baik tentang kemajuan keuangan</p>
              </div>
              <button className="w-12 h-7 bg-blue-500 rounded-full relative transition-all">
                <div className="w-5 h-5 bg-white rounded-full absolute right-1 top-1 shadow-md"></div>
              </button>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div>
                <h4 className="text-gray-800 mb-1">Reminder Kontekstual</h4>
                <p className="text-xs text-gray-500">Pengingat pembayaran dan review</p>
              </div>
              <button className="w-12 h-7 bg-blue-500 rounded-full relative transition-all">
                <div className="w-5 h-5 bg-white rounded-full absolute right-1 top-1 shadow-md"></div>
              </button>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div>
                <h4 className="text-gray-800 mb-1">Tips & Saran</h4>
                <p className="text-xs text-gray-500">Rekomendasi keuangan dari AI Coach</p>
              </div>
              <button className="w-12 h-7 bg-gray-300 rounded-full relative transition-all">
                <div className="w-5 h-5 bg-white rounded-full absolute left-1 top-1 shadow-md"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
