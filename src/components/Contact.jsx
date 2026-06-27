import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="px-20 py-20">
      <h2 className="text-4xl font-bold text-purple-400 mb-10">
        Contact Me
      </h2>

      <div className="bg-slate-900 border border-gray-800 rounded-3xl p-10">

        <div className="space-y-6 text-lg">

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-purple-400" />
            <span>sandip@example.com</span>
          </div>

          <div className="flex items-center gap-4">
            <FaGithub className="text-purple-400" />
            <span>github.com/yourusername</span>
          </div>

          <div className="flex items-center gap-4">
            <FaLinkedin className="text-purple-400" />
            <span>linkedin.com/in/yourusername</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;