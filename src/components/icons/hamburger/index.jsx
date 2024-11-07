export default function HamburgerIcon({ className, color = '#000000', onClick }) {
  return (
    <svg
      onClick={onClick}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path d='M4 18L20 18' stroke={color} strokeWidth='2' strokeLinecap='round' />
      <path d='M4 12L20 12' stroke={color} strokeWidth='2' strokeLinecap='round' />
      <path d='M4 6L20 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
    </svg>
  );
}
