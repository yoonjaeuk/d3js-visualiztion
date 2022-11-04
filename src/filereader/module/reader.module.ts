import { Module } from '@nestjs/common';
import { ReaderService } from '../service/reader.service';
import { ReaderController } from '../controller/reader.controller';

@Module({
  imports: [],
  controllers: [ReaderController],
  providers: [ReaderService],
})
export class ReaderModule {}
