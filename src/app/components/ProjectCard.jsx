import Image from "next/image";

export default function ProjectCard({ title, language, description, image }) {
  return (
    <div className="bg-white overflow-hidden shadow-lg border-2 border-dark-brown/10 hover:shadow-2xl hover:scale-105 transition-all duration-300">
      <div className="relative h-48 bg-dark-brown/5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-dark-brown">{title}</h3>
          <span className="text-sm font-semibold text-forest-green bg-forest-green/10 px-3 py-1">
            {language}
          </span>
        </div>
        <p className="text-dark-brown/80 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
