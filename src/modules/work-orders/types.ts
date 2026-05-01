export enum Status { PENDING="PENDING", DIAGNOSING="DIAGNOSING", IN_PROGRESS="IN_PROGRESS", READY="READY", DELIVERED="DELIVERED" }
export interface WorkOrder { id:string; customerName:string; deviceModel:string; issueDescription:string; status:Status; estimatedCost:number; technicianName:string; toolUsed?:string; createdAt:string; }
