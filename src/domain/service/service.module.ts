import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { NitradoClient } from '../../infrastructure';
import { ServiceController } from './service.controller';
import { ServiceRepository } from './service.repository';
import { INitradoClient } from '../nitrado/nitrado-client.interface';

@Module({
  imports: [],
  controllers: [ServiceController],
  providers: [
    {
      provide: INitradoClient,
      useClass: NitradoClient,
    },
    ServiceRepository,
    ServiceService,
  ],
  exports: [ServiceService],
})
export class ServiceModule {}
