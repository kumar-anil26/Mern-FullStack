import React from "react";
import GlassCard from "../components/GlassCard";
import SkillBar from "../components/SkillBar";
import ProjectCard from "../components/ProjectCard";

const DashboardView = ({ skills, projects }) => {
  // Safely extract social links whether they are in user.data or just user
  const socialLinks = {
    linkedin:
      "https://www.linkedin.com/in/anil26a1/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bva0RXd7RRHeD5%2BjgycD1Mg%3D%3D",
    github: "https://github.com/kumar-anil26",
    hackerrank: "https://www.hackerrank.com/profile/anilyahoo876",
    majorProject: "https://my-bloggy-tech-application.vercel.app/",
  };

  // Mock Experience Data - Edit this with your actual work history!
  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Self work.",
      duration: "July 2024 - Present",
      description:
        "Developing scalable web applications using the MERN stack. Designed RESTful APIs and optimized database queries to improve load times.",
    },
    {
      id: 2,
      role: "Syatem Analyst",
      company: "NSEIT, National Stock Exchange",
      duration: "Dec 2022 -  July 2024",
      description:
        "Versatile MERN Full Stack Developer and Systems Analyst. I bridge business logic with technical strategy, architecting scalable end-to-end applications while leading teams to deliver robust, high-impact web solutions.",
    },
  ];

  return (
    <div className="animate-fade-in-up">
      {/* HEADER SECTION */}
      <div className="bg-white/4 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 mb-6 shadow-2xl text-center md:text-left">
        <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-6xl font-black text-white shadow-lg border border-white/20">
          {"Anil Kumar Ray".charAt(0).toUpperCase()}
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white mb-1">ANIL KUMAR RAY</h2>
          <p className="text-gray-300 font-medium mb-4">Full Stack Developer</p>
          <p className="text-sm text-gray-400 max-w-2xl mb-6">
            MERN Stack Developer passionate about turning complex problems into
            clean, efficient web applications. When I'm not building APIs or
            defeating CORS errors, I'm exploring the latest frontend
            technologies.
          </p>

          {/* SOCIAL LINKS SECTION */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all shadow-sm group"
              >
                {/* GitHub Icon */}
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}

            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-[#0a66c2] hover:bg-white/10 transition-all shadow-sm group"
              >
                {/* LinkedIn Icon */}
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            )}

            {socialLinks.hackerrank && (
              <a
                href={socialLinks.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-[#00EA64] hover:bg-white/10 transition-all shadow-sm group"
                title="HackerRank"
              >
                {/* HackerRank / Code Icon */}
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </a>
            )}

            {socialLinks.majorProject && (
              <a
                href={socialLinks.majorProject}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all shadow-sm flex items-center space-x-2 group"
              >
                {/* Vercel / Live Web Icon */}
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <span className="text-xs font-semibold uppercase tracking-wider hidden sm:block">
                  Live Project
                </span>
                
              </a>
            )}
          </div>
        </div>
      </div>

      {/* EXPERIENCE SECTION */}
      <div className="bg-white/4 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-6 shadow-2xl">
        <h3 className="text-xl font-bold text-white mb-6">Experience</h3>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative pl-6 border-l-2 border-indigo-500/50"
            >
              {/* Timeline Dot */}
              <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                <h4 className="text-lg font-semibold text-gray-100">
                  {exp.role}
                </h4>
                <span className="text-xs font-medium text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-md mt-1 sm:mt-0">
                  {exp.duration}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-300 mb-2">
                {exp.company}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* DASHBOARD GRID SECTION (Skills & Projects) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 space-y-6">
          <GlassCard title="Skills">
            <div className="space-y-5">
              {skills?.length > 0 ? (
                skills.map((s) => (
                  <SkillBar
                    key={s._id}
                    name={s.name}
                    percentage={s.percentage}
                    color={s.color}
                  />
                ))
              ) : (
                <p className="text-gray-400 text-sm">No skills added.</p>
              )}
            </div>
          </GlassCard>
        </div>

        <div className="lg:col-span-7">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
            Projects
          </h3>
          <div className="space-y-4">
            {projects?.length > 0 ? (
              projects.map((p) => <ProjectCard key={p._id} {...p} />)
            ) : (
              <p className="text-gray-400 text-sm bg-white/5 border border-white/10 p-4 rounded-xl text-center">
                No projects added.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
