import express from 'express'
import handle from 'express-async-handler'
import * as controller from '../controllers/user-controller'

const router = express.Router();

router.route('/')
    .get(handle(controller.teste))

export default router
