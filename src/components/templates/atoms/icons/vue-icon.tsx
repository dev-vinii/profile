interface VueIconProps {
  size?: number;
  color?: string;
}

export function VueIcon({ size = 48, color = "#4FC08D" }: VueIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      fill={color}
    >
      <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78ZM12 14.08 5.16 2.23h4.43L12 6.41l2.41-4.18h4.43Z"></path>
    </svg>
  );
}
