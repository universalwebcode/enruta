export default function Logo({ className = "h-12 w-auto" }) {
  return (
    <img
      src="/assets/logo.png"
      width="226"
      height="123"
      alt="EnRuta. Marcas que viajan lejos."
      className={className}
    />
  );
}
