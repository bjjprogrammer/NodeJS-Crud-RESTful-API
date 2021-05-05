import { Controller, Get, Post, Param, Body, Put, Delete,HttpCode } from '@nestjs/common';
import { User } from './models/users';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    getUsers ():User[] {
        return this.usersService.getUsers();
    }

    @Get('/:id')
    getUsersById (@Param('id') id:string):User {
        return this.usersService.getUser(id);
    }

    @Post()
    @HttpCode(201)
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createTask(createUserDto);
    }

    @Put('/:id')
    updateUser(@Param('id') id:string, @Body() createUserDto: CreateUserDto):CreateUserDto{
        return this.usersService.updateTask(id,createUserDto);
    }
    
    @Delete('/:id')
    deleteUser(@Param('id') id:string):void{
        this.usersService.deleteTask(id);
    }
}
