import React from "react";
export const SkeletonKanban: React.FC = React.memo(() => (
  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 animate-pulse" role="status">
    <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-20 mb-3" />
    <div className="space-y-2">
      <div className="h-20 bg-gray-300 dark:bg-gray-600 rounded" />
      <div className="h-20 bg-gray-300 dark:bg-gray-600 rounded" />
    </div>
  </div>
));
SkeletonKanban.displayName = "SkeletonKanban";
