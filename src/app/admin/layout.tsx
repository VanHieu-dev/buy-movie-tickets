import { NavAdmin } from "@/components/nav-admin";

// app/layout.tsx
export const metadata = {
  title: 'Admin',
  description: 'Admin',
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex h-screen bg-[#f5f5f5] p-5">
    <NavAdmin></NavAdmin>
    {children}
    </div>;
}
