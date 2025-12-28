import React from 'react';

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree
 * and displays a fallback UI instead of crashing the entire app
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to error reporting service in production
    if (process.env.NODE_ENV === 'production') {
      console.error('Error caught by boundary:', error, errorInfo);
      // TODO: Send to error reporting service (e.g., Sentry, LogRocket)
    } else {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-deep-blue text-white flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-alert-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-alert-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
              <p className="text-light-gray mb-8">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-full font-semibold hover:shadow-lg hover:shadow-security-blue/50 transition-all duration-300"
                >
                  Refresh Page
                </button>
                <a
                  href="/"
                  className="px-6 py-3 border-2 border-security-blue/30 rounded-full font-semibold hover:bg-security-blue/10 transition-all duration-300"
                >
                  Go Home
                </a>
              </div>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <summary className="cursor-pointer text-cyan-highlight mb-2">Error Details (Development Only)</summary>
                <pre className="text-xs text-medium-gray overflow-auto">
                  {this.state.error.toString()}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

