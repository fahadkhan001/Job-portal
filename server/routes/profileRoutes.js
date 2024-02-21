import express from 'express'
import { getProfile, profileRegister } from '../controllers/profileController.js';


const router = express.Router();

router.post('/register',profileRegister)
router.post('/getprofile',getProfile)




export default router;