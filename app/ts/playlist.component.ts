import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Videos} from './videos';

@Component({
  selector: 'playlist',
  templateUrl: 'app/ts/playlist.component.html',
  inputs: ['videos']
})

export class PlaylistComponent {
  onSelect(vid:Video) {
    console.log(JSON.stringify(vid))
  }
}
