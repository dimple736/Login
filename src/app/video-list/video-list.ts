

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './video-list.html',
  styleUrls: ['./video-list.css']
})
export class VideoListComponent {
  videos = [
    { serialNo: 1, id: 't0Q2otsqC4I?si=g1hnaEfPjIr8RX5g', url: 'https://youtu.be/t0Q2otsqC4I?si=g1hnaEfPjIr8RX5g', about: 'Tom & Jerry Cartoon', image: 'tom-jerry.jpeg' },
    { serialNo: 2, id: 't0Q2otsqC4I?si=g1hnaEfPjIr8RX5g', url: 'https://youtu.be/t0Q2otsqC4I?si=g1hnaEfPjIr8RX5g', about: 'Shinchan Funny Moments', image: 'shinchan.jpeg' },
    { serialNo: 3, id: 'tnNAQ1HcKTU?si=K8DYjT1qYeWmdFte', url: 'https://youtu.be/tnNAQ1HcKTU?si=K8DYjT1qYeWmdFte', about: 'Doraemon Adventures', image: 'doraemon.jpeg' },
    { serialNo: 4, id: 'MS0-dskpOTw?si=XssVpk7n0hAp5qci', url: 'https://youtu.be/MS0-dskpOTw?si=XssVpk7n0hAp5qci', about: 'Pokemon Series', image: 'pokemon.jpeg' },
    { serialNo: 5, id: 'fOPBOE2NUM8?si=R-fkvxjq7KqOLzmU', url: 'https://youtu.be/fOPBOE2NUM8?si=R-fkvxjq7KqOLzmU', about: 'Motu Patlu Comedy', image: 'motu-patlu.jpeg' },
    { serialNo: 6, id: '63O7X1BrH7E?si=uXvxdGGEEPn976vt', url: 'https://youtu.be/63O7X1BrH7E?si=uXvxdGGEEPn976vt', about: 'Oggy and the Cockroaches', image: 'oggy.jpeg' },
    { serialNo: 7, id: 'y45wjCijf5o?si=6FYIXiQVWyfSSEEw', url: 'https://youtu.be/y45wjCijf5o?si=6FYIXiQVWyfSSEEw', about: 'Chhota Bheem Adventures', image: 'chhota-bheem.jpeg' },
    { serialNo: 8, id: '__q-H2ozpVw?si=ZU38hwehiYnfgwJ7', url: 'https://youtu.be/__q-H2ozpVw?si=ZU38hwehiYnfgwJ7', about: 'Ninja Hattori Fun Episodes', image: 'ninja-hattori.jpeg' },
    { serialNo: 9, id: 'pUoDgPCjaSQ?si=vgoXj28M5W0T47AM', url: 'https://youtu.be/pUoDgPCjaSQ?si=vgoXj28M5W0T47AM', about: 'Ben 10 Action Series', image: 'ben10.jpeg' },
    { serialNo: 10, id: 'HOYpAgWPTps?si=NRLWQYbZeMfMRzYO', url: 'https://youtu.be/HOYpAgWPTps?si=NRLWQYbZeMfMRzYO', about: 'Mr. Bean Animated Series', image: 'mrbean.jpeg' },
  ];
  constructor(private router:Router){}

  playVideo(video: any) {
    this.router.navigate(['/dashboard/video-play', video.id], { queryParams: { url: video.url } });
  }
}

