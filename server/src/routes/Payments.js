const express = require("express");
const router = express.Router();
const { capturePayment, verifySignature } = require("../controller/Payments");
const {
  auth,
  isAdmin,
  isInstructor,
  isStudent,
} = require("../middlewares/auth");

router.post("/capturePayment", auth, isStudent, capturePayment);
router.post("/verifySignature", auth, isStudent, verifySignature);

module.exports = router;
