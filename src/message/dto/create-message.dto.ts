import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsString()
  content: string;
}
