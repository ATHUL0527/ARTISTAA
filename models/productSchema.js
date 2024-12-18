const mongoose=require("mongoose");
const {Schema}=mongoose;

const productSchema= new Schema({
    productName:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },salePrice:{
        type:Number,
        required:true
    },productOffer:{
        type:Number,
        default:0,
    },
    quantity:{
        type:Number,
        default:0
    },
    reorderLevel:{ 
        type: Number, 
        default: 10 },
    color:{
        type:String,
       
    },
    productImage:{
        type:[String],
        required:true
    },
    isBlocked:{
        type:Boolean,
        default:false
    },status:{
        type:String,
        enum:["Available","out of stock","Discountinued"],
        required:true,
        default:"Available"
    },
},{timestamps:true});

module.exports=mongoose.model("Product",productSchema);

