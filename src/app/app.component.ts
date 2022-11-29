import { Component } from '@angular/core';
import { AudioService } from './audio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'audioPlayer';

  music:any
  liked:any
  constructor(private musicListService: AudioService) { }

  ngOnInit(): void {}

  searchSong(value:any) {
    this.musicListService.getMusicList(value).subscribe(music=> {
      this.music = music;
    })

  }


}
