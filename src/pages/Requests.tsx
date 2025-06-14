import React, { useState } from 'react';
import { Plus, Send, MessageSquare, ThumbsUp, Clock, User } from 'lucide-react';

const Requests: React.FC = () => {
  const [newRequest, setNewRequest] = useState({
    title: '',
    description: '',
    category: '',
    url: ''
  });

  const requests = [
    {
      id: 1,
      title: 'Add more React component libraries',
      description: 'Would love to see more modern React component libraries like Chakra UI, Mantine, etc.',
      category: 'Templates',
      author: 'WebDev123',
      votes: 24,
      comments: 8,
      timeAgo: '2 hours ago',
      status: 'open'
    },
    {
      id: 2,
      title: 'AI Writing Tools Section',
      description: 'Can we have a dedicated section for AI writing and content generation tools?',
      category: 'Daily Tools',
      author: 'ContentCreator',
      votes: 18,
      comments: 5,
      timeAgo: '1 day ago',
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'Add Tailwind CSS templates',
      description: 'More Tailwind CSS templates would be great, especially for landing pages.',
      category: 'Templates',
      author: 'Designer101',
      votes: 32,
      comments: 12,
      timeAgo: '3 days ago',
      status: 'completed'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('New request:', newRequest);
    setNewRequest({ title: '', description: '', category: '', url: '' });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Feature Requests</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Have an idea to improve Navify? Submit your suggestions and vote on community proposals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Submit New Request */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-24">
            <div className="flex items-center mb-4">
              <Plus className="w-5 h-5 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold text-slate-900">Submit Request</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={newRequest.title}
                  onChange={(e) => setNewRequest({ ...newRequest, title: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief description of your request"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Category
                </label>
                <select
                  value={newRequest.category}
                  onChange={(e) => setNewRequest({ ...newRequest, category: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select category</option>
                  <option value="Templates">Templates</option>
                  <option value="Daily Tools">Daily Tools</option>
                  <option value="News">News</option>
                  <option value="Features">Site Features</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Description
                </label>
                <textarea
                  value={newRequest.description}
                  onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Detailed description of your request"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  URL (Optional)
                </label>
                <input
                  type="url"
                  value={newRequest.url}
                  onChange={(e) => setNewRequest({ ...newRequest, url: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Request
              </button>
            </form>
          </div>
        </div>

        {/* Requests List */}
        <div className="lg:col-span-2 space-y-6">
          {requests.map((request) => (
            <div
              key={request.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(request.status)}`}>
                      {request.status.replace('-', ' ')}
                    </span>
                    <span className="text-sm text-slate-500">#{request.id}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {request.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {request.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-slate-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {request.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {request.timeAgo}
                  </div>
                  <span className="px-2 py-1 bg-slate-100 rounded text-xs">
                    {request.category}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-slate-500 hover:text-blue-600 transition-colors">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {request.votes}
                  </button>
                  <button className="flex items-center text-slate-500 hover:text-blue-600 transition-colors">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    {request.comments}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Requests;