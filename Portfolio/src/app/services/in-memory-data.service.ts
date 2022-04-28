import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content, JobContent } from '../helper-file/content-interface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  LANGCONTENT: Content[] = [
    {
      id: 0,
      contentType: 'language',
      name: 'HTML',
      description: 'The foundation of any website and the first tool in a web developers tool belt.'
    },
    {
      id: 1,
      contentType: 'language',
      name: 'CSS',
      description: 'What good is a website if it has no style? CSS is what really makes the website stand out!'
    },
    {
      id: 2,
      contentType: 'Language',
      name: 'PHP',
      description: 'The un-seen hero of web development, without PHP, there would be no communication with user and client.'
    },
    {
      id: 0,
      contentType: 'language',
      name: 'JavaScript',
      description: 'If you want your website to be fun and interactive, you need JavaScript!'
    }
  ]

  constructor() { }

  createDb() {
    const langContent: Content[] = this.LANGCONTENT;
    return { langContent };
  }
}
