export function Logo({ className = "", size = 120 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Magnifying Glass Handle */}
      <path d="M230 230L270 270" stroke="#10B981" strokeWidth="24" strokeLinecap="round" />

      {/* Magnifying Glass Circle */}
      <circle cx="150" cy="150" r="100" stroke="#10B981" strokeWidth="16" fill="transparent" />

      {/* Ethereum Symbol */}
      <path d="M150 80L100 150L150 180L200 150L150 80Z" fill="#10B981" stroke="#10B981" strokeWidth="2" />
      <path d="M150 180L100 150L150 220L200 150L150 180Z" fill="#0D9488" stroke="#0D9488" strokeWidth="2" />
      <path d="M150 80L150 180" stroke="#0F766E" strokeWidth="2" />
    </svg>
  )
}
