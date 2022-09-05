import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Kontakt } from '../interfaces/kontakt';
import { KontaktService } from './kontakt.service';

@Controller('kontakt')
export class KontaktController {
    constructor(private kontaktService: KontaktService) {}

    @Get(':id')
    getKontakts(@Param('id') id: string) {
        console.log(id);
    }

    @Post(':id')
    createKontakt(@Param('id') id: string, @Body() kontakt: Kontakt) {
        const profileId = parseInt(id)
        return this.kontaktService.createKontakt(profileId, kontakt); 
    }
}
