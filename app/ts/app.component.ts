import {Component} from 'angular2/core';
import {Config} from './config.service';
import {PlaylistComponent} from './playlist.component';
import {Videos} from './videos';

@Component({
  selector: 'my-app',
  templateUrl: 'app/ts/app.component.html',
  directives: [PlaylistComponent]
})

export class AppComponent {
  mainHeading = Config.MAIN_HEADING;
  videos:Array<Videos>;

  constructor() {
    this.videos = [
      new Videos(1, 'Tere Sang Yaara', '5mpq_4rzB1U', 'Best song from movie - Rustom'),
      new Videos(2, 'Kala Chashma', 'k4yXQkG2s1E', 'Best song from movie - Baar Baar Dekho'),
      new Videos(3, 'Kar Gayi Chull', 'NTHz9ephYTw', 'Best song from movie - Kapoor & Sons'),
      new Videos(4, 'Baby Ko Bass Pasand Hai', 'aWMTj-rejvc', 'Best song from movie - Sultan')
    ]
  }
}
