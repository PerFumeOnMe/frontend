export default function Divider() {
  return (
    <div className="flex items-center w-full gap-3">
      <div className="flex-grow h-px bg-grayscale-400" />
      <span className="text-body3 text-grayscale-800">또는</span>
      <div className="flex-grow h-px bg-grayscale-400" />
    </div>
  );
}
