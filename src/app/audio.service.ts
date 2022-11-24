import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, publishReplay, refCount } from 'rxjs';
import { MusicList } from './audiolist';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  iTunesUrl = 'https://itunes.apple.com/search'; 
  musicList: Observable<MusicList[]> | undefined;

  constructor(private httpClient: HttpClient) { }

  getMusicList(queryString:any): Observable<MusicList[]> {
      if (!this.musicList) {
        this.musicList = this.httpClient.get<[]>(`${this.iTunesUrl}?term=${queryString}`).pipe(
          publishReplay(1),
          refCount()
        );  
      }
      return this.musicList;
  
  }

  clearCache() {
    this.musicList;
  }


  
}
