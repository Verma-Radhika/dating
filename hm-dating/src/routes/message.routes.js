import { Router } from "express";
import {addMessage, getMessages} from '../controllers/message.controller.js'
const router = Router()

router.route('/addmsg').post(addMessage)
router.route('/getmsg').get(getMessages)

export default router;