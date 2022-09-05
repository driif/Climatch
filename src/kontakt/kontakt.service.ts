import { Injectable } from '@nestjs/common';
import { Kontakt } from '../interfaces/kontakt';
import { PrismaService } from 'src/prisma/prisma.service';
import { profile } from 'console';

@Injectable()
export class KontaktService {
    constructor(private prisma: PrismaService) {}

    async createKontakt(profileId: number, kontakt: Kontakt) {
        const contact = await this.prisma.profile.update({
            where: { userId: profileId },
            data: {
                kontakts: {
                    create: {
                        email: kontakt.email,
                        country: kontakt.country,
                        city: kontakt.city,
                        plz: kontakt.plz,
                        street: kontakt.street,
                        telefon: kontakt.telefon,
                        website: kontakt.website,
                    }
                }
            }
        });
        return contact;
    }
} 
