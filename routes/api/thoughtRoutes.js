const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought
} = require('../../controllers/thoughtController.js');
const {
  createReaction, deleteReaction 
} = require ('../../controllers/reactionController.js')


// /api/courses
router.route('/').get(getThoughts).post(createThought);

// /api/courses/:courseId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

  router
  .route('/:thoughtId/reactions')
  .post(createReaction);

  router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction)

module.exports = router;