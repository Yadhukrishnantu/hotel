// const jwt = require('jsonwebtoken')

const db = require('./db')


login = (uname, psw) => {

    // if (acno in userDetails) {
    return db.User.findOne({ username:uname, password: psw }).then(user => {
        if (user) {
            currentuser=user.username
            currentEm=user.Email
           

            // const token = jwt.sign({ currentAcno }, "supersecretkey123")

            return {
                status: true,
                message: 'login success',
                statusCode: 200,
                currentuser,
                currentEm
            

            }
        }
        else {
            return {
                status: false,
                message: 'incorrect account number or password',
                statusCode: 401
            }

        }
    })

}


register = (uname, Email, psw) => {

    
    return db.User.findOne({ Email }).then(user => {
        if (user) {
            return {
                status: false,
                message: 'user already present',
                statusCode: 401
            }
        }
        else {
            // create a new user object in db
            const newuser = new db.User({
                
                username: uname,
                password: psw,
                Email ,
                BookList :[]
               
            })

            // save in db
            newuser.save()

            return {
                status: true,
                message: 'Register success',
                statusCode: 200
            }
        }
    })

}

viewHotels=()=>{
    return db.Hotel.find().then(room=>{
        if(room){
            return{
                status: true,
                statusCode:200,
                data:room
            }
        }else{
            return{
                status:false,
                statusCode:401

            }
        }
    })
}
roomDetails=(hotelId)=>{
    return db.Hotel.findOne({id:hotelId}).then(room=>{
        if(room){
            return {
                status : true,
                statusCode :200,
                data: room
            }
        }
        else{
            return{
                status:false,
                statusCode:401
            }
        }
    })
}
bookHotel=(hotelData,Email)=>{
    return db.User.findOne({Email}).then(room=>{
        if(room){
            room.booklist.push(hotelData)
            room.save()
            return{
                status: true,
                statusCode:200,
                message:"Hotel Booked"
            }
        }else{
            return{
                status:false,
                statusCode:401,

            }
        }
    })
}
bookedroom=(Email)=>{
  return db.User.findOne({Email}).then(room=>{
    if(room){
        return{
            status:true,
            statusCode:200,
            data:room.booklist
        }

    }else{
        return{
            status:true,
            statusCode:401
        }
    }
  })
}

module.exports = {
    register, login , viewHotels, roomDetails , bookHotel , bookedroom
}

