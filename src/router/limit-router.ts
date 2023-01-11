import {Router} from "express";
import limitController from "../controller/limit-controller";

export const router = Router();

export const limitRouter = Router();
limitRouter.get("/", limitController.showAll)
limitRouter.post("/", limitController.create)
limitRouter.put("/edit-limit", limitController.update)
limitRouter.delete("/delete/:idLimit", limitController.remove)






