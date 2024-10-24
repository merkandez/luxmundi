import  jwt  from "jsonwebtoken";

export const generateJWT = () => {
const data = {
    name: 'Jenny',
    password: 'password'
}
//const token = jwt.sign(data, process.env.JWT_SECRET,{
  //  expiresIn: '5m' //cuanto quieres que dure el JWT
    //})

}

