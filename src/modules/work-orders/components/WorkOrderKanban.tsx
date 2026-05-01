"use client";
import React, { useCallback, useMemo, useState, useEffect } from "react";
import { WorkOrder, WorkOrderStatus } from "../types/work-order.types";
import { KanbanColumn } from "./KanbanColumn";
import { WorkOrderCard } from "./WorkOrderCard";
import { SkeletonKanban } from "./SkeletonKanban";
import { EmptyState } from "./EmptyState";
import { ErrorState } from "./ErrorState";

interface WorkOrderKanbanProps {
  orders: WorkOrder[];
  isLoading: boolean;
  errorMessage?: string;
  onRetry?: () => void;
  onStatusChange: (orderId: string, newStatus: WorkOrderStatus) => void;
}

const WorkOrderKanban: React.FC<WorkOrderKanbanProps> = React.memo(
  ({ orders, isLoading, errorMessage, onRetry, onStatusChange }) => {
    const [localOrders, setLocalOrders] = useState<WorkOrder[]>(orders);
    const [draggedOrderId, setDraggedOrderId] = useState<string | null>(null);

    useEffect(() => { setLocalOrders(orders); }, [orders]);

    const groupedOrders = useMemo(() => {
      const groups: Record<WorkOrderStatus, WorkOrder[]> = {
        PENDING: [], DIAGNOSING: [], IN_PROGRESS: [], READY: [], DELIVERED: [],
      };
      localOrders.forEach((order) => { if (groups[order.status]) groups[order.status].push(order); });
      return groups;
    }, [localOrders]);

    const handleDragStart = useCallback((orderId: string) => setDraggedOrderId(orderId), []);
    const handleDrop = useCallback((newStatus: WorkOrderStatus) => {
      if (!draggedOrderId) return;
      setLocalOrders((prev) => prev.map((o) => o.id === draggedOrderId ? { ...o, status: newStatus } : o));
      onStatusChange(draggedOrderId, newStatus);
      setDraggedOrderId(null);
    }, [draggedOrderId, onStatusChange]);

    if (isLoading && localOrders.length === 0) return (
      <div role="status" aria-label="جارٍ تحميل أوامر الشغل" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, i) => <SkeletonKanban key={i} />)}
      </div>
    );
    if (errorMessage && !isLoading) return <div role="alert"><ErrorState message={errorMessage} onRetry={onRetry} /></div>;
    if (!isLoading && localOrders.length === 0) return <EmptyState title="لا توجد أوامر شغل" description="ابدأ بإضافة أول أمر شغل لعرضه هنا." />;

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 min-h-[500px]" role="region" aria-label="لوحة أوامر الشغل">
        {Object.entries(groupedOrders).map(([status, statusOrders]) => (
          <KanbanColumn key={status} status={status as WorkOrderStatus} orders={statusOrders} onDrop={handleDrop}>
            {statusOrders.map((order) => <WorkOrderCard key={order.id} order={order} onDragStart={handleDragStart} />)}
          </KanbanColumn>
        ))}
      </div>
    );
  }
);

WorkOrderKanban.displayName = "WorkOrderKanban";
export { WorkOrderKanban };
export type { WorkOrderKanbanProps };
