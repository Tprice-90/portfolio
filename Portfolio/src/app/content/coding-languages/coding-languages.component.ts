import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../../helper-file/content-interface';

@Component({
  selector: 'app-coding-languages',
  templateUrl: './coding-languages.component.html',
  styleUrls: ['./coding-languages.component.scss']
})
export class CodingLanguagesComponent implements OnInit {

  @Input() language?: Content
  constructor() { }

  ngOnInit(): void {
  }

}
