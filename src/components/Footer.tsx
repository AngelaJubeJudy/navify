import React from 'react';
import { Navigation, Github, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Navigation className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Navify</h3>
                <p className="text-slate-400 text-sm">Quick Bookmarks Navigation</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.content')}</h4>
            <ul className="space-y-2">
              <li><a href="/requests" className="text-slate-400 hover:text-white transition-colors">{t('nav.requests')}</a></li>
              <li><a href="/templates" className="text-slate-400 hover:text-white transition-colors">{t('nav.templates')}</a></li>
              <li><a href="/build-your-nav" className="text-slate-400 hover:text-white transition-colors">{t('nav.buildYourNav')}</a></li>
              <li><a href="/news" className="text-slate-400 hover:text-white transition-colors">{t('nav.news')}</a></li>
              <li><a href="/daily-tools" className="text-slate-400 hover:text-white transition-colors">{t('nav.dailyTools')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.rankings')}</h4>
            <ul className="space-y-2">
              <li><a href="/new-links" className="text-slate-400 hover:text-white transition-colors">{t('nav.newLinks')}</a></li>
              <li><a href="/trending" className="text-slate-400 hover:text-white transition-colors">{t('nav.trending')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;