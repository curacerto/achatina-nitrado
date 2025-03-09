import { INitradoClient } from '../../domain/nitrado/nitrado-client.interface';
import { NitrApi } from 'nitrado.js';
import { Service } from '../types';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NitradoClient implements INitradoClient {
  private readonly nitrApi;

  constructor(private readonly configService: ConfigService) {
    this.nitrApi = NitrApi(
      this.configService.getOrThrow<string>('NITRADO_TOKEN'),
    );
  }

  async getServices(): Promise<Service[]> {
    try {
      const { services } = await this.nitrApi.services.getServices();
      return services;
    } catch (error) {
      console.error('Error fetching services from Nitrado:', error);
      throw new Error('Failed to fetch services from Nitrado');
    }
  }
}
