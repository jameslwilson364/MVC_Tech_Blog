const router = require('express').Router();
const { Topic } = require('../../models');

// get a topic by id
router.get('/:id', async (req, res) => {
  try {
    const topicData = await Topic.findByPk(req.params.id, { 
      include: [{ User}],
    });

    if (!topicData) {
      res.status(404).json({ message: 'No project found with that id!' });
      return;
    }
    res.status(200).json(topicData);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

// post a new topic
router.post('/', async (req, res) => {
  try {
    const topicData = await Topic.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(topicData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a topic
router.delete('/:id', async (req, res) => {
  try {
    const topicData = await Topic.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!topicData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(topicData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
