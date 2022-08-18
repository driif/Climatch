import { Controller, Get, Put } from '@nestjs/common';
import { AdministrationService } from './administration.service';

@Controller('administration')
export class AdministrationController {
    constructor(private administrationService: AdministrationService) {}

    @Get('users')
    getUsers() {
        return this.administrationService.getUsers();
    }

    @Get('interests')
    getInterests() {
        return this.administrationService.getInterests();
    }

    @Put('interests')
    putInterests() {
    }    

    @Get('roles')
    getRoles() {
        return this.administrationService.getRoles();
    }

    @Put('roles') 
    putRoles() {
    }
}
