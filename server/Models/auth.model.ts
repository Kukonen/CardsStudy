const bcrypt = require('bcrypt');
const User = require('../DataBase/User');

interface ITwoTokens {
    accessToken: string;
    refreshToken: string;
}

interface IValidationDiscription {
    email: string;
    password:string;
    name:string;
}

class AuthModel {
    public getRandomString(length:number):string {
        const symbols = "1234567890qwertyuiopasdfghjklzxvbnmQWERTYUIOASDFGHJLZXCVBNM";

        let randomString:string = "";

        for (let i:number = 0; i < length; ++i) {
            const randomIndex:number = Math.floor(Math.random() * symbols.length);
            randomString += symbols[randomIndex];
        }

        return randomString;
    }

    public async getUserByEmail(email:string) {
        const user = await User.findOne({email})

        if (!user) {
            return null;
        }

        return user;
    }

    public async createUser(name: string, email: string, password: string):Promise<boolean | void> {

        const user = await User.findOne({email});

        if (user) {
            return false;
        }

        const id:string = this.getRandomString(8);
        const accessToken:string = this.getAccessToken();
        const refreshToken:string = this.getRefreshToken(); 

        const salt =  await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        await new User({
            id,
            name,
            email,
            password: hashPassword,
            role: 'user',
            accessToken,
            refreshToken,
        }).save()

        return true;
    }

    public async checkAndUpdateToken(accessToken: string, refreshToken: string): Promise<ITwoTokens | Error> {

        let user = await User.findOne({accessToken});
        
        // check access token, if access token overdue and refresh token is actual, then rewrite access token
        if (!user) {
            user = await User.findOne({refreshToken});

            if (user) {
                accessToken = this.getAccessToken();
                user.accessToken = accessToken;
            } else {
                return new Error("User unauthorized");
            }
        }

        const now = new Date().getTime();

        // check access token date
        const userAccessToken = user.accessToken.split('.');
        if (userAccessToken[1] > now) {
            accessToken = this.getAccessToken();
            user.accessToken = accessToken;
        }

        // check refresh token date
        const userRefreshToken = user.refreshToken.split('.');
        if (userRefreshToken[1] > now) {
            refreshToken = this.getAccessToken();
            user.refreshToken = refreshToken;
        }

        await User.updateOne({email: user.emal}, user);

        return {
            accessToken,
            refreshToken
        }
    }

    private getAccessToken():string {
        const now = new Date().getTime();

        const accessToken:string = this.getRandomString(10) + '.' + (now + 3600000); // access token by 1 hour
    
        return accessToken;
    }

    private getRefreshToken():string {
        const now = new Date().getTime();

        const refreshToken:string = this.getRandomString(10) + '.' + (now + 2419200000); // refresh token by 4 weeks
    
        return refreshToken;
    }

    public generateTokens():ITwoTokens {
        const accessToken = this.getAccessToken();
        const refreshToken = this.getRefreshToken();

        return {
            accessToken,
            refreshToken
        }
    }

    public validate(email : string, password ?: string, name ?: string):boolean {
        let status:boolean = true;
        let discription: IValidationDiscription = {
            email: "",
            password: "",
            name: ""
        };

        if (email) {
            
            const emailRegular = new RegExp("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])");

            if(emailRegular.test(email)) {
                discription.email === "email is correct";
            } else {
                discription.email === "email is not correct"
                status = false;
            }
        } else {
            discription.email += "not found email";
            status = false;
        }

        return status;
        // return {
        //     status,
        //     discription
        // }

    }
}

module.exports = new AuthModel();