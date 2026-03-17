'use client'

export default function PrimaryButton({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#4169E1F2] text-white font-semibold px-6 py-3 rounded-lg
      transition-all duration-300 hover:opacity-90 hover:scale-[1.02]
      active:scale-[0.98] ${className}`}
    >
      {text}
    </button>
  );
}