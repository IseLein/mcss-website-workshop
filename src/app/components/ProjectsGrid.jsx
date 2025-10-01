import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const projects = [
    {
      title: "Othello Board Game",
      language: "Java",
      description:
        "Classic strategy board game implementation with AI opponent using minimax algorithm. Features a clean GUI and multiple difficulty levels.",
      image: "/projects/othello.png",
    },
    {
      title: "Terminal Word Search",
      language: "Java",
      description:
        "Interactive word search puzzle game that runs entirely in the terminal. Generates random puzzles with customizable grid sizes, difficulty levels, and word lists. Features color-coded hints and a clean ASCII interface for an engaging command-line gaming experience.",
      image: "/projects/word-search.png",
    },
    {
      title: "Terminal Emulator",
      language: "C",
      description:
        "Lightweight terminal emulator built from scratch in C. Supports basic shell commands, ANSI escape sequences, and custom prompt configuration.",
      image: "/projects/terminal.png",
    },
    {
      title: "Robotic Arm Controller",
      language: "Python + Arduino",
      description:
        "IoT-enabled robotic arm with web interface for remote control. Implements inverse kinematics for precise movement and object manipulation.",
      image: "/projects/robot-arm.png",
    },
    {
      title: "Sports Stats Dashboard",
      language: "React + JavaScript",
      description:
        "Real-time sports statistics dashboard aggregating data from multiple APIs. Features live score updates and interactive visualizations.",
      image: "/projects/sports-dashboard.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-dark-brown mb-12 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
