import express from 'express'
import { deductcoins, getProfile, profileRegister } from '../controllers/profileController.js';


const router = express.Router();

router.post('/register',profileRegister)
router.post('/getprofile',getProfile)
router.post('/deductCoins', deductcoins)


export default router;