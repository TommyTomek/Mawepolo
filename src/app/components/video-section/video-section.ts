import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-section',
  standalone: true,
  templateUrl: './video-section.html',
  styleUrls: ['./video-section.scss'] 
})
export class VideoSectionComponent {
  @Input() videoUrl: string = 'assets/videos/intro.mp4';
}
