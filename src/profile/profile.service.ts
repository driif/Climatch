import { Injectable } from '@nestjs/common';
import { ProfileDto } from 'src/dto/profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfileService {
    constructor(private prisma: PrismaService) {}

    async getProfile(profileId: number) {
        const profile = await this.prisma.profile.findUnique({
            where: {
                id: profileId,
            },
        });
        return profile;
    }

    async createProfile(dto: ProfileDto) {
        const profile = await this.prisma.profile.create({
          data: {
            userId: dto.userId,
            firstname: dto.firstname,
            lastname: dto.lastname,
            interests: {connect: dto.interests.map(interest => ({id: interest.id})) || []},
            roles: {connect: dto.roles.map(role => ({id: role.id})) || []},
            bio: dto.bio,
            location: dto.location,
            city: dto.city,
          }
        });    
        return profile;      
    }

    async updateProfile(profileId: number, dto: ProfileDto) {
        const profile = await this.prisma.profile.update({
          data: {
            userId: dto.userId,
            firstname: dto.firstname,
            lastname: dto.lastname,
            interests: { connect: dto.interests },
            roles: { connect: dto.roles },
            bio: dto.bio,
            location: dto.location,
            city: dto.city,
          },
          where: { id: profileId }
        });    
        return profile;
      }
}
