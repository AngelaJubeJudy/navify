import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidCatch(/* error: Error, errorInfo: React.ErrorInfo */) {
    // 可扩展：上报错误日志
    // console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center py-20">
          <div className="mb-6">
            {/* Lucide ServerCrash 图标 */}
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto text-red-500" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/><path d="M13 6h.01M13 18h.01M18 6h.01M18 18h.01M8 10v4m8-4v4"/><path d="M12 12v.01"/><path d="M12 16v2"/><path d="M12 8V6"/></svg>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">500</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">服务器出了点问题，请稍后再试。</p>
          <button
            onClick={this.handleReload}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
          >
            刷新页面
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary; 