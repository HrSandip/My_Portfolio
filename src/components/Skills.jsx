import { motion } from "framer-motion";

function Skills() {
  const skills = [
    "Python",
    "SQL",
    "Power BI",
    "Pandas",
    "NumPy",
    "Machine Learning",
    "React",
    "Git",
    "Excel"
  ];

  return (
    <section id="skills" className="px-20 py-20">

      <h2 className="text-4xl font-bold text-purple-400 mb-10">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-slate-900 border border-gray-800 rounded-2xl p-8 glow-hover"
          >
            <h3 className="text-xl font-semibold">
              {skill}
            </h3>
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Skills;