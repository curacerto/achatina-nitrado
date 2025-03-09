import { Injectable } from '@nestjs/common';
import { ServiceRepository } from './service.repository';
import { ServiceEntity } from './entities/service.entity';

@Injectable()
export class ServiceService {
  constructor(private readonly serviceRepository: ServiceRepository) {}

  async getServices(): Promise<ServiceEntity[]> {
    return await this.serviceRepository.getServices();
  }
}
