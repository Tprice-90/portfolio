import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Content } from '../helper-file/content-interface';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  languageList:Content[]

  constructor(private contentService: ContentService, public router: Router) {
    this.languageList = [];
   }

  ngOnInit(): void {
    this.contentService.getLanguageContent().subscribe(language => {
      this.languageList = language;
    });
  }

}
