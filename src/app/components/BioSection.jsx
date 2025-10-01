export default function BioSection() {
  return (
    <section className="max-w-4xl mx-auto px-8 py-20 border-t-2 border-dark-brown">
      <p className="text-lg md:text-xl text-dark-brown leading-relaxed mb-8">
        I'm Daniel Ise, a computer science student at the University of
        Toronto with a deep passion for robotics and a love for sports.
        Whether I'm debugging code, building autonomous systems, or shooting
        hoops on the basketball court, I thrive on challenges that push me to
        think creatively. When I'm not coding, you'll find me watching cricket
        matches or working on my latest side project. I'm currently seeking
        opportunities to apply my skills in software engineering and
        contribute to innovative teams.
      </p>
      <div className="flex gap-4 flex-wrap">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-forest-green text-cream px-8 py-4 font-semibold text-lg hover:bg-dark-brown transition-colors duration-300"
        >
          View Resume
        </a>
        <a
          href="https://github.com/sohamparekh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-dark-brown text-cream px-8 py-4 font-semibold text-lg hover:bg-forest-green transition-colors duration-300"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/sohamparekh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-dark-brown text-cream px-8 py-4 font-semibold text-lg hover:bg-forest-green transition-colors duration-300"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
