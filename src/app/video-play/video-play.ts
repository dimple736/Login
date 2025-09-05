import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-video-play',
  standalone: true,
  templateUrl: './video-play.html',
  styleUrls: ['./video-play.css']
})
export class VideoPlayComponent {
  videoId!: string;
  safeUrl!: SafeResourceUrl;
  videoUrl!: string; 

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}


ngOnInit() {
    this.videoId = this.route.snapshot.paramMap.get('id')!;
    this.route.queryParamMap.subscribe(params => {
      this.videoUrl = params.get('url') || '';
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.getEmbedUrl(this.videoUrl)
      );
    });
  }

  getEmbedUrl(url: string) {
    if (!url) return '';
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes('youtube.com/watch')) {
      const id = new URL(url).searchParams.get('v');
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes('youtube.com/embed/')) {
      return url; 
    }
    return url; 
  }
}
