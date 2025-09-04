import React from 'react';

interface StepContentProps {
  content: string | undefined;
  isLoading: boolean;
  error: string | null;
}

const StepContent: React.FC<StepContentProps> = ({ content, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="text-lg text-indigo-300">Generando contenido con IA...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  return (
    <div className="prose prose-invert max-w-none text-indigo-200 leading-relaxed whitespace-pre-wrap">
      {content || "Selecciona un paso para comenzar."}
    </div>
  );
};

export default StepContent;
