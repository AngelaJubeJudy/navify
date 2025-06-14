import React, { useState } from 'react';
import { Star, ExternalLink, Heart, Download, Search, Filter, Zap, Shield, Clock, Users } from 'lucide-react';

const DailyTools: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [likedTools, setLikedTools] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Tools', count: 48 },
    { id: 'productivity', name: 'Productivity', count: 12 },
    { id: 'design', name: 'Design', count: 10 },
    { id: 'development', name: 'Development', count: 15 },
    { id: 'ai', name: 'AI & ML', count: 8 },
    { id: 'marketing', name: 'Marketing', count: 3 }
  ];

  const tools = [
    {
      id: 1,
      name: 'Raycast',
      description: 'Lightning-fast launcher with powerful extensions for macOS productivity',
      longDescription: 'Raycast is a blazingly fast, totally extendable launcher. It lets you complete tasks, calculate, share common links, and much more.',
      url: 'https://raycast.com',
      category: 'productivity',
      rating: 4.9,
      likes: 1247,
      downloads: 45623,
      featured: true,
      tags: ['macOS', 'Launcher', 'Productivity'],
      pricing: 'Free',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      name: 'Figma',
      description: 'Collaborative interface design tool with real-time collaboration',
      longDescription: 'Figma is the leading collaborative design tool for building meaningful products. Seamlessly design, prototype, develop, and collect feedback in a single platform.',
      url: 'https://figma.com',
      category: 'design',
      rating: 4.8,
      likes: 2156,
      downloads: 89432,
      featured: true,
      tags: ['Design', 'Collaboration', 'Prototyping'],
      pricing: 'Freemium',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      name: 'GitHub Copilot',
      description: 'AI pair programmer that helps you write code faster',
      longDescription: 'GitHub Copilot uses AI to help you write code faster and with less work. Get AI-based suggestions right in your editor.',
      url: 'https://github.com/features/copilot',
      category: 'development',
      rating: 4.7,
      likes: 1893,
      downloads: 67821,
      featured: false,
      tags: ['AI', 'Coding', 'GitHub'],
      pricing: '$10/mo',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 4,
      name: 'ChatGPT',
      description: 'Conversational AI assistant for various tasks and questions',
      longDescription: 'ChatGPT is an AI chatbot developed by OpenAI. It uses natural language processing to simulate human-like conversations.',
      url: 'https://chat.openai.com',
      category: 'ai',
      rating: 4.6,
      likes: 3421,
      downloads: 156789,
      featured: true,
      tags: ['AI', 'Chat', 'Assistant'],
      pricing: 'Freemium',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 5,
      name: 'Linear',
      description: 'Issue tracking and project management tool built for modern teams',
      longDescription: 'Linear is the issue tracking tool built for modern software development. Streamline issues, sprints, and product roadmaps.',
      url: 'https://linear.app',
      category: 'productivity',
      rating: 4.8,
      likes: 987,
      downloads: 23456,
      featured: false,
      tags: ['Project Management', 'Issues', 'Teams'],
      pricing: 'Freemium',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 6,
      name: 'Notion',
      description: 'All-in-one workspace for notes, docs, wikis, and project management',
      longDescription: 'Notion is the connected workspace where better, faster work happens. Write, plan, share, and get organized.',
      url: 'https://notion.so',
      category: 'productivity',
      rating: 4.5,
      likes: 2743,
      downloads: 98765,
      featured: false,
      tags: ['Notes', 'Workspace', 'Organization'],
      pricing: 'Freemium',
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const toggleLike = (toolId: number) => {
    setLikedTools(prev => 
      prev.includes(toolId) 
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  const filteredTools = tools.filter(tool => {
    const matchesSearch = searchQuery === '' || 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredTools = tools.filter(tool => tool.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Daily Tools</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Discover handpicked tools that boost productivity, enhance creativity, and streamline your workflow. 
          Updated daily with the best resources for modern professionals.
        </p>
      </div>

      {/* Featured Tools */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
          <Star className="w-6 h-6 text-yellow-500 mr-2" />
          Featured Today
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.slice(0, 3).map((tool) => (
            <div
              key={tool.id}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-100 hover:border-blue-200 transition-all transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-slate-700">{tool.rating}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{tool.name}</h3>
              <p className="text-slate-600 text-sm mb-4">{tool.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {tool.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-white/60 text-slate-600 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-600">{tool.pricing}</span>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  Visit
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search tools..."
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

      {/* All Tools */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-8">All Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex items-center space-x-2">
                    {tool.featured && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm text-slate-600 ml-1">{tool.rating}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{tool.name}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{tool.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <span className="font-medium text-blue-600">{tool.pricing}</span>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {tool.likes}
                    </div>
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {tool.downloads.toLocaleString()}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit
                  </a>
                  <button
                    onClick={() => toggleLike(tool.id)}
                    className={`px-4 py-2 border rounded-lg transition-colors ${
                      likedTools.includes(tool.id)
                        ? 'border-red-300 text-red-600 bg-red-50'
                        : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedTools.includes(tool.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Daily Tools by the Numbers</h2>
          <p className="text-slate-600">Our community's impact on productivity and innovation</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-slate-900">150+</div>
            <div className="text-slate-600 text-sm">Tools Curated</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-slate-900">50K+</div>
            <div className="text-slate-600 text-sm">Active Users</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-slate-900">100%</div>
            <div className="text-slate-600 text-sm">Vetted Quality</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-slate-900">Daily</div>
            <div className="text-slate-600 text-sm">Updates</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DailyTools;