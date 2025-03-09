import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { INitradoClient } from '../nitrado/nitrado-client.interface';
import { ServiceEntity } from './entities/service.entity';

@Injectable()
export class ServiceRepository {
  constructor(
    @Inject(forwardRef(() => INitradoClient))
    private readonly nitradoClient: INitradoClient,
  ) {}

  async getServices(): Promise<ServiceEntity[]> {
    const serviceResponse = await this.nitradoClient.getServices();
    return serviceResponse.data.services;
  }
}
