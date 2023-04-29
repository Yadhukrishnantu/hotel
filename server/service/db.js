// import mongoose
const mongoose=require("mongoose")

// state connection string
mongoose.connect('mongodb://0.0.0.0:27017/bookhotel',{useNewUrlparser:true})



const User=mongoose.model('User',{
    
    username:String,
    password:String,
    Email:String,
    booklist:[] 
})

const Hotel = mongoose.model('Hotel',{
    id: Number,
      apartmentName: String,
      categoryId: String,
      description: String,
      price: Number ,
      available: String,
      image: [],
      rating: Number,
      review: String,
      vendorName:String,
      OptionToCustomiseMeal: String,
    //   In-houseCafes: String,
      mealOptions : String,
      ValueForMoney : String,
      FurnishedRooms : String,
      LaundryServices: String,
      Housekeeping: String,
      GamingZone: String,
      EntertainmentZone: String,
       Wifi: String,
      contact: Number
    
})




module.exports={
    User , Hotel
}