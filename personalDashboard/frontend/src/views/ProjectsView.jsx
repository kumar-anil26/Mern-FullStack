import React from "react";
import { X, Pencil } from "lucide-react"; // Imported Pencil icon
import ProjectCard from "../components/ProjectCard";

// Added onEditClick to the props
const ProjectsView = ({ projects, onAddClick}) => {

  return (
    <div className="animate-fade-in-up space-y-6">
      <div className="flex justify-between items-center bg-white/3 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
        <h2 className="text-2xl font-bold text-white">Manage Projects</h2>
        <button
          onClick={onAddClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-bold text-sm"
        >
          + Add Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="relative group">
            <ProjectCard {...project} />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsView;
