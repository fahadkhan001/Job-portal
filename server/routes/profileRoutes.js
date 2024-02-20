import express from 'express'
import { GetProfile, ProfileRegister } from '../controllers/profileController.js';


const router = express.Router();

router.post('/profile-register',ProfileRegister)
router.post('/profile-get',GetProfile)




export default router;