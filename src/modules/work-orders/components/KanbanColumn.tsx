import React from "react";
import { WorkOrderStatus } from "../types/work-order.types";

interface KanbanColumnProps {
  status: WorkOrderStatus;
  orders: unknown[];
  onDrop: (status: WorkOrderStatus) => void;
  children: React.ReactNode;
}

const statusLabels: Record<WorkOrderStatus, string> = {
  PENDING: "قيد الانتظار", DIAGNOSING: "قيد التشخيص",
  IN_PROGRESS: "قيد الإصلاح", READY: "جاهز للتسليم", DELIVERED: "تم التسليم",
};

const KanbanColumn: React.FC<KanbanColumnProps> = React.memo(
  ({ status, orders, onDrop, children, ...rest }) => (
    <div
      className="flex flex-col bg-gray-100 dark:bg-gray-800 rounded-lg p-3 min-w-[200px]"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => { e.preventDefault(); onDrop(status); }}
      role="list" {...rest}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-800 dark:text-gray-200">{statusLabels[status]}</h3>
        <span className="bg-gray-300 dark:bg-gray-600 text-xs rounded-full px-2 py-1">{orders.length}</span>
      </div>
      <div className="flex flex-col gap-2 flex-1">{children}</div>
    </div>
  )
);
KanbanColumn.displayName = "KanbanColumn";
export { KanbanColumn };
