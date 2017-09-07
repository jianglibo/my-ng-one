import { Injectable } from '@angular/core';
import { DtoType } from './data-store';
import { BaseDto } from '../dto/base-dto';
import 'reflect-metadata';
import { DtoDescriptionKey } from '../dto/dto-description';
import { assertNever } from '../util/util';

interface PageNumberSize {number: number; size: number; }
interface PageOffsetLimit {offset: number; limit: number; }
interface PageCursor {cursor: number; }

export type Pager = PageNumberSize | PageOffsetLimit | PageCursor;

function getPagerParams(page: Pager): string {
    let tpage: Pager;
    let pagestr = '';
    if (page) {
      if (page['number'] != null) {
        tpage = page as PageNumberSize;
        pagestr = `page[number]=${tpage.number}&page[size]=${tpage.size}`;
      } else if (page['offset'] != null) {
        tpage = page as PageOffsetLimit;
        pagestr = `page[offset]=${tpage.offset}&page[limit]=${tpage.limit}`;
      } else if (page['cursor'] != null) {
        tpage = page as PageCursor;
        pagestr = `page[cursor]=${tpage.cursor}`;
      } else {
        // throw new Error('Unexpected page format.');
        // silent.
      }
    }
    return pagestr;
}

function getFilterParams(filter: {fname: string, value: any}[]): string {
    let filterstr = '';
    if (filter) {
      filterstr = filter.map((v, i, a) => {
        return `filter[${v.fname}]=${v.value}`;
      }).join('&');
    }
    return filterstr;
}

@Injectable()
export class DatastoreUtilService {

  constructor() { }

  getListUrl<T extends BaseDto> (dtoType: DtoType<T>,
     page: Pager,
     sort: {fname: keyof T, descending: boolean}[],
     filter: {fname: keyof T, value: any}[],
     baseUrl = '/'): string {
    if (!baseUrl.endsWith('/')) {
      baseUrl = baseUrl + '/';
    }
    let result = baseUrl + Reflect.getMetadata(DtoDescriptionKey, dtoType).nameInUrl;

    let tobeappend = getPagerParams(page);
    let filterstr = getFilterParams(filter);
    let sortstr = sort ? sort.map((v, i, a) => {
      return v.descending ? '-' + v.fname : v.fname;
    }).join(',') : '';

    console.log(sortstr);

    if (sortstr) {
      sortstr = 'sort=' + sortstr;
      tobeappend = tobeappend ? tobeappend + '&' + sortstr : sortstr;
    }
    if (filterstr) {
      tobeappend = tobeappend ? tobeappend + '&' + filterstr : filterstr;
    }
    result = tobeappend ? result + '?' + tobeappend : result;
    return result;
  }

  getSingleUrl<T extends BaseDto> (dtoType: DtoType<T>, id: number, baseUrl = '/'): string {
    return this.getListUrl(dtoType, undefined, [], [], baseUrl) + '/' + id;
  }
}
