/* eslint-disable @typescript-eslint/class-name-casing */
import { getService } from '@loopback/service-proxy';
import { inject, Provider } from '@loopback/core';
import { NewsDataSource } from '../datasources';

export interface getOwnersResponse {
  result: {
    value: string[];
  };
}
export interface getOwnersRequest {
}

export interface News {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getOwners(args: getOwnersRequest): Promise<getOwnersResponse>;
}

export class NewsProvider implements Provider<News> {
  constructor(
    // news must match the name property in the datasource json file
    @inject('datasources.news')
    protected dataSource: NewsDataSource = new NewsDataSource(),
  ) { }

  value(): Promise<News> {
    return getService(this.dataSource);
  }
}
