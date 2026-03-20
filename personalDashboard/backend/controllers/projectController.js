const Project = require("../models/Project");

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({
      createdAt: -1,
    });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create({ ...req.body });
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
