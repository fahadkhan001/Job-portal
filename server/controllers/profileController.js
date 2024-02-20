import profileModel from "../models/profileModel.js"
import { errorhandler } from "../utils/error.js";

export const ProfileRegister= async(req,res,next)=>{
    try {
        const newProfile =  new profileModel(req.body);
        await newProfile.save();
        res.status(200).json("Profile Created");
    } catch (error) {
        next(errorhandler(500,"error occured in profile register"))
        error.message
    }
}

export const GetProfile =async(req,res,next)=>{
    try {
        
    } catch (error) {
        
    }
}
export const deleteProfile =async(req,res,next)=>{
    try {
        await profileModel.findOneAndDelete({_id:req.body.profileId})
    } catch (error) {
        
    }
}