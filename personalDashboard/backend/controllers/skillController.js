const Skill = require("../models/Skill");

exports.getSkills = async (req, res) => {
  try {
    // Fetches absolutely every skill in the database
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createSkill = async (req, res) => {
  try {
    const skill = await Skill.create({ ...req.body });
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
