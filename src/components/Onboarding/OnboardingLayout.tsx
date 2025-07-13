import { ReactNode } from "react";

export default function OnboardingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-120 min-w-[375px] mx-auto flex flex-col justify-start min-h-screen bg-white">
      {children}
    </div>
  );
}



