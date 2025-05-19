import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
// import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProfileService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  create(createProfileDto: CreateProfileDto) {
    return this.profile.create({
      data: createProfileDto,
    });
  }

  // findAll() {
  //   return `This action returns all profile`;
  // }

  findOne() {
    return this.profile.findFirst();
  }

  // update(id: number, updateProfileDto: UpdateProfileDto) {
  //   return `This action updates a #${id} profile`;
  // }

  remove(id: string) {
    return this.profile.delete({ where: { id } });
  }
}
