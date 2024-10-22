const mongoose = require ("mongoose");
const {Schema}=mongoose;

const userSchema =new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:false,
        unique:false,
        sparse:true,
        default:null
    },googleId:{
        type:String,
        unique:true,
    
    },password:{
      type:String,
      require:false
    },isBlocked:{
        type:Boolean,
        default:false
    },isAdmin:{
        type:Boolean,
        default:false
    },cart:[{
        type:Schema.Types.ObjectId,
        ref:"Cart",
    }],
    wallet:{
        type:Number,
        default:0,
    },wishlist:[{
        type:Schema.Types.ObjectId,
        ref:"Wishlist"
    }],orderHistory:[{
        type:Schema.Types.ObjectId,
        ref:"Order"
    }],
    createdOn:{
        type:Date,
        default:Date.now,
    },
    referalCode:{
        type:String,
    },redeeemed:{
        type:Boolean
    },
    redeeemedUsers:[{
        type:Schema.Types.ObjectId,
        ref:"User"
    }],
    searchHistory:[{
        category:{
            type:Schema.Types.ObjectId,
            ref:"Category"
        },
        brand:{
            type:String
        },searchOn:{
            type:Date,
            default:Date.now
        }
    }]

})


const User=mongoose.model("User",userSchema);

module.exports=User;