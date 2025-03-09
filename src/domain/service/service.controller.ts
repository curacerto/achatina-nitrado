import { Controller, Get, UseGuards } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ApiKeyGuard } from '../../infrastructure/guard/api-key.guard';

@Controller('service')
@UseGuards(ApiKeyGuard)
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get()
  async getServices() {
    return await this.serviceService.getServices();
  }
}
