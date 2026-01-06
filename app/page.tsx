"use client"

import React, { useState } from 'react';
import Onboarding from '../components/Onboarding';
import TermsConditions from '../components/TermsConditions';
import LoginRegister from '../components/LoginRegister';
import SetupPin from '../components/SetupPin';
import VerifyPin from '../components/VerifyPin';
import Dashboard from '../components/Dashboard';
import Transactions from '../components/Transactions';
import FinancialInsight from '../components/FinancialInsight';
import AICoach from '../components/AICoach';
import FinancialGoal from '../components/FinancialGoal';
import Notifications from '../components/Notifications';
import Profile from '../components/Profile';
import Security from '../components/Security';
import LinkBanking from '../components/LinkBanking';
import LogoutConfirmation from '../components/LogoutConfirmation';
import { Home, Wallet, BarChart3, MessageCircle, Target, Bell, User } from 'lucide-react';

export type Screen =
  | 'onboarding'
  | 'terms'
  | 'login'
  | 'setup-pin'
  | 'verify-pin'
  | 'dashboard'
  | 'transactions'
  | 'insight'
  | 'coach'
  | 'goal'
  | 'notifications'
  | 'profile'
  | 'security'
  | 'link-banking'
  | 'logout';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasPin, setHasPin] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <Onboarding onStart={() => setCurrentScreen('terms')} />;
      case 'terms':
        return <TermsConditions
          onAccept={() => setCurrentScreen('login')}
          onDecline={() => setCurrentScreen('onboarding')}
        />;
      case 'login':
        return <LoginRegister onLogin={(email: string) => {
          setUserEmail(email);
          setCurrentScreen('setup-pin');
        }} onBack={() => setCurrentScreen('terms')} />;
      case 'setup-pin':
        return <SetupPin onComplete={() => {
          setHasPin(true);
          setCurrentScreen('verify-pin');
        }} onSkip={() => {
          setIsLoggedIn(true);
          setCurrentScreen('dashboard');
        }} />;
      case 'verify-pin':
        return <VerifyPin onSuccess={() => {
          setIsLoggedIn(true);
          setCurrentScreen('dashboard');
        }} onBack={() => setCurrentScreen('login')} />;
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentScreen} />;
      case 'transactions':
        return <Transactions onNavigate={setCurrentScreen} />;
      case 'insight':
        return <FinancialInsight onNavigate={setCurrentScreen} />;
      case 'coach':
        return <AICoach onNavigate={setCurrentScreen} />;
      case 'goal':
        return <FinancialGoal onNavigate={setCurrentScreen} />;
      case 'notifications':
        return <Notifications onNavigate={setCurrentScreen} />;
      case 'profile':
        return <Profile onNavigate={setCurrentScreen} onLogout={() => setCurrentScreen('logout')} />;
      case 'security':
        return <Security onNavigate={setCurrentScreen} />;
      case 'link-banking':
        return <LinkBanking onNavigate={setCurrentScreen} />;
      case 'logout':
        return <LogoutConfirmation
          onConfirm={() => {
            setIsLoggedIn(false);
            setHasPin(false);
            setCurrentScreen('onboarding');
          }}
          onCancel={() => setCurrentScreen('profile')}
        />;
      default:
        return <Dashboard onNavigate={setCurrentScreen} />;
    }
  };

  const showSidebar = isLoggedIn && ![
    'onboarding',
    'terms',
    'login',
    'setup-pin',
    'verify-pin',
    'logout'
  ].includes(currentScreen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Desktop Container */}
      <div className="max-w-7xl mx-auto">
        <div className={`md:grid ${showSidebar ? 'md:grid-cols-[280px_1fr]' : ''} md:gap-0 md:min-h-screen`}>
          {/* Desktop Sidebar - Only show when logged in */}
          {showSidebar && (
            <aside className="hidden md:block bg-white/50 backdrop-blur-xl border-r border-gray-200">
              <DesktopSidebar currentScreen={currentScreen} onNavigate={setCurrentScreen} onLogout={() => setCurrentScreen('logout')} />
            </aside>
          )}

          {/* Main Content */}
          <main className="min-h-screen">
            {renderScreen()}
          </main>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      {showSidebar && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-gray-200 px-4 py-3 z-50">
          <MobileBottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
        </div>
      )}
    </div>
  );
}

// Desktop Sidebar Component
function DesktopSidebar({ currentScreen, onNavigate, onLogout }: { currentScreen: Screen; onNavigate: (screen: Screen) => void; onLogout: () => void }) {
  const menuItems = [
    { screen: 'dashboard' as Screen, label: 'Dashboard', icon: Home },
    { screen: 'transactions' as Screen, label: 'Transaksi', icon: Wallet },
    { screen: 'insight' as Screen, label: 'Financial Insight', icon: BarChart3 },
    { screen: 'coach' as Screen, label: 'AI Coach', icon: MessageCircle },
    { screen: 'goal' as Screen, label: 'Financial Goal', icon: Target },
    { screen: 'notifications' as Screen, label: 'Notifikasi', icon: Bell },
    { screen: 'profile' as Screen, label: 'Profil', icon: User },
  ];

  return (
    <div className="flex flex-col h-full p-6">
      {/* Logo */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <img
            src="figma:asset/8fc85a7fc0212f02a874778f40804f17b854b157.png"
            alt="SMARTA Logo"
            className="w-auto h-12 object-contain"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.screen}
              onClick={() => onNavigate(item.screen)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${currentScreen === item.screen
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Quick Actions */}
      <div className="mt-4 space-y-2 pt-4 border-t border-gray-200">
        <button
          onClick={() => onNavigate('security')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-600 hover:bg-gray-100 transition-all text-sm"
        >
          Keamanan
        </button>
        <button
          onClick={() => onNavigate('link-banking')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-600 hover:bg-gray-100 transition-all text-sm"
        >
          Link Banking
        </button>
      </div>

      {/* Logout */}
      <button
        onClick={onLogout}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-2xl text-red-600 hover:bg-red-50 transition-all mt-4"
      >
        <span className="text-sm">Keluar</span>
      </button>
    </div>
  );
}

// Mobile Bottom Navigation
function MobileBottomNav({ currentScreen, onNavigate }: { currentScreen: Screen; onNavigate: (screen: Screen) => void }) {
  const menuItems = [
    { screen: 'dashboard' as Screen, label: 'Home', icon: Home },
    { screen: 'transactions' as Screen, label: 'Transaksi', icon: Wallet },
    { screen: 'insight' as Screen, label: 'Insight', icon: BarChart3 },
    { screen: 'coach' as Screen, label: 'Coach', icon: MessageCircle },
    { screen: 'profile' as Screen, label: 'Profil', icon: User },
  ];

  return (
    <div className="grid grid-cols-5 gap-1">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentScreen === item.screen;
        return (
          <button
            key={item.screen}
            onClick={() => onNavigate(item.screen)}
            className={`flex flex-col items-center gap-1 py-2 rounded-xl transition-all ${isActive ? 'text-blue-600' : 'text-gray-500'
              }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : ''} transition-transform`} />
            <span className="text-xs">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}