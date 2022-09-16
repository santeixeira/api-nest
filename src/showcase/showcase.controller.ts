import { Controller, Get, Param } from '@nestjs/common';
import { ShowcaseService } from './showcase.service';
@Controller('showcase')
export class ShowcaseController {
  constructor(
    private readonly showcaseService: ShowcaseService,
  ) {}
  @Get()
  findAll() {
    return this.showcaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.showcaseService.findOne(+id);
  }
}
