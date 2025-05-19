import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { ResumeService } from './resume.service';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Post()
  create(@Body() createResumeDto: CreateResumeDto) {
    return this.resumeService.create(createResumeDto);
  }

  @Get('')
  findOne() {
    return this.resumeService.findOne();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resumeService.remove(id);
  }
}
