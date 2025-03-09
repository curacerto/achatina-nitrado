import { Injectable } from '@nestjs/common';
import { INitradoClient } from '../nitrado/nitrado-client.interface';
import { ServiceEntity } from './entities/service.entity';
import { Inject, forwardRef } from '@nestjs/common';

@Injectable()
export class ServiceRepository {
  constructor(
    @Inject(forwardRef(() => INitradoClient))
    private readonly nitradoClient: INitradoClient,
  ) {}

  async getServices(): Promise<ServiceEntity[]> {
    return await this.nitradoClient.getServices();
  }
}
