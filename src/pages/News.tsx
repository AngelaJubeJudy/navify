import React, { useState } from 'react';
import { Calendar, Clock, ExternalLink, TrendingUp, User, Tag, Search, Filter } from 'lucide-react';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All News', count: 48 },
    { id: 'web-dev', name: 'Web Development', count: 18 },
    { id: 'design', name: 'Design', count: 12 },
    { id: 'tools', name: 'Tools & Resources', count: 8 },
    { id: 'industry', name: 'Industry News', count: 6 },
    { id: 'tutorials', name: 'Tutorials', count: 4 }
  ];

  const newsItems = [
    {
      id: 1,
      title: 'React 19 Release Candidate Now Available',
      excerpt: 'The React team has announced the release candidate for React 19, featuring improved performance and new concurrent features.',
      content: 'React 19 brings significant improvements to the framework, including better server components, improved hydration, and new concurrent features that make applications faster and more responsive.',
      category: 'web-dev',
      author: 'React Team',
      publishedAt: '2024-01-15T10:00:00Z',
      readTime: '3 min read',
      tags: ['React', 'JavaScript', 'Framework'],
      trending: true,
      url: 'https://react.dev/blog/2024/01/15/react-19-rc'
    },
    {
      id: 2,
      title: 'CSS Container Queries Now Supported in All Modern Browsers',
      excerpt: 'Container queries have achieved full browser support, revolutionizing responsive design by allowing components to respond to their container size.',
      content: 'This milestone in CSS development enables developers to create truly modular, responsive components that adapt based on their container dimensions rather than viewport size.',
      category: 'web-dev',
      author: 'Web Standards Team',
      publishedAt: '2024-01-14T14:30:00Z',
      readTime: '4 min read',
      tags: ['CSS', 'Responsive Design', 'Web Standards'],
      trending: true,
      url: '#'
    },
    {
      id: 3,
      title: 'Figma Announces Dev Mode 2.0 with Enhanced Developer Handoff',
      excerpt: 'Figma\'s latest update streamlines the design-to-development workflow with improved code generation and asset management.',
      content: 'Dev Mode 2.0 introduces automatic code generation, better asset management, and improved collaboration tools between designers and developers.',
      category: 'design',
      author: 'Figma Team',
      publishedAt: '2024-01-13T09:15:00Z',
      readTime: '5 min read',
      tags: ['Figma', 'Design Tools', 'Developer Experience'],
      trending: false,
      url: '#'
    },
    {
      id: 4,
      title: 'Tailwind CSS v4.0 Alpha: Oxide Engine and Performance Improvements',
      excerpt: 'Tailwind CSS v4.0 alpha introduces the new Oxide engine, promising 10x faster builds and improved developer experience.',
      content: 'The new Oxide engine, written in Rust, delivers unprecedented build speeds while maintaining full compatibility with existing Tailwind projects.',
      category: 'tools',
      author: 'Tailwind Labs',
      publishedAt: '2024-01-12T16:45:00Z',
      readTime: '6 min read',
      tags: ['Tailwind CSS', 'Performance', 'Build Tools'],
      trending: true,
      url: '#'
    },
    {
      id: 5,
      title: 'GitHub Copilot Chat Integrated into VS Code',
      excerpt: 'GitHub Copilot Chat is now directly integrated into VS Code, offering contextual AI assistance within your development environment.',
      content: 'This integration brings AI-powered coding assistance directly into the editor, allowing developers to ask questions and get suggestions without leaving their workflow.',
      category: 'tools',
      author: 'GitHub Team',
      publishedAt: '2024-01-11T11:20:00Z',
      readTime: '4 min read',
      tags: ['GitHub Copilot', 'AI', 'VS Code'],
      trending: false,
      url: '#'
    },
    {
      id: 6,
      title: 'State of JS 2024 Survey Results Released',
      excerpt: 'The annual State of JS survey reveals trends in JavaScript ecosystem, with TypeScript maintaining its dominance and new frameworks emerging.',
      content: 'The comprehensive survey of over 40,000 developers shows TypeScript\'s continued growth, the rise of new build tools, and changing preferences in the JavaScript ecosystem.',
      category: 'industry',
      author: 'State of JS Team',
      publishedAt: '2024-01-10T13:00:00Z',
      readTime: '8 min read',
      tags: ['JavaScript', 'Survey', 'Industry Trends'],
      trending: true,
      url: '#'
    }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Latest News</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Stay updated with the latest trends, updates, and insights in web development, design, and technology.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name} ({category.count})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {filteredNews.map((item, index) => (
            <article
              key={item.id}
              className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all ${
                index === 0 ? 'lg:flex lg:gap-6' : ''
              }`}
            >
              {index === 0 && (
                <div className="lg:w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white p-8">
                  <div className="text-center">
                    <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <span className="text-sm font-medium opacity-90">FEATURED STORY</span>
                  </div>
                </div>
              )}
              
              <div className={`p-6 ${index === 0 ? 'lg:w-1/2' : ''}`}>
                <div className="flex items-center gap-2 mb-3">
                  {item.trending && (
                    <span className="inline-flex items-center px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </span>
                  )}
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                </div>
                
                <h2 className={`font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors ${
                  index === 0 ? 'text-xl' : 'text-lg'
                }`}>
                  <a href={item.url}>{item.title}</a>
                </h2>
                
                <p className="text-slate-600 mb-4 line-clamp-2">{item.excerpt}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {item.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(item.publishedAt)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </div>
                  </div>
                  
                  <a
                    href={item.url}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Trending Topics */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-red-500" />
              Trending Topics
            </h3>
            <div className="space-y-3">
              {['React 19', 'CSS Container Queries', 'Tailwind CSS v4', 'GitHub Copilot', 'TypeScript'].map((topic, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-slate-700 hover:text-blue-600 transition-colors"
                >
                  #{topic.replace(' ', '').toLowerCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.slice(1).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-sm text-slate-500">{category.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Updates */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Updates</h3>
            <div className="space-y-4">
              {filteredNews.slice(0, 3).map((item) => (
                <div key={item.id} className="border-l-2 border-blue-500 pl-3">
                  <h4 className="text-sm font-medium text-slate-900 mb-1 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500">{getTimeAgo(item.publishedAt)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;