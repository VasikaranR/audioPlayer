import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {



  @Output() searchQuery: EventEmitter<string> = new EventEmitter<string>();

  constructor(private musicListService: AudioService) { }

  ngOnInit(): void {}

  passQueryString(value:any) {
    this.searchQuery.emit(value);
    this.musicListService.clearCache();
  }

}


