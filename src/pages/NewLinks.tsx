import React, { useState } from 'react';
import { Plus, Clock, ExternalLink, User, Tag, Heart, Eye, TrendingUp } from 'lucide-react';
import { appendUtmSource } from '../utils/url';

const NewLinks: React.FC = () => {
  const [timeFilter, setTimeFilter] = useState('today');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const timeFilters = [
    { id: 'today', name: 'Today', count: 12 },
    { id: 'week', name: 'This Week', count: 45 },
    { id: 'month', name: 'This Month', count: 189 },
    { id: 'all', name: 'All Time', count: 1247 }
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'tools', name: 'Tools & Apps' },
    { id: 'resources', name: 'Resources' },
    { id: 'templates', name: 'Templates' },
    { id: 'inspiration', name: 'Inspiration' },
    { id: 'learning', name: 'Learning' }
  ];

  const newLinks = [
    {
      id: 1,
      title: 'Supabase Vector - Embeddings Made Simple',
      description: 'Store and query vector embeddings at scale with Supabase Vector. Perfect for AI applications and semantic search.',
      url: 'https://supabase.com/vector',
      category: 'tools',
      submittedBy: 'devhunter92',
      submittedAt: '2024-01-15T14:30:00Z',
      tags: ['AI', 'Database', 'Vector Search'],
      votes: 42,
      views: 1247,
      comments: 8,
      trending: true
    },
    {
      id: 2,
      title: 'Component Library Builder - Create Your Design System',
      description: 'Build, document, and maintain your component library with this comprehensive toolkit for design systems.',
      url: 'https://componentlib.dev',
      category: 'tools',
      submittedBy: 'designpro',
      submittedAt: '2024-01-15T12:15:00Z',
      tags: ['Design System', 'Components', 'Documentation'],
      votes: 38,
      views: 892,
      comments: 12,
      trending: false
    },
    {
      id: 3,
      title: 'Free Tailwind UI Components Collection',
      description: 'Over 500 free, copy-paste Tailwind CSS components for modern web applications. No signup required.',
      url: 'https://tailwindui-free.com',
      category: 'resources',
      submittedBy: 'tailwindlover',
      submittedAt: '2024-01-15T10:45:00Z',
      tags: ['Tailwind CSS', 'UI Components', 'Free'],
      votes: 67,
      views: 2156,
      comments: 15,
      trending: true
    },
    {
      id: 4,
      title: 'API Documentation Generator',
      description: 'Generate beautiful, interactive API documentation from your OpenAPI/Swagger specs in seconds.',
      url: 'https://api-docs-gen.com',
      category: 'tools',
      submittedBy: 'apimaster',
      submittedAt: '2024-01-15T09:20:00Z',
      tags: ['API', 'Documentation', 'OpenAPI'],
      votes: 29,
      views: 634,
      comments: 6,
      trending: false
    },
    {
      id: 5,
      title: 'CSS Grid Generator Pro',
      description: 'Visual CSS Grid generator with advanced features, responsive breakpoints, and clean code output.',
      url: 'https://cssgrid-pro.com',
      category: 'tools',
      submittedBy: 'cssmagic',
      submittedAt: '2024-01-15T08:00:00Z',
      tags: ['CSS', 'Grid', 'Generator'],
      votes: 51,
      views: 1523,
      comments: 9,
      trending: true
    },
    {
      id: 6,
      title: 'React Performance Optimization Guide',
      description: 'Comprehensive guide to optimizing React applications for better performance and user experience.',
      url: 'https://react-perf-guide.dev',
      category: 'learning',
      submittedBy: 'reactexpert',
      submittedAt: '2024-01-14T22:30:00Z',
      tags: ['React', 'Performance', 'Optimization'],
      votes: 73,
      views: 3421,
      comments: 18,
      trending: true
    },
    {
      id: 7,
      title: 'Minimal Landing Page Template',
      description: 'Clean, modern landing page template built with Next.js and Tailwind CSS. Perfect for SaaS products.',
      url: 'https://minimal-landing.com',
      category: 'templates',
      submittedBy: 'templateking',
      submittedAt: '2024-01-14T20:15:00Z',
      tags: ['Template', 'Landing Page', 'Next.js'],
      votes: 35,
      views: 967,
      comments: 7,
      trending: false
    },
    {
      id: 8,
      title: 'Color Palette Generator AI',
      description: 'AI-powered color palette generator that creates harmonious color schemes for your design projects.',
      url: 'https://ai-colors.design',
      category: 'tools',
      submittedBy: 'colorwhiz',
      submittedAt: '2024-01-14T18:45:00Z',
      tags: ['AI', 'Colors', 'Design'],
      votes: 44,
      views: 1234,
      comments: 11,
      trending: false
    }
  ];

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  const filteredLinks = newLinks.filter(link => {
    const matchesCategory = categoryFilter === 'all' || link.category === categoryFilter;
    
    // Simple time filtering logic
    const linkDate = new Date(link.submittedAt);
    const now = new Date();
    const hoursDiff = Math.floor((now.getTime() - linkDate.getTime()) / (1000 * 60 * 60));
    
    let matchesTime = true;
    switch (timeFilter) {
      case 'today':
        matchesTime = hoursDiff < 24;
        break;
      case 'week':
        matchesTime = hoursDiff < 24 * 7;
        break;
      case 'month':
        matchesTime = hoursDiff < 24 * 30;
        break;
      default:
        matchesTime = true;
    }
    
    return matchesCategory && matchesTime;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">New Links</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Discover the latest tools, resources, and inspiration submitted by our community. 
          Fresh content added daily by developers and designers worldwide.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="flex flex-wrap gap-2">
            {timeFilters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setTimeFilter(filter.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  timeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {filter.name} ({filter.count})
              </button>
            ))}
          </div>
          
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {filteredLinks.map((link, index) => (
            <article
              key={link.id}
              className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all ${
                index === 0 ? 'border-blue-200 bg-blue-50/30' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    {link.trending && (
                      <span className="inline-flex items-center px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </span>
                    )}
                    {index === 0 && (
                      <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        <Plus className="w-3 h-3 mr-1" />
                        Latest
                      </span>
                    )}
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded">
                      {categories.find(cat => cat.id === link.category)?.name}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors">
                    <a href={appendUtmSource(link.url)} target="_blank" rel="noopener noreferrer">
                      {link.title}
                    </a>
                  </h2>
                  
                  <p className="text-slate-600 mb-4">{link.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {link.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={appendUtmSource(link.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex-shrink-0"
                >
                  Visit
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
              
              <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {link.submittedBy}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {getTimeAgo(link.submittedAt)}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-slate-500">
                    <Heart className="w-4 h-4 mr-1" />
                    {link.votes}
                  </div>
                  <div className="flex items-center text-slate-500">
                    <Eye className="w-4 h-4 mr-1" />
                    {link.views}
                  </div>
                  <div className="flex items-center text-slate-500">
                    <span className="text-xs">{link.comments} comments</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Submit Link CTA */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
            <Plus className="w-8 h-8 mb-3 opacity-80" />
            <h3 className="text-lg font-semibold mb-2">Submit a Link</h3>
            <p className="text-sm opacity-90 mb-4">
              Found something awesome? Share it with the community and help others discover great resources.
            </p>
            <button className="w-full bg-white text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
              Submit Link
            </button>
          </div>

          {/* Top Contributors */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Top Contributors</h3>
            <div className="space-y-3">
              {['devhunter92', 'reactexpert', 'tailwindlover', 'designpro', 'apimaster'].map((user, index) => (
                <div key={user} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {user[0].toUpperCase()}
                    </div>
                    <span className="ml-3 text-slate-700 font-medium">{user}</span>
                  </div>
                  <span className="text-sm text-slate-500">#{index + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {filteredLinks.slice(0, 3).map((link) => (
                <div key={link.id} className="border-l-2 border-blue-500 pl-3">
                  <h4 className="text-sm font-medium text-slate-900 mb-1 line-clamp-1">
                    {link.title}
                  </h4>
                  <p className="text-xs text-slate-500">
                    by {link.submittedBy} • {getTimeAgo(link.submittedAt)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Community Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Links Today</span>
                <span className="font-semibold text-slate-900">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">This Week</span>
                <span className="font-semibold text-slate-900">45</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Total Links</span>
                <span className="font-semibold text-slate-900">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Contributors</span>
                <span className="font-semibold text-slate-900">89</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLinks;