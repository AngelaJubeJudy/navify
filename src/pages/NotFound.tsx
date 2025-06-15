import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { AlertTriangle } from 'lucide-react';

const NotFound: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center py-20">
      {/* 原创SVG小玩偶 */}
      <div className="mb-6">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto drop-shadow-lg">
          {/* 脸部 */}
          <circle cx="60" cy="60" r="48" fill="#FDF6B2" stroke="#FBBF24" strokeWidth="4"/>
          {/* 左眼 */}
          <ellipse cx="45" cy="58" rx="7" ry="9" fill="#fff"/>
          <ellipse cx="45" cy="60" rx="3" ry="4" fill="#22223B"/>
          {/* 右眼 */}
          <ellipse cx="75" cy="58" rx="7" ry="9" fill="#fff"/>
          <ellipse cx="75" cy="60" rx="3" ry="4" fill="#22223B"/>
          {/* 微笑嘴巴 */}
          <path d="M48 78 Q60 90 72 78" stroke="#F59E42" strokeWidth="3" fill="none" strokeLinecap="round"/>
          {/* 腮红 */}
          <ellipse cx="38" cy="70" rx="4" ry="2" fill="#FCA5A5" fillOpacity="0.7"/>
          <ellipse cx="82" cy="70" rx="4" ry="2" fill="#FCA5A5" fillOpacity="0.7"/>
          {/* 小帽子 */}
          <ellipse cx="60" cy="32" rx="18" ry="8" fill="#6366F1"/>
          <rect x="42" y="24" width="36" height="10" rx="5" fill="#6366F1"/>
          <ellipse cx="60" cy="24" rx="8" ry="3" fill="#818CF8"/>
          {/* 手 waving */}
          <path d="M18 60 Q10 50 22 44 Q28 42 32 50 Q34 56 28 58 Q22 60 18 60 Z" fill="#FDF6B2" stroke="#FBBF24" strokeWidth="2"/>
          {/* 小星星点缀 */}
          <g>
            <circle cx="100" cy="30" r="2" fill="#FBBF24"/>
            <circle cx="20" cy="30" r="1.5" fill="#FBBF24"/>
            <circle cx="105" cy="80" r="1.5" fill="#FBBF24"/>
          </g>
        </svg>
      </div>
      <div className="flex items-center justify-center mb-6">
        <AlertTriangle className="w-16 h-16 text-yellow-500 mr-3" />
        <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-100">404</h1>
      </div>
      <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
        {t('notFound.title') || 'Page Not Found'}
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8">
        {t('notFound.desc') || 'Sorry, the page you are looking for does not exist or has been moved.'}
      </p>
      <Link
        to="/"
        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
      >
        {t('notFound.backHome') || 'Back to Home'}
      </Link>
    </div>
  );
};

export default NotFound; 