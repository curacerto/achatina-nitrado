export interface INitradoClient {
  getServices(): Promise<any[]>;
}

export const INitradoClient = Symbol('INitradoClient');
