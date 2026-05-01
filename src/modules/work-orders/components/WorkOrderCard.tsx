import React from "react";
import { WorkOrder } from "../types/work-order.types";

interface WorkOrderCardProps { order: WorkOrder; onDragStart: (orderId: string) => void; }

const WorkOrderCard: React.FC<WorkOrderCardProps> = React.memo(({ order, onDragStart, ...rest }) => (
  <div
    className="bg-white dark:bg-gray-700 rounded-md p-3 shadow-sm cursor-grab active:cursor-grabbing border border-gray-200 dark:border-gray-600"
    draggable onDragStart={(e) => { e.dataTransfer.setData("text/plain", order.id); onDragStart(order.id); }}
    role="listitem" tabIndex={0} aria-grabbed={false} {...rest}
  >
    <p className="font-medium text-sm text-gray-800 dark:text-gray-100">{order.customerName}</p>
    <p className="text-xs text-gray-500 dark:text-gray-400">{order.deviceModel}</p>
    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">{order.issueDescription}</p>
    <div className="flex justify-between items-center mt-2">
      <span className="text-xs font-mono bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-0.5 rounded">{order.estimatedCost} ريال</span>
      <span className="text-xs text-gray-400">{order.technicianName}</span>
    </div>
    {order.toolUsed && <div className="mt-1 text-xs text-purple-600 dark:text-purple-300">🛠️ {order.toolUsed}</div>}
  </div>
));
WorkOrderCard.displayName = "WorkOrderCard";
export { WorkOrderCard };
