import { Test, TestingModule } from '@nestjs/testing';
import { SyndicatController } from './syndicat.controller';

describe('SyndicatController', () => {
  let controller: SyndicatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SyndicatController],
    }).compile();

    controller = module.get<SyndicatController>(SyndicatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
