import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessageService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createMessageDto: CreateMessageDto) {
    return this.message.create({
      data: createMessageDto,
    });
  }

  findAll() {
    return this.message.findMany({ orderBy: { createdAt: 'desc' } });
  }

  findOne(id: string) {
    return this.message.findFirst({ where: { id } });
  }
}
