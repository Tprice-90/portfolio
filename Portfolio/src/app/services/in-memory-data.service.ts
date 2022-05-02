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
      description: 'The foundation of any website and the first tool in a web developers tool belt.',
      imgURL: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg'
    },
    {
      id: 1,
      contentType: 'language',
      name: 'CSS',
      description: 'What good is a website if it has no style? CSS is what really makes the website stand out!',
      imgURL: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png'
    },
    {
      id: 2,
      contentType: 'Language',
      name: 'PHP',
      description: 'The un-seen hero of web development, without PHP, there would be no communication with user and client.',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlNsdRlCQXs6lmAdCbwJtKinEPL29rFqmHzQ&usqp=CAU'
    },
    {
      id: 0,
      contentType: 'language',
      name: 'JavaScript',
      description: 'If you want your website to be fun and interactive, you need JavaScript!',
      imgURL: 'https://cyberhoot.com/wp-content/uploads/2020/07/Free-Courses-to-learn-JavaScript.jpg'
    }
  ]

  constructor() { }

  createDb() {
    const langContent: Content[] = this.LANGCONTENT;
    return { langContent };
  }
}
