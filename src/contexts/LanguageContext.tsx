import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: { [lang in Language]: { [key: string]: string } } = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.requests': 'Requests',
    'nav.templates': 'Templates',
    'nav.buildYourNav': 'Build Your Nav',
    'nav.news': 'News',
    'nav.dailyTools': 'Daily Tools',
    'nav.newLinks': 'New Links',
    'nav.trending': 'Trending',
    
    // Home page
    'home.title': 'Quick Bookmarks Navigation',
    'home.subtitle': 'Your ultimate destination for organized bookmarks, curated templates, daily tools, and trending content. Navigate the web smarter and faster.',
    'home.exploreTemplates': 'Explore Templates',
    'home.viewTrending': 'View Trending',
    'home.whyChoose': 'Why Choose Navify?',
    'home.whyChooseSubtitle': 'Built for developers, designers, and web enthusiasts who need quick access to quality resources',
    'home.exploreCategories': 'Explore Categories',
    'home.exploreCategoriesSubtitle': 'Discover resources organized by category for quick navigation',
    'home.joinCommunity': 'Join Our Community',
    'home.joinCommunitySubtitle': 'Get access to exclusive content, submit your own links, and help shape the future of web navigation',
    'home.submitRequest': 'Submit Request',
    
    // Features
    'feature.smartBookmarks': 'Smart Bookmarks',
    'feature.smartBookmarksDesc': 'Organize and access your favorite websites with intelligent categorization',
    'feature.curatedCollections': 'Curated Collections',
    'feature.curatedCollectionsDesc': 'Discover handpicked templates and tools recommended by our community',
    'feature.trendingContent': 'Trending Content',
    'feature.trendingContentDesc': 'Stay updated with the latest trending links and hot topics',
    'feature.lightningFast': 'Lightning Fast',
    'feature.lightningFastDesc': 'Quick navigation and instant access to your most-used resources',
    'feature.securePrivate': 'Secure & Private',
    'feature.securePrivateDesc': 'Your bookmarks and data are protected with industry-standard security',
    'feature.dailyUpdates': 'Daily Updates',
    'feature.dailyUpdatesDesc': 'Fresh content and tools delivered to you every single day',
    
    // Categories
    'category.websiteTemplates': 'Website Templates',
    'category.websiteTemplatesDesc': 'Professional templates for your next project',
    'category.dailyTools': 'Daily Tools',
    'category.dailyToolsDesc': 'Handpicked tools to boost your productivity',
    'category.latestNews': 'Latest News',
    'category.latestNewsDesc': 'Stay informed with tech and web news',
    'category.buildYourNav': 'Build Your Nav',
    'category.buildYourNavDesc': 'Learn how to create your own navigation site',
    
    // Common
    'common.explore': 'Explore',
    'common.visit': 'Visit',
    'common.readMore': 'Read More',
    'common.getStarted': 'Get Started',
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    
    // Footer
    'footer.description': 'Your ultimate destination for organized bookmarks, website templates, tools, and daily recommendations. Discover, organize, and navigate the web efficiently.',
    'footer.content': 'Content',
    'footer.rankings': 'Rankings',
    'footer.copyright': '© 2025 Navify.lol. All rights reserved. Built for quick bookmarks navigation.',
    
    // 404
    'notFound.title': 'Page Not Found',
    'notFound.desc': 'Sorry, the page you are looking for does not exist or has been moved.',
    'notFound.backHome': 'Back to Home',
    
    // 5xx Error Pages
    'error5xx.500.message': 'The server encountered a problem. Please try again later.',
    'error5xx.500.humor': 'Our server is on strike and having a coffee break ☕️',
    'error5xx.502.message': 'Bad gateway. Please try again later.',
    'error5xx.502.humor': 'The gateway is taking a nap and dreaming in circles 💤',
    'error5xx.503.message': 'Service is under maintenance. Please visit again later.',
    'error5xx.503.humor': 'Our engineer is fixing things up. Be right back! 🔧',
    'error5xx.503.maintain': 'We are working hard to fix this. Please try again soon…',
    'error5xx.reload': 'Reload Page',
    'error5xx.feedback': 'Report Issue'
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.requests': 'Solicitudes',
    'nav.templates': 'Plantillas',
    'nav.buildYourNav': 'Construye tu Nav',
    'nav.news': 'Noticias',
    'nav.dailyTools': 'Herramientas Diarias',
    'nav.newLinks': 'Enlaces Nuevos',
    'nav.trending': 'Tendencias',
    
    // Home page
    'home.title': 'Navegación Rápida de Marcadores',
    'home.subtitle': 'Tu destino definitivo para marcadores organizados, plantillas curadas, herramientas diarias y contenido en tendencia. Navega por la web de manera más inteligente y rápida.',
    'home.exploreTemplates': 'Explorar Plantillas',
    'home.viewTrending': 'Ver Tendencias',
    'home.whyChoose': '¿Por qué elegir Navify?',
    'home.whyChooseSubtitle': 'Construido para desarrolladores, diseñadores y entusiastas web que necesitan acceso rápido a recursos de calidad',
    'home.exploreCategories': 'Explorar Categorías',
    'home.exploreCategoriesSubtitle': 'Descubre recursos organizados por categoría para navegación rápida',
    'home.joinCommunity': 'Únete a Nuestra Comunidad',
    'home.joinCommunitySubtitle': 'Obtén acceso a contenido exclusivo, envía tus propios enlaces y ayuda a dar forma al futuro de la navegación web',
    'home.submitRequest': 'Enviar Solicitud',
    
    // Features
    'feature.smartBookmarks': 'Marcadores Inteligentes',
    'feature.smartBookmarksDesc': 'Organiza y accede a tus sitios web favoritos con categorización inteligente',
    'feature.curatedCollections': 'Colecciones Curadas',
    'feature.curatedCollectionsDesc': 'Descubre plantillas y herramientas seleccionadas recomendadas por nuestra comunidad',
    'feature.trendingContent': 'Contenido en Tendencia',
    'feature.trendingContentDesc': 'Mantente actualizado con los enlaces más populares y temas candentes',
    'feature.lightningFast': 'Súper Rápido',
    'feature.lightningFastDesc': 'Navegación rápida y acceso instantáneo a tus recursos más utilizados',
    'feature.securePrivate': 'Seguro y Privado',
    'feature.securePrivateDesc': 'Tus marcadores y datos están protegidos con seguridad estándar de la industria',
    'feature.dailyUpdates': 'Actualizaciones Diarias',
    'feature.dailyUpdatesDesc': 'Contenido fresco y herramientas entregadas todos los días',
    
    // Categories
    'category.websiteTemplates': 'Plantillas Web',
    'category.websiteTemplatesDesc': 'Plantillas profesionales para tu próximo proyecto',
    'category.dailyTools': 'Herramientas Diarias',
    'category.dailyToolsDesc': 'Herramientas seleccionadas para aumentar tu productividad',
    'category.latestNews': 'Últimas Noticias',
    'category.latestNewsDesc': 'Mantente informado con noticias de tecnología y web',
    'category.buildYourNav': 'Construye tu Nav',
    'category.buildYourNavDesc': 'Aprende cómo crear tu propio sitio de navegación',
    
    // Common
    'common.explore': 'Explorar',
    'common.visit': 'Visitar',
    'common.readMore': 'Leer Más',
    'common.getStarted': 'Comenzar',
    'common.learnMore': 'Aprender Más',
    'common.viewAll': 'Ver Todo',
    'common.search': 'Buscar',
    'common.filter': 'Filtrar',
    'common.loading': 'Cargando...',
    'common.error': 'Error',
    'common.success': 'Éxito',
    
    // Footer
    'footer.description': 'Tu destino definitivo para marcadores organizados, plantillas de sitios web, herramientas y recomendaciones diarias. Descubre, organiza y navega por la web de manera eficiente.',
    'footer.content': 'Contenido',
    'footer.rankings': 'Rankings',
    'footer.copyright': '© 2025 Navify.lol. Todos los derechos reservados. Construido para navegación rápida de marcadores.',
    
    // 404
    'notFound.title': 'Página no encontrada',
    'notFound.desc': 'Lo sentimos, la página que buscas no existe o ha sido movida.',
    'notFound.backHome': 'Volver al inicio',
    
    // 5xx Error Pages
    'error5xx.500.message': 'The server encountered a problem. Please try again later.',
    'error5xx.500.humor': 'Our server is on strike and having a coffee break ☕️',
    'error5xx.502.message': 'Bad gateway. Please try again later.',
    'error5xx.502.humor': 'The gateway is taking a nap and dreaming in circles 💤',
    'error5xx.503.message': 'Service is under maintenance. Please visit again later.',
    'error5xx.503.humor': 'Our engineer is fixing things up. Be right back! 🔧',
    'error5xx.503.maintain': 'We are working hard to fix this. Please try again soon…',
    'error5xx.reload': 'Reload Page',
    'error5xx.feedback': 'Report Issue'
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.requests': '需求池',
    'nav.templates': '网站模板',
    'nav.buildYourNav': '上站流程',
    'nav.news': '每日资讯',
    'nav.dailyTools': '每日推荐',
    'nav.newLinks': '上新链接',
    'nav.trending': '最热趋势',
    
    // Home page
    'home.title': '快速书签导航',
    'home.subtitle': '您的终极目的地，用于组织书签、精选模板、每日工具和热门内容。更智能、更快速地浏览网络。',
    'home.exploreTemplates': '探索模板',
    'home.viewTrending': '查看趋势',
    'home.whyChoose': '为什么选择 Navify？',
    'home.whyChooseSubtitle': '专为需要快速访问优质资源的开发者、设计师和网络爱好者而构建',
    'home.exploreCategories': '探索分类',
    'home.exploreCategoriesSubtitle': '发现按类别组织的资源，便于快速导航',
    'home.joinCommunity': '加入我们的社区',
    'home.joinCommunitySubtitle': '获取独家内容访问权限，提交您自己的链接，并帮助塑造网络导航的未来',
    'home.submitRequest': '提交请求',
    
    // Features
    'feature.smartBookmarks': '智能书签',
    'feature.smartBookmarksDesc': '通过智能分类组织和访问您喜爱的网站',
    'feature.curatedCollections': '精选合集',
    'feature.curatedCollectionsDesc': '发现我们社区推荐的精选模板和工具',
    'feature.trendingContent': '热门内容',
    'feature.trendingContentDesc': '及时了解最新的热门链接和热点话题',
    'feature.lightningFast': '闪电般快速',
    'feature.lightningFastDesc': '快速导航和即时访问您最常用的资源',
    'feature.securePrivate': '安全私密',
    'feature.securePrivateDesc': '您的书签和数据受到行业标准安全保护',
    'feature.dailyUpdates': '每日更新',
    'feature.dailyUpdatesDesc': '每天为您提供新鲜内容和工具',
    
    // Categories
    'category.websiteTemplates': '网站模板',
    'category.websiteTemplatesDesc': '为您的下一个项目提供专业模板',
    'category.dailyTools': '每日工具',
    'category.dailyToolsDesc': '精选工具助力提升您的生产力',
    'category.latestNews': '最新资讯',
    'category.latestNewsDesc': '及时了解科技和网络新闻',
    'category.buildYourNav': '构建导航',
    'category.buildYourNavDesc': '学习如何创建您自己的导航网站',
    
    // Common
    'common.explore': '探索',
    'common.visit': '访问',
    'common.readMore': '阅读更多',
    'common.getStarted': '开始使用',
    'common.learnMore': '了解更多',
    'common.viewAll': '查看全部',
    'common.search': '搜索',
    'common.filter': '筛选',
    'common.loading': '加载中...',
    'common.error': '错误',
    'common.success': '成功',
    
    // Footer
    'footer.description': '您的终极目的地，用于组织书签、网站模板、工具和每日推荐。高效地发现、组织和浏览网络。',
    'footer.content': '内容',
    'footer.rankings': '排名',
    'footer.copyright': '© 2025 Navify.lol. 保留所有权利。专为快速书签导航而构建。',
    
    // 404
    'notFound.title': '页面未找到',
    'notFound.desc': '抱歉，您访问的页面不存在或已被移动。',
    'notFound.backHome': '返回首页',
    
    // 5xx Error Pages
    'error5xx.500.message': '服务器出了点问题，请稍后再试。',
    'error5xx.500.humor': '服务器罢工了，正让它喝杯咖啡恢复下精神 ☕️',
    'error5xx.502.message': '网关错误，请稍后重试。',
    'error5xx.502.humor': '网关打了个盹，梦里还在转圈圈 💤',
    'error5xx.503.message': '服务维护中，请稍后访问。',
    'error5xx.503.humor': '服务员正在紧急维修，马上回来！🔧',
    'error5xx.503.maintain': '我们正在紧急修复中，请稍后再试…',
    'error5xx.reload': '刷新页面',
    'error5xx.feedback': '反馈问题'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'en';
  });

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};