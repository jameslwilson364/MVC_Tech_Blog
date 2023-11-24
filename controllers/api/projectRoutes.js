const router = require('express').Router();
const { Project, User } = require('../../models');

router.get('/:id', async (req, res) => {
  try {
    const userProject = await Project.findByPk(req.params.id, { 
      include: [{ User}],
    });

    if (!userProject) {
      res.status(404).json({ message: 'No project found with that id!' });
      return;
    }
    res.status(200).json(userProject);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.post('/', async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
