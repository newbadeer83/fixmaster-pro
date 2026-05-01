import React from "react";
interface EmptyStateProps { title: string; description: string; }
export const EmptyState: React.FC<EmptyStateProps> = React.memo(({ title, description }) => (
  <div className="flex flex-col items-center justify-center py-16 text-gray-500 dark:text-gray-400" role="status" aria-live="polite">
    <h3 className="text-lg font-medium">{title}</h3>
    <p className="text-sm mt-1">{description}</p>
  </div>
));
EmptyState.displayName = "EmptyState";
