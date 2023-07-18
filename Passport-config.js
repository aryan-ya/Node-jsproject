const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")


function initialize(passport){
    //function to authenticate
    const authenticateUsers = async(email , password , done) => {
        //get users by email
    const user = getUserByEmail(email)
    if(user == null ){
        return  done(null , false, {message: "No users found with that email"})
    }
    }

}