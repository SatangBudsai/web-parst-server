import { ReactNode } from "react";
import Meta from "./Meta";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Meta />
      <main>
        <div className="min-h-screen w-screen bg-[#06040A] overflow-hidden relative">
          {children}
        </div>
      </main>
    </>
  );
}
