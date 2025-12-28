import React from 'react';

/**
 * Reusable Loading Component
 * Used across the application for consistent loading states
 */
const Loading = ({ message = 'Loading...', fullScreen = true }) => {
  const content = (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyan-highlight/20 border-t-cyan-highlight rounded-full animate-spin"></div>
      </div>
      <div className="text-cyan-highlight text-xl font-medium">{message}</div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-deep-blue text-white flex items-center justify-center">
        {content}
      </div>
    );
  }

  return (
    <div className="py-20 flex items-center justify-center">
      {content}
    </div>
  );
};

export default Loading;

