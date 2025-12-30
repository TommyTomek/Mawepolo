import { Component } from '@angular/core';
import { MapSectionComponent } from '../../components/map-section/map-section';
import { VideoSectionComponent } from '../../components/video-section/video-section';
@Component({
  selector: 'app-home',
  imports: [
    VideoSectionComponent,
    MapSectionComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage {

}
