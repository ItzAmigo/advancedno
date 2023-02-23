import Router from "express";
import PostController from "../controllers/PostController.js";
const router = new Router();

router.post("/posts", PostController.create);
router.get("/posts", PostController.getAll);
router.get("/posts/:name", PostController.getOne);
router.put("/posts", PostController.update);
router.delete("/posts/:name", PostController.delete);
router.delete("/posts/", PostController.deleteAll);

export default router;
