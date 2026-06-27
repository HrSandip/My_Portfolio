import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Amazon Sales Dashboard",
      description:
        "Data analysis and visualization using Power BI and Python.",
      tech: "Python • Power BI • Pandas",
    },
    {
      title: "Student Performance Prediction",
      description:
        "Machine learning model to predict student performance.",
      tech: "Python • Scikit-Learn • Pandas",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built using React and Tailwind CSS.",
      tech: "React • Tailwind • Framer Motion",
    },
  ];

  return (
    <section id="projects" className="px-20 py-20">
      <h2 className="text-4xl font-bold text-purple-400 mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-slate-900 border border-gray-800 rounded-3xl p-8 glow-hover"
          >
            <div className="h-40 bg-slate-800 rounded-xl mb-6 flex items-center justify-center">
              Project Image
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <p className="text-purple-400">
              {project.tech}
            </p>

            <button className="mt-6 bg-purple-600 px-5 py-2 rounded-lg">
              View Project
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;