import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-liked-songs',
  templateUrl: './liked-songs.component.html',
  styleUrls: ['./liked-songs.component.scss']
})
export class LikedSongsComponent implements OnInit {

  @Input() liked:any;


  player = new Audio;

  constructor() {
    
  }

  ngOnInit(): void {
  
  }

  playSong(audio:any) {
    this.player.src = audio.previewUrl;
    this.player.play();
  }
  stopSong(audio:any) {
    this.player.pause();
  }

}
