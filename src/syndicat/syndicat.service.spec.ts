import { Test, TestingModule } from '@nestjs/testing';
import { SyndicatService } from './syndicat.service';

describe('SyndicatService', () => {
  let service: SyndicatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SyndicatService],
    }).compile();

    service = module.get<SyndicatService>(SyndicatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
