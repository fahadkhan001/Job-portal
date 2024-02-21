import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    coins:{
        type:Number,
        default:0
    },
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    mobile:{
        type:String,
        required:[true,"Number is required"]
    },
    Profile_pic:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },
    Linkedin:{
        type:String,

    },
    Github:{
        type:String,
    },
    Resume:{
        type:String,
    },
    schoolcollegetype:{
        type:String,
        default:"college",
        required:[true,"Type is Required"],
    },
    schoolcollegename:{
        type:String,
        required:[true,"Name is required"],

    },
    schoolcollegestartdate:{
        type:Date,
        required:[true,"Start date is required"]
    },
    schoolcollegeenddate:{
        type:Date,
        required:[true,"End date is required"]
    },
    projectname:{
        type:String,
        required:[true,"Name is required"]
    },
    projectdescription:{
        type:String,
        required:[true,"Desc is required"]
    },
    sologroupproject:{
        type:String,
        default:"Solo project",
        required:[true,"PLease specify"]
    },
    projectlink:{
        type:String,
        required:[true,"Link require"]
    },
    internship:{
        type:String,
        default:"Internship",
        required:[true,"Internship is required"]
    },
    companyname:{
        type:String,
        required:[true,"name is required"]
    },
    companyLink:{
        type:String,
        required:[true,"name is required"]
    },
    
    role:{
        type:String,
        required:[true,"role is required"]
    },
    startdate:{
        type:Date,
        required:[true,"Startdate is req"]

    },
    enddate:{
        type:Date,
        required:[true,'enddate is req']
    },
    coverletter:{
        type:String,
        required:[true,"cover letter is required"]
    },


},{timestamp:true}
)

const profileModel = mongoose.model("profile",profileSchema);
export default  profileModel;