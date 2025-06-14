import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bookmark, Star, TrendingUp, Zap, Shield, Clock, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Bookmark,
      title: t('feature.smartBookmarks'),
      description: t('feature.smartBookmarksDesc'),
    },
    {
      icon: Star,
      title: t('feature.curatedCollections'),
      description: t('feature.curatedCollectionsDesc'),
    },
    {
      icon: TrendingUp,
      title: t('feature.trendingContent'),
      description: t('feature.trendingContentDesc'),
    },
    {
      icon: Zap,
      title: t('feature.lightningFast'),
      description: t('feature.lightningFastDesc'),
    },
    {
      icon: Shield,
      title: t('feature.securePrivate'),
      description: t('feature.securePrivateDesc'),
    },
    {
      icon: Clock,
      title: t('feature.dailyUpdates'),
      description: t('feature.dailyUpdatesDesc'),
    },
  ];

  const categories = [
    {
      title: t('category.websiteTemplates'),
      description: t('category.websiteTemplatesDesc'),
      href: '/templates',
      color: 'from-blue-500 to-cyan-500',
      icon: '🎨',
    },
    {
      title: t('category.dailyTools'),
      description: t('category.dailyToolsDesc'),
      href: '/daily-tools',
      color: 'from-purple-500 to-pink-500',
      icon: '🛠️',
    },
    {
      title: t('category.latestNews'),
      description: t('category.latestNewsDesc'),
      href: '/news',
      color: 'from-green-500 to-teal-500',
      icon: '📰',
    },
    {
      title: t('category.buildYourNav'),
      description: t('category.buildYourNavDesc'),
      href: '/build-your-nav',
      color: 'from-orange-500 to-red-500',
      icon: '🚀',
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/5 dark:to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              {t('home.title').split(' ').slice(0, 2).join(' ')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}{t('home.title').split(' ').slice(2).join(' ')}
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {t('home.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/templates"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              >
                {t('home.exploreTemplates')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/trending"
                className="inline-flex items-center px-8 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-lg border-2 border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 transition-all transform hover:scale-105 shadow-lg"
              >
                {t('home.viewTrending')}
                <TrendingUp className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              {t('home.whyChoose')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t('home.whyChooseSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              {t('home.exploreCategories')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              {t('home.exploreCategoriesSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.href}
                className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="p-6">
                  <div className="text-3xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">{category.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{category.description}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                    {t('common.explore')}
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600">10K+</div>
              <div className="text-slate-600 dark:text-slate-300">Curated Links</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-purple-600">500+</div>
              <div className="text-slate-600 dark:text-slate-300">Website Templates</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-green-600">50+</div>
              <div className="text-slate-600 dark:text-slate-300">Daily Tools</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-orange-600">5K+</div>
              <div className="text-slate-600 dark:text-slate-300">Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white">
            <Users className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t('home.joinCommunity')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('home.joinCommunitySubtitle')}
            </p>
            <Link
              to="/requests"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
            >
              {t('home.submitRequest')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;