import React, { useState } from "react";
import { useDispatch } from "react-redux";
// Import BOTH actions from your slice
import { createProject } from "../features/projects/projectSlice";
import GlassModal from "./GlassModal";
import GlassInput from "./GlassInput";

// 1. ADDED: Accept `editingProject` as a prop
const AddProjectModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  // Empty state template to make resetting easy
  const emptyProject = {
    title: "",
    description: "",
    techStack: "",
    imageUrl: "",
    githubUrl: "",
    liveUrl: "",
  };

  const [projectData, setProjectData] = useState(emptyProject);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // We are CREATING a new project
      await dispatch(createProject(projectData)).unwrap();
     } catch (error) {
      alert("Error saving project: " + error);
    }
  };

  return (
    <GlassModal
      isOpen={isOpen}
      onClose={() => {
        setProjectData(emptyProject); // Clear data if user cancels
        onClose();
      }}
      Add
      Project
    >
      <form onSubmit={handleSubmit}>
        <GlassInput
          label="Title"
          required
          value={projectData.title}
          onChange={(e) =>
            setProjectData({ ...projectData, title: e.target.value })
          }
        />
        <GlassInput
          label="Description"
          required
          value={projectData.description}
          onChange={(e) =>
            setProjectData({ ...projectData, description: e.target.value })
          }
        />
        <GlassInput
          label="Tech Stack (comma separated)"
          required
          value={projectData.techStack}
          onChange={(e) =>
            setProjectData({ ...projectData, techStack: e.target.value })
          }
        />
        <GlassInput
          label="Image URL"
          required
          value={projectData.imageUrl}
          onChange={(e) =>
            setProjectData({ ...projectData, imageUrl: e.target.value })
          }
        />

        <div className="grid grid-cols-2 gap-4">
          <GlassInput
            label="GitHub URL"
            value={projectData.githubUrl}
            onChange={(e) =>
              setProjectData({ ...projectData, githubUrl: e.target.value })
            }
          />
          <GlassInput
            label="Live Demo URL"
            value={projectData.liveUrl}
            onChange={(e) =>
              setProjectData({ ...projectData, liveUrl: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold mt-4 transition-colors shadow-lg"
        >
          {/* 5. ADDED: Dynamic Button Text */}
          Save Project
        </button>
      </form>
    </GlassModal>
  );
};

export default AddProjectModal;
