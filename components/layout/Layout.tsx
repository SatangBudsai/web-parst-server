import { ReactNode } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Meta from "./Meta";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Meta />
      <main className={inter.className}>
        <div className="min-h-screen w-screen bg-[#06040A] overflow-hidden relative">
          {children}
        </div>
      </main>
    </>
  );
}
