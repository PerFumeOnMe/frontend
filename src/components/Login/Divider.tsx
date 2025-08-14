export default function Divider() {
  return (
    <div className="flex items-center w-full gap-3">
      <div className="flex-grow h-px bg-white" />
      <span className="text-body3 text-white">또는</span>
      <div className="flex-grow h-px bg-white" />
    </div>
  );
}
