export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen overflow-y-auto overflow-x-hidden">
      <div className="w-full sm:max-w-120 sm:min-w-[375px] bg-white min-h-screen mx-auto flex flex-col justify-start">
        {children}
      </div>
    </div>
  );
}
