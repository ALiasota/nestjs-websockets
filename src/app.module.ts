import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetawayModule } from './getaway/getaway.module';

@Module({
  imports: [GetawayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
