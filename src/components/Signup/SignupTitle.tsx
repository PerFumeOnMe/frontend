export default function SignupTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="gap-[6px]">

      <h1 className="text-display1 whitespace-pre-line">{title}</h1>
      {subtitle && <p className="text-body2 text-grayscale-600 mt-[6px] mb-12">{subtitle}</p>}
    </div>
  );
}