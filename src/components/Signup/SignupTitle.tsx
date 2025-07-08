export default function SignupTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="px-6 py-10">
      <h1 className="text-xl font-bold leading-snug whitespace-pre-line">{title}</h1>
      {subtitle && <p className="text-sm text-gray-400 mt-2">{subtitle}</p>}
    </div>
  );
}