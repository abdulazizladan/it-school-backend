import { RegisterUserDTO } from "src/auth/dtos/auth.dto";
import { Repository } from "typeorm";
import { User } from "../entitiess/user.entity";


export class UserRepository extends Repository<User>{
    async signUp( authCredentialsDto: RegisterUserDTO) {
        const {email, password, firstName, middleName, lastName} = authCredentialsDto;

        const user = new User();
        user.email = email;
        user.password = password;
        user.firstName = firstName;
        user.middleName = middleName;
        user.lastName = lastName;
        //user.createdAt = Date.now()
        await user.save()
    }
}