
import jwt from 'jsonwebtoken';

const secretKey=process.env.JWT_SECRET || "default_key";

export function generateToken(userID:number,email:string):string{
    return jwt.sign(
        {userID,email},
        secretKey,
        {expiresIn: '24h'}
    );
}

export function verifyToken(token : string):{userID:number,email:String} | null{
    try{
        const decoded=jwt.verify(token,secretKey) as {userID:number,email:string};

        return decoded;
    } 

    catch(error){
        return null;
    }
}