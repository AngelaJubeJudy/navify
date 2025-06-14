import React, { useState } from 'react';
import { Search, Filter, ExternalLink, Download, Heart, Star, Code, Palette } from 'lucide-react';

const Templates: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const categories = [
    { id: 'all', name: 'All Templates', count: 156 },
    { id: 'landing', name: 'Landing Pages', count: 45 },
    { id: 'dashboard', name: 'Dashboards', count: 32 },
    { id: 'ecommerce', name: 'E-commerce', count: 28 },
    { id: 'portfolio', name: 'Portfolios', count: 24 },
    { id: 'blog', name: 'Blogs', count: 18 },
    { id: 'admin', name: 'Admin Panels', count: 9 }
  ];

  const tags = ['all', 'react', 'vue', 'tailwind', 'bootstrap', 'typescript', 'nextjs', 'nuxt'];

  const templates = [
    {
      id: 1,
      title: 'Modern SaaS Landing Page',
      description: 'Beautiful, responsive landing page template for SaaS products with animated sections',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'landing',
      tags: ['react', 'tailwind', 'typescript'],
      likes: 234,
      downloads: 1840,
      price: 'Free',
      rating: 4.8,
      author: 'WebCraft Studio'
    },
    {
      id: 2,
      title: 'E-commerce Dashboard',
      description: 'Complete admin dashboard for e-commerce platforms with analytics and inventory management',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'dashboard',
      tags: ['vue', 'tailwind', 'typescript'],
      likes: 189,
      downloads: 1245,
      price: '$29',
      rating: 4.9,
      author: 'DashCraft'
    },
    {
      id: 3,
      title: 'Creative Portfolio',
      description: 'Stunning portfolio template for designers and developers with smooth animations',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'portfolio',
      tags: ['react', 'nextjs', 'tailwind'],
      likes: 156,
      downloads: 892,
      price: 'Free',
      rating: 4.7,
      author: 'DesignLab'
    },
    {
      id: 4,
      title: 'Minimalist Blog',
      description: 'Clean and minimal blog template with dark mode support and excellent typography',
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'blog',
      tags: ['nextjs', 'tailwind', 'typescript'],
      likes: 298,
      downloads: 2156,
      price: 'Free',
      rating: 4.8,
      author: 'BlogCraft'
    },
    {
      id: 5,
      title: 'E-commerce Store',
      description: 'Full-featured online store template with cart, checkout, and payment integration',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'ecommerce',
      tags: ['react', 'tailwind', 'typescript'],
      likes: 421,
      downloads: 3267,
      price: '$49',
      rating: 4.9,
      author: 'ShopDesign'
    },
    {
      id: 6,
      title: 'Admin Panel Pro',
      description: 'Professional admin panel with comprehensive charts, tables, and user management',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'admin',
      tags: ['vue', 'bootstrap', 'typescript'],
      likes: 167,
      downloads: 934,
      price: '$39',
      rating: 4.6,
      author: 'AdminCraft'
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesTag = selectedTag === 'all' || template.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Website Templates</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Professional, modern website templates to kickstart your next project. All templates are responsive and production-ready.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
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
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Technologies</option>
              {tags.slice(1).map(tag => (
                <option key={tag} value={tag}>
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tag Pills */}
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tag === 'all' ? 'All' : tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            <div className="relative overflow-hidden">
              <img
                src={template.image}
                alt={template.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute top-4 right-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  template.price === 'Free' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {template.price}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {template.title}
                </h3>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm text-slate-600 ml-1">{template.rating}</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                {template.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {template.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                <span>by {template.author}</span>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    {template.likes}
                  </div>
                  <div className="flex items-center">
                    <Download className="w-4 h-4 mr-1" />
                    {template.downloads}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Preview
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors">
                  <Code className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <Palette className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-900 mb-2">No templates found</h3>
          <p className="text-slate-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Templates;