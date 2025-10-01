export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-cream border-b-2 border-dark-brown z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-dark-brown hover:text-forest-green transition-colors">
          DI
        </a>
        <div className="flex gap-8">
          <a href="#about" className="text-dark-brown hover:text-forest-green transition-colors font-medium">
            About
          </a>
          <a href="#projects" className="text-dark-brown hover:text-forest-green transition-colors font-medium">
            Projects
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-dark-brown hover:text-forest-green transition-colors font-medium">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
