import React, { useState } from 'react';
import { TrendingUp, Siren as Fire, ExternalLink, Heart, Eye, MessageSquare, Calendar, User, Star, Award } from 'lucide-react';
import { appendUtmSource } from '../utils/url';

const Trending: React.FC = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [category, setCategory] = useState('all');

  const timeRanges = [
    { id: 'day', name: 'Today', icon: Calendar },
    { id: 'week', name: 'This Week', icon: TrendingUp },
    { id: 'month', name: 'This Month', icon: Fire },
    { id: 'year', name: 'This Year', icon: Award }
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'tools', name: 'Tools & Apps' },
    { id: 'resources', name: 'Resources' },
    { id: 'templates', name: 'Templates' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'inspiration', name: 'Inspiration' }
  ];

  const trendingItems = [
    {
      id: 1,
      title: 'Supabase - The Open Source Firebase Alternative',
      description: 'Build production-ready apps with a Postgres database, authentication, instant APIs, and real-time subscriptions.',
      url: 'https://supabase.com',
      category: 'tools',
      score: 2847,
      votes: 1247,
      views: 45632,
      comments: 89,
      submittedBy: 'devmaster',
      submittedAt: '2024-01-10T08:00:00Z',
      tags: ['Database', 'Backend', 'Open Source'],
      changeDirection: 'up',
      changeAmount: 23,
      featured: true
    },
    {
      id: 2,
      title: 'Tailwind UI - Beautiful UI Components',
      description: 'Over 500+ professionally designed, fully responsive HTML examples built with Tailwind CSS.',
      url: 'https://tailwindui.com',
      category: 'resources',
      score: 2156,
      votes: 892,
      views: 34521,
      comments: 67,
      submittedBy: 'designpro',
      submittedAt: '2024-01-09T14:30:00Z',
      tags: ['Tailwind CSS', 'UI Components', 'Design'],
      changeDirection: 'up',
      changeAmount: 18,
      featured: false
    },
    {
      id: 3,
      title: 'Framer Motion - Production-Ready Motion Library',
      description: 'A production-ready motion library for React with declarative animations and gestures.',
      url: 'https://framer.com/motion',
      category: 'tools',
      score: 1934,
      votes: 743,
      views: 28943,
      comments: 52,
      submittedBy: 'animationking',
      submittedAt: '2024-01-08T11:15:00Z',
      tags: ['React', 'Animation', 'Motion'],
      changeDirection: 'up',
      changeAmount: 15,
      featured: false
    },
    {
      id: 4,
      title: 'Stripe Dashboard Design System',
      description: 'Comprehensive design system and components used by Stripe for their dashboard interfaces.',
      url: 'https://stripe.com/design',
      category: 'inspiration',
      score: 1687,
      votes: 623,
      views: 23156,
      comments: 41,
      submittedBy: 'stripefan',
      submittedAt: '2024-01-07T16:45:00Z',
      tags: ['Design System', 'Dashboard', 'Inspiration'],
      changeDirection: 'up',
      changeAmount: 12,
      featured: false
    },
    {
      id: 5,
      title: 'Next.js 14 App Router Course',
      description: 'Learn the new App Router in Next.js 14 with server components, streaming, and more.',
      url: 'https://nextjs.org/learn',
      category: 'tutorials',
      score: 1523,
      votes: 567,
      views: 19847,
      comments: 38,
      submittedBy: 'nextjsguru',
      submittedAt: '2024-01-06T09:30:00Z',
      tags: ['Next.js', 'Tutorial', 'App Router'],
      changeDirection: 'up',
      changeAmount: 9,
      featured: false
    },
    {
      id: 6,
      title: 'React Email - Email Templates for React',
      description: 'Build and send emails using React components with modern tooling and great developer experience.',
      url: 'https://react.email',
      category: 'tools',
      score: 1345,
      votes: 489,
      views: 16234,
      comments: 29,
      submittedBy: 'emaildev',
      submittedAt: '2024-01-05T13:20:00Z',
      tags: ['React', 'Email', 'Templates'],
      changeDirection: 'up',
      changeAmount: 7,
      featured: false
    },
    {
      id: 7,
      title: 'Vercel v0 - AI-Powered UI Generation',
      description: 'Generate React components and UIs using AI prompts with Vercel\'s new v0 platform.',
      url: 'https://v0.dev',
      category: 'tools',
      score: 1234,
      votes: 445,
      views: 14789,
      comments: 34,
      submittedBy: 'verceluser',
      submittedAt: '2024-01-04T10:45:00Z',
      tags: ['AI', 'UI Generation', 'Vercel'],
      changeDirection: 'down',
      changeAmount: 3,
      featured: false
    },
    {
      id: 8,
      title: 'Shadcn/ui Component Library',
      description: 'Beautifully designed components built with Radix UI and Tailwind CSS. Copy, paste, and customize.',
      url: 'https://ui.shadcn.com',
      category: 'resources',
      score: 1198,
      votes: 423,
      views: 13567,
      comments: 31,
      submittedBy: 'shadcnfan',
      submittedAt: '2024-01-03T15:10:00Z',
      tags: ['Components', 'Tailwind CSS', 'Radix UI'],
      changeDirection: 'up',
      changeAmount: 5,
      featured: false
    }
  ];

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) {
      return 'Today';
    } else if (diffInDays === 1) {
      return '1 day ago';
    } else {
      return `${diffInDays} days ago`;
    }
  };

  const getRankBadge = (index: number) => {
    if (index === 0) return { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: '🏆' };
    if (index === 1) return { bg: 'bg-gray-100', text: 'text-gray-800', icon: '🥈' };
    if (index === 2) return { bg: 'bg-orange-100', text: 'text-orange-800', icon: '🥉' };
    return { bg: 'bg-blue-100', text: 'text-blue-800', icon: '#' + (index + 1) };
  };

  const filteredItems = trendingItems.filter(item => {
    if (category !== 'all' && item.category !== category) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Fire className="w-8 h-8 text-red-500 mr-3" />
          <h1 className="text-4xl font-bold text-slate-900">Trending</h1>
        </div>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Discover what's hot in the web development community. See the most popular tools, 
          resources, and content ranked by community engagement.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-6">
        {/* Time Range Filter */}
        <div>
          <h3 className="text-sm font-medium text-slate-700 mb-3">Time Range</h3>
          <div className="flex flex-wrap gap-2">
            {timeRanges.map(range => {
              const Icon = range.icon;
              return (
                <button
                  key={range.id}
                  onClick={() => setTimeRange(range.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                    timeRange === range.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {range.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <h3 className="text-sm font-medium text-slate-700 mb-3">Category</h3>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {filteredItems.map((item, index) => {
            const rankBadge = getRankBadge(index);
            return (
              <article
                key={item.id}
                className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all ${
                  item.featured ? 'ring-2 ring-yellow-200 bg-yellow-50/30' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Rank Badge */}
                  <div className={`flex-shrink-0 w-12 h-12 ${rankBadge.bg} ${rankBadge.text} rounded-lg flex items-center justify-center font-bold text-lg`}>
                    {rankBadge.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-3">
                      {item.featured && (
                        <span className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          Featured
                        </span>
                      )}
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </span>
                      <div className={`flex items-center text-xs font-medium ${
                        item.changeDirection === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        <TrendingUp className={`w-3 h-3 mr-1 ${
                          item.changeDirection === 'down' ? 'rotate-180' : ''
                        }`} />
                        {item.changeAmount}
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                      <a href={appendUtmSource(item.url)} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    </h2>

                    <p className="text-slate-600 mb-4">{item.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {item.submittedBy}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {getTimeAgo(item.submittedAt)}
                        </div>
                      </div>

                      <a
                        href={appendUtmSource(item.url)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                      >
                        Visit
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="flex-shrink-0 text-center">
                    <div className="text-2xl font-bold text-slate-900">{item.score}</div>
                    <div className="text-xs text-slate-500">score</div>
                  </div>
                </div>

                {/* Stats Bar */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1 text-red-500" />
                        {item.votes} votes
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1 text-blue-500" />
                        {item.views.toLocaleString()} views
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-1 text-green-500" />
                        {item.comments} comments
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Top Performers */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2 text-yellow-500" />
              Top Performers
            </h3>
            <div className="space-y-3">
              {filteredItems.slice(0, 3).map((item, index) => {
                const badge = getRankBadge(index);
                return (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className={`w-6 h-6 ${badge.bg} ${badge.text} rounded text-xs font-bold flex items-center justify-center`}>
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-slate-900 truncate">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500">{item.score} points</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Trending Categories */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Trending Categories</h3>
            <div className="space-y-3">
              {[
                { name: 'Tools & Apps', count: 24, trend: '+12%' },
                { name: 'Resources', count: 18, trend: '+8%' },
                { name: 'Templates', count: 15, trend: '+15%' },
                { name: 'Tutorials', count: 12, trend: '+5%' },
                { name: 'Inspiration', count: 9, trend: '+3%' }
              ].map((cat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-slate-900">{cat.name}</div>
                    <div className="text-xs text-slate-500">{cat.count} items</div>
                  </div>
                  <div className="text-xs font-medium text-green-600">{cat.trend}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Stats */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">This Week's Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-600">Total Views</span>
                <span className="font-bold text-slate-900">2.4M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">New Submissions</span>
                <span className="font-bold text-slate-900">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Community Votes</span>
                <span className="font-bold text-slate-900">8.9K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Active Users</span>
                <span className="font-bold text-slate-900">12.3K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;