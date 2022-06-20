const { Router } = require("express");
const {
  petGet,
  petPut,
  petPost,
  petPatch,
  petDelete,
} = require("../controllers/pets");

const router = Router();

router.get("/", petGet);

router.put("/", petPut);

router.post("/", petPost);

router.patch("/", petPatch);

router.delete("/", petDelete);

module.exports = router;
