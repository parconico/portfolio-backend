import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateLanguageDto } from './dto/create-language.dto';

@Injectable()
export class LanguageService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createLanguageDto: CreateLanguageDto) {
    return this.language.create({
      data: createLanguageDto,
    });
  }

  findAll() {
    return this.language.findMany();
  }

  remove(id: string) {
    return this.language.delete({ where: { id } });
  }
}
