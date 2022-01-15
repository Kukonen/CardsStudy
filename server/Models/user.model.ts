//@ts-ignore
const User = require('../DataBase/User');

class UserModel {
    public static async getUserIdByAccessToken(accessToken: string): Promise<string | Error> {
        const user = await User.findOne({accessToken});

        if (!user) {
            return new Error()
        }

        return user.id;
    }


}

module.exports = UserModel;