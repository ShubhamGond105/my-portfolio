export default function DotGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] opacity-40">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: "radial-gradient(#0A0A0A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
