export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white border-b z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-lg">Sakinah Café</span>
        <div className="space-x-6 text-sm">
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/events">Events</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
