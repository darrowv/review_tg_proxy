const { Router } = require("express");
const { reviewController } = require("./controllers");

const router = Router();

router.post("/wasabi", reviewController.wasabi);
router.post("/the-loft", reviewController.theLoft);

module.exports = router;
