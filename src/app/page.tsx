import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">🛠️ FixMaster Pro</h1>
      <p className="text-xl mb-8">نظام إدارة ورشة صيانة أجهزة ذكية</p>
      <Link href="/work-orders" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">الدخول إلى لوحة التحكم</Link>
    </main>
  );
}
