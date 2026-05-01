import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { workOrderRouter } from "@/shared/server/routers/work-orders";
const handler = (req: Request) => fetchRequestHandler({ endpoint: "/api/trpc", req, router: workOrderRouter });
export { handler as GET, handler as POST };
