import React from 'react';
import { Code, Rocket, Zap, CheckCircle, ArrowRight, Github, Play, Book } from 'lucide-react';

const BuildYourNav: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Plan Your Structure',
      description: 'Define your navigation categories and organize your content hierarchy',
      icon: Book,
      tasks: [
        'Identify your main content categories',
        'Create a site map and user flow',
        'Define your target audience',
        'Plan your URL structure'
      ]
    },
    {
      number: '02',
      title: 'Set Up Your Environment',
      description: 'Get your development environment ready with the right tools',
      icon: Code,
      tasks: [
        'Install Node.js and npm/yarn',
        'Set up a code editor (VS Code recommended)',
        'Create a new React project with Vite',
        'Install necessary dependencies'
      ]
    },
    {
      number: '03',
      title: 'Build Core Components',
      description: 'Create reusable components for your navigation system',
      icon: Zap,
      tasks: [
        'Design your header and navigation menu',
        'Create page layout components',
        'Build category and link components',
        'Implement search functionality'
      ]
    },
    {
      number: '04',
      title: 'Deploy & Launch',
      description: 'Get your navigation site live and accessible to users',
      icon: Rocket,
      tasks: [
        'Build your production version',
        'Choose a hosting platform (Netlify, Vercel)',
        'Set up your custom domain',
        'Configure analytics and monitoring'
      ]
    }
  ];

  const technologies = [
    { name: 'React', description: 'Modern UI library for building interactive interfaces', color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', description: 'Type-safe JavaScript for better development experience', color: 'from-blue-600 to-indigo-600' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid styling', color: 'from-teal-500 to-blue-500' },
    { name: 'Vite', description: 'Fast build tool and development server', color: 'from-purple-500 to-pink-500' },
    { name: 'React Router', description: 'Declarative routing for React applications', color: 'from-red-500 to-orange-500' },
    { name: 'Lucide React', description: 'Beautiful, customizable icon library', color: 'from-green-500 to-teal-500' }
  ];

  const resources = [
    {
      title: 'Starter Template',
      description: 'Get started quickly with our pre-built navigation template',
      link: '#',
      icon: Github,
      type: 'Repository'
    },
    {
      title: 'Video Tutorial',
      description: 'Step-by-step video guide to building your navigation site',
      link: '#',
      icon: Play,
      type: 'Tutorial'
    },
    {
      title: 'Documentation',
      description: 'Comprehensive docs covering all aspects of development',
      link: '#',
      icon: Book,
      type: 'Guide'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Build Your Nav Website</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Learn how to create your own navigation website like Navify. Follow our comprehensive guide 
          and launch your navigation site in no time.
        </p>
      </div>

      {/* Technologies Section */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Technologies We Use</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tech.color} mb-4 flex items-center justify-center`}>
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{tech.name}</h3>
              <p className="text-slate-600 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Step-by-Step Guide</h2>
        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-8 items-start"
              >
                <div className="flex-shrink-0 lg:w-80">
                  <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-medium text-blue-600 mb-2">Step {step.number}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">What you'll do:</h4>
                    <ul className="space-y-3">
                      {step.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Code Example */}
      <section className="bg-slate-900 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-6">Quick Start Example</h2>
        <div className="bg-slate-800 rounded-lg p-6 overflow-x-auto">
          <pre className="text-sm">
            <code>{`# Create a new navigation site
npm create vite@latest my-nav-site -- --template react-ts

# Install dependencies
cd my-nav-site
npm install react-router-dom lucide-react

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Start development server
npm run dev`}</code>
          </pre>
        </div>
        <p className="text-slate-300 mt-4">
          This will create a new React project with TypeScript, perfect for building your navigation site.
        </p>
      </section>

      {/* Resources */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Resources & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <a
                key={index}
                href={resource.link}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all transform hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{resource.description}</p>
                <div className="flex items-center text-blue-600 font-medium text-sm">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
        <Rocket className="w-16 h-16 mx-auto mb-6 opacity-80" />
        <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Start building your navigation website today and join the community of developers 
          creating amazing web experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105">
            <Github className="w-5 h-5 mr-2" />
            Get Template
          </button>
          <button className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
            <Play className="w-5 h-5 mr-2" />
            Watch Tutorial
          </button>
        </div>
      </section>
    </div>
  );
};

export default BuildYourNav;