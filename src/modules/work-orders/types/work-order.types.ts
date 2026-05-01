export enum WorkOrderStatus {
  PENDING = "PENDING",
  DIAGNOSING = "DIAGNOSING",
  IN_PROGRESS = "IN_PROGRESS",
  READY = "READY",
  DELIVERED = "DELIVERED",
}

export interface WorkOrder {
  id: string;
  customerName: string;
  deviceModel: string;
  issueDescription: string;
  status: WorkOrderStatus;
  estimatedCost: number;
  technicianName: string;
  toolUsed?: string;
  createdAt: string;
}
