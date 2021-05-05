import { Injectable } from '@nestjs/common';
import {User} from './models/users';
import {v4 as uuid} from 'uuid'
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UsersService {
    private users: User[] = [];

    getUsers():User[]{
        return this.users;
    }

    getUser(id:string):User{ 
        return this.users.find(user => user.id === id);
    }

    createTask(createUserDto:CreateUserDto):User{
        const {name,last_name} = createUserDto;
        const user:User = {
            id:uuid(),
            name,
            last_name
        }
        this.users.push(user);
        return user;
    }

    updateTask(id:string, createUserDto:CreateUserDto):CreateUserDto{
        const newUser = createUserDto; 
        this.users =  this.users.filter(user => user.id != id)
        const updatedUser:User ={
            id,
            name:newUser.name,
            last_name:newUser.last_name
        }
        this.users.push(updatedUser)
        return updatedUser;
    }

    deleteTask(id:string):void{
        this.users =  this.users.filter(user => user.id != id)
    }

}
