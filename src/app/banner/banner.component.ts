import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { ThemeDirective, CarouselComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent, CarouselCaptionComponent } from '@coreui/angular';

@Component({
  imports: [NgFor, NgOptimizedImage, ThemeDirective, CarouselComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent, CarouselCaptionComponent],
  selector: 'app-banner',
  standalone: true,
  templateUrl: './banner.component.html'
})
export class AppBanner implements OnInit {
  slides: { id: number, src: string, title: string, subtitle: string }[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: "/assets/main_banner_3.webp",
      title: 'First slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    };
    this.slides[1] = {
      id: 1,
      src: "/assets/main_banner_3.webp",
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    };
    this.slides[2] = {
      id: 2,
      src: "/assets/main_banner_3.webp",
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    };
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}