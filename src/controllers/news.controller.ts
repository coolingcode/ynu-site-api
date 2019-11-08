// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import { inject } from '@loopback/core';
import { get, param, HttpErrors } from '@loopback/rest';

import {
  getOwnersResponse,
  getOwnersRequest,
  News
} from '../services/news.service';

export class NewsController {
  constructor(
    @inject('services.News')
    protected news: News, ) { }

  @get('/getOwners')
  async getOwners(
  ): Promise<getOwnersResponse> {
    return this.news.getOwners(<getOwnersRequest>{});
  }
}
