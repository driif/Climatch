import { Injectable } from '@nestjs/common';
import { InterestDto } from '../../dto/interest.dto';
import { RoleDto } from '../../dto/role.dto';
import { INTERESTS } from '../../mocks/interests';
import { ROLES } from '../../mocks/roles';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AdministrationService {
    constructor(private prisma: PrismaService) {}

    async getUsers() {
        const users = await this.prisma.user.findMany();

        return users;
    }

    async getInterests() {
        const interests = await this.prisma.interest.findMany();
        if (!interests || interests.length === 0) {
            INTERESTS.forEach(interest => {
                this.addInterest(interest);
                interests.push(interest);
            });
        }

        return interests;
    }

    async addInterest(interest: InterestDto) {
        const newInterest = await this.prisma.interest.create({
            data: {
                id: interest.id,
                name: interest.name,
                description: interest.description,
                focus: interest.focus                
            }
        })
    }

    async getRoles() {
        const roles = await this.prisma.role.findMany();
        if (!roles || roles.length === 0) {
            ROLES.forEach(role => {
                this.addRole(role);
            });
        }

        return roles;
    }

    async addRole(role: RoleDto) {
        const newRole = await this.prisma.role.create({
            data: {
                name: role.name,
                description: role.description
            }
        })
    }
}
