import { Module } from '@nestjs/common';
import { SyndicatController } from './syndicat.controller';
import { SyndicatService } from './syndicat.service';

@Module({
  controllers: [SyndicatController],
  providers: [SyndicatService]
})
export class SyndicatModule {}
