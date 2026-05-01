import React from "react";
interface ErrorStateProps { message: string; onRetry?: () => void; }
export const ErrorState: React.FC<ErrorStateProps> = React.memo(({ message, onRetry }) => (
  <div className="flex flex-col items-center justify-center py-16 text-red-500" role="alert" aria-live="assertive">
    <h3 className="text-lg font-medium">حدث خطأ</h3>
    <p className="text-sm mt-1">{message}</p>
    {onRetry && <button onClick={onRetry} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" aria-label="إعادة المحاولة">إعادة المحاولة</button>}
  </div>
));
ErrorState.displayName = "ErrorState";
