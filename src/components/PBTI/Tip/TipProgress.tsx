export default function TipProgress({ current }: { current: number }) {
  return (
    <div className="flex justify-center gap-2">
      {[1, 2, 3, 4].map((step) => (
        <div
          key={step}
          className={`w-3 h-3 rounded-full ${step === current ? 'bg-main-400' : 'bg-grayscale-400'}`}
        />
      ))}
    </div>
  );
}
