import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-musiclist',
  templateUrl: './musiclist.component.html',
  styleUrls: ['./musiclist.component.scss']
})
export class MusiclistComponent implements OnInit {

  @Input() music:any;
  player = new Audio;
  
  constructor() { }

  ngOnInit(): void {}

  playSong(audio:any) {
    this.player.src = audio.previewUrl;
    this.player.play();
  }
  stopSong(audio:any) {
    this.player.pause();
  }

}
