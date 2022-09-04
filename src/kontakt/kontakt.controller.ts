import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Kontakt } from '../interfaces/kontakt';
import { KontaktService } from './kontakt.service';

@Controller('kontakt')
export class KontaktController {
    constructor(private kontaktService: KontaktService) {}

    @Get(':id')
    getKontakts(@Param('id') id: number) {
        console.log(id);
    }

    @Post('create')
    createKontakt(@Body() kontakt: Kontakt) {
        return this.kontaktService.createKontakt(kontakt); 
    }
}
