import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}