import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReaderModule } from './filereader/module/reader.module';

@Module({
  imports: [ReaderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
