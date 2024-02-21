import profileModel from "../models/profileModel.js";
import { errorhandler } from "../utils/error.js";




export const profileRegister= async(req,res,next)=>{
    try {
        let coinsEarned =0;
        if(req.body.name)coinsEarned+=1;
        if(req.body.mobile)coinsEarned+=15;
        if(req.body.Profile_pic)coinsEarned+=5;
        if(req.body.Linkedin)coinsEarned+=3;
        if(req.body.Github )coinsEarned+=5;
        if(req.body.Resume )coinsEarned+=20;
        if(req.body.schoolcollegetype )coinsEarned+=5;
        if(req.body.schoolcollegename )coinsEarned+=5;
        if(req.body.schoolcollegestartdate )coinsEarned+=2;
        if(req.body.schoolcollegeenddate )coinsEarned+=2;
        if(req.body.projectname )coinsEarned+=5;
        if(req.body.projectdescription )coinsEarned+=6;
        if(req.body.sologroupproject )coinsEarned+=4;
        if(req.body.projectlink )coinsEarned+=10;
        if(req.body.internship )coinsEarned+=5;
        if(req.body.companyname )coinsEarned+=10;
        if(req.body.companyLink )coinsEarned+=10;
        if(req.body.role )coinsEarned+=8;
        if(req.body.startdate )coinsEarned+=2;
        if(req.body.enddate )coinsEarned+=2;
        if(req.body.coverletter )coinsEarned+=20;

        const newProfile =  new profileModel({...req.body,coins:coinsEarned});
        await newProfile.save();

        res.status(200).json({message:"Profile Created", coins:coinsEarned});
    } catch (error) {
        next(errorhandler(500,"error occured in profile register"))
        error.message
    }
}

export const getProfile =async(req,res,next)=>{
    try {
        const allprofile = await profileModel.find({userid:req.body.userid})
        const totalcoins = allprofile.reduce((total,profile)=>total+profile.coins,0)
        res.status(200).json({totalcoins})
    } catch (error) {   
        next(errorhandler(500,"Error in getprofile"));
    }
}

export const deductcoins=async(req,res,next)=>{
    try {
        console.log('Request Body:', req.body);
        const { userid, coinsToDeduct } = req.body;
       
    
    const profile = await profileModel.findOne({userid});

    if(!profile){

        res.status(404).json({message:"Profile not found"});
    } 

    
    profile.coins -= coinsToDeduct
    await profile.save();
    res.status(200).json({ message: 'Coins deducted successfully', coins:profile.coins});

} catch (error) {
    res.status(500).json({ message: 'Internal server error' });

}
}
export const getTotalCoins = async (req, res, next) => {
    try {
      const { userid } = req.body;
      const profile = await profileModel.findOne({ userid });
  
      if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
      }
  
      res.status(200).json({ totalCoins: profile.coins });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
export const deleteProfile =async(req,res,next)=>{
    try {
        await profileModel.findOneAndDelete({_id:req.body.profileId})
    } catch (error) {
        
    }
}