import { Injectable } from '@nestjs/common';
import { Kontakt } from '../interfaces/kontakt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class KontaktService {
    constructor(private prisma: PrismaService) {}

    async createKontakt(kontakt: Kontakt) {
        const contact = await this.prisma.kontakt.create({
            data: {
                profileId: kontakt.profileId,
                email: kontakt.email,
                country: kontakt.country,
                city: kontakt.city,
                plz: kontakt.plz,
                street: kontakt.street,
                telefon: kontakt.telefon,
                website: kontakt.website,
            }
        });
        return contact;
    }
} 
