import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProfileDto } from '../dto/profile.dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) {}

    @Get(':id')
    getProfile(@Param('id') id: number) {
        return this.profileService.getProfile(id);
    }

    @Post(':id')
    updateProfile(@Param('id') id: string, @Body() profileDto: ProfileDto) {
        return this.profileService.updateProfile(parseInt(id), profileDto);
    }  
}
