
import mongodb from './mongodb';


export class Users {
    public async createUser(username: string, email: string, password: string) {
        const responseObj = await (await mongodb.connect()).db().collection('users').insertOne({ username: username, email: email, password: password })
        mongodb.close()
        return responseObj
    }
}