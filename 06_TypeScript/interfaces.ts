// In Memory Db 
// save('user-1',{fname,lname})
// HashMap (key ,value)
// string , string

// 1{fname,lname,email,contact:{mobile},address:{street,pin,country}}



interface User {
    fname: string,
    lname: string,
    email: string,
    contact: {
        mobile: string
    }
    address: {
        street: number,
        pin: number,
        country: string
    }
}
class InMemoryDB {
    private _db: Map<string, User>
    constructor() { }
}