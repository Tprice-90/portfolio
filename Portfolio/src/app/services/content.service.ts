import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from '../helper-file/content-interface';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  getLanguageContent(): Observable<Content[]> {
    return this.http.get<Content[]>("api/langContent");
  }
}
