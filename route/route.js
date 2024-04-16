import { Router } from "express";
import { checkAuth } from "../middleware/check-auth.js";
import { getAbdm, postAbdm } from "../controllers/abdmControllers.js";

const route = Router();

route.route('/')
    .get(checkAuth, getAbdm)
    .post(checkAuth,postAbdm)

    export default route;