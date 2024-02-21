import express from 'express'
import { deductcoins, getProfile, getTotalCoins, profileRegister } from '../controllers/profileController.js';


const router = express.Router();

router.post('/register',profileRegister)
router.post('/getprofile',getProfile)
router.post('/deductCoins', deductcoins)
router.post('/getcoins',getTotalCoins)


export default router;