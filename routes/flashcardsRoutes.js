const {
  getAllFlashcards,
  getCategoryFlashcard,
  createFlashcard,
  deleteFlashcard,
  changeFlashcard,
} = require("../controllers/flashcardControllers");
const express = require("express");
const router = express.Router();

router.route("/flashcards").get(getAllFlashcards).post(createFlashcard);
router.route("/flashcard/:id").delete(deleteFlashcard).put(changeFlashcard);
router.route("/flashcards/category/:category").get(getCategoryFlashcard);

module.exports = router;
