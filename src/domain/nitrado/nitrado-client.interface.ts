import { ServiceResponse } from '../../infrastructure';

export interface INitradoClient {
  getServices(): Promise<ServiceResponse>;
}

export const INitradoClient = Symbol('INitradoClient');
