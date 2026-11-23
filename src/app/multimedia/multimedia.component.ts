import { Component } from '@angular/core';
import { GalleryComponent } from '../galeria/galeria.component';
import { AudioPlayerComponent } from '../audioPlayer/audio.component';
import { VideoPlayerComponent } from '../videoPlayer/video.component';

@Component({
  imports: [GalleryComponent, AudioPlayerComponent, VideoPlayerComponent],
  selector: 'app-multimedia',
  //styleUrl: './inici.component.css',
  templateUrl: './multimedia.component.html',
})
export class MultimediaComponent {}
