import { Module } from '@nestjs/common';
import { MyGetaway } from './getaway';

@Module({
  imports: [],
  controllers: [],
  providers: [MyGetaway],
})
export class GetawayModule {}
