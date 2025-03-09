import { INitradoClient } from '../../domain/nitrado/nitrado-client.interface';
import { NitrApi } from 'nitrado.js';
import { ServiceResponse } from '../types';
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

  async getServices(): Promise<ServiceResponse> {
    try {
      const response = await this.nitrApi.path('services').get();
      return response.data;
    } catch (error) {
      console.error('Error fetching services:', error);
      throw new Error('Failed to fetch services');
    }
  }
}
