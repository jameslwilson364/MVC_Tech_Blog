const router = require('express').Router();
const userRoutes = require('./userRoutes');
const topicsRoutes = require('./topicsRoutes');
const commentsRoutes = require('./commentsRoutes');

router.use('/users', userRoutes);
router.use('/topics', topicsRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;
