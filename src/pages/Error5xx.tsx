import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Error5xxProps {
  code?: number;
  message?: string;
}

const illustrations: Record<number, React.ReactNode> = {
  500: (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
      {/* 服务器罢工小人 */}
      <rect x="30" y="60" width="60" height="36" rx="8" fill="#FDF6B2" stroke="#FBBF24" strokeWidth="3"/>
      <rect x="40" y="70" width="40" height="16" rx="4" fill="#fff" stroke="#FBBF24" strokeWidth="2"/>
      <circle cx="60" cy="50" r="18" fill="#FDF6B2" stroke="#FBBF24" strokeWidth="3"/>
      <ellipse cx="54" cy="52" rx="3" ry="5" fill="#fff"/>
      <ellipse cx="54" cy="54" rx="1.5" ry="2.5" fill="#22223B"/>
      <ellipse cx="66" cy="52" rx="3" ry="5" fill="#fff"/>
      <ellipse cx="66" cy="54" rx="1.5" ry="2.5" fill="#22223B"/>
      <path d="M56 62 Q60 66 64 62" stroke="#F59E42" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <ellipse cx="50" cy="58" rx="2" ry="1" fill="#FCA5A5" fillOpacity="0.7"/>
      <ellipse cx="70" cy="58" rx="2" ry="1" fill="#FCA5A5" fillOpacity="0.7"/>
      {/* 服务器冒烟 */}
      <ellipse cx="60" cy="40" rx="6" ry="2" fill="#FBBF24" fillOpacity="0.5"/>
      <ellipse cx="60" cy="36" rx="4" ry="1.5" fill="#FBBF24" fillOpacity="0.3"/>
      <ellipse cx="60" cy="32" rx="2.5" ry="1" fill="#FBBF24" fillOpacity="0.2"/>
    </svg>
  ),
  502: (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
      {/* 网关打盹小云朵 */}
      <ellipse cx="60" cy="70" rx="30" ry="16" fill="#E0E7FF" />
      <ellipse cx="45" cy="70" rx="10" ry="8" fill="#C7D2FE" />
      <ellipse cx="75" cy="70" rx="12" ry="9" fill="#C7D2FE" />
      {/* 睡眼 */}
      <path d="M52 74 Q54 76 56 74" stroke="#6366F1" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M64 74 Q66 76 68 74" stroke="#6366F1" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Zzz */}
      <text x="80" y="60" fontSize="16" fill="#6366F1" fontWeight="bold">Zz</text>
    </svg>
  ),
  503: (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
      {/* 维修小锤子+齿轮 */}
      <circle cx="60" cy="70" r="22" fill="#FEF9C3" stroke="#FBBF24" strokeWidth="3"/>
      <rect x="54" y="54" width="12" height="28" rx="4" fill="#FBBF24"/>
      <rect x="58" y="44" width="4" height="16" rx="2" fill="#F59E42"/>
      {/* 齿轮 */}
      <g>
        <circle cx="60" cy="70" r="8" fill="#FDE68A" stroke="#FBBF24" strokeWidth="2"/>
        <g stroke="#FBBF24" strokeWidth="2">
          <line x1="60" y1="60" x2="60" y2="54"/>
          <line x1="60" y1="80" x2="60" y2="86"/>
          <line x1="52" y1="70" x2="46" y2="70"/>
          <line x1="68" y1="70" x2="74" y2="70"/>
        </g>
      </g>
      {/* 扳手 */}
      <rect x="80" y="90" width="18" height="4" rx="2" fill="#FBBF24" transform="rotate(-30 80 90)"/>
    </svg>
  ),
};

const Error5xx: React.FC<Error5xxProps> = ({ code = 500, message }) => {
  const { t } = useLanguage();
  const illustration = illustrations[code] || illustrations[500];
  const humorKey = `error5xx.${code}.humor`;
  const messageKey = `error5xx.${code}.message`;
  const maintainKey = `error5xx.${code}.maintain`;
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center py-20">
      {illustration}
      <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-100 mb-2">{code}</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-2">{message || t(messageKey)}</p>
      <p className="text-slate-500 dark:text-slate-400 mb-6 text-base">{t(humorKey)}</p>
      {code === 503 && (
        <div className="text-yellow-600 dark:text-yellow-400 mb-4">{t(maintainKey)}</div>
      )}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
        >
          {t('error5xx.reload')}
        </button>
        <a
          href={`mailto:support@navify.lol?subject=${encodeURIComponent(t('error5xx.feedback'))}&body=${encodeURIComponent(t('error5xx.' + code + '.message'))}`}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg"
        >
          {t('error5xx.feedback')}
        </a>
      </div>
    </div>
  );
};

export default Error5xx; 