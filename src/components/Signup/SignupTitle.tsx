export default function SignupTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-[361px] w-full mx-auto flex flex-col gap-[6px]">
      <h1 className="text-title2 whitespace-pre-line">{title}</h1>
      {subtitle && <p className="text-body3 text-grayscale-600 mt-[6px] mb-12">{subtitle}</p>}
    </div>
  );
}