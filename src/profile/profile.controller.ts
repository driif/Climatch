import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProfileDto } from 'src/dto/profile.dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) {}

    @Get(':id')
    getProfile(@Param('id') id: number) {
        return this.profileService.getProfile(id);
    }

    @Post('create')
    createProfile(@Body() profileDto: ProfileDto) {
        return this.profileService.createProfile(profileDto);
    }

    @Put(':id')
    updateProfile(@Param('id') id: number, @Body() profileDto: ProfileDto) {
        return profileDto;
    }    
}
