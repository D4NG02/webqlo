import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { RouterLink } from '@angular/router';
import {
  ThemeDirective, CarouselComponent, CarouselIndicatorsComponent,
  CarouselInnerComponent, CarouselItemComponent,
  CarouselCaptionComponent, CarouselControlComponent
} from '@coreui/angular';

@Component({
  imports: [RouterLink, NgClass, NgFor, NgIf, NgOptimizedImage, ThemeDirective, CarouselComponent, CarouselIndicatorsComponent,
    CarouselInnerComponent, CarouselItemComponent, CarouselCaptionComponent, CarouselControlComponent],
  selector: 'app-banner',
  standalone: true,
  templateUrl: './home-banner.component.html'
})
export class HomeBannerComponent implements OnInit {
  slides: { id: number, bannerMobile: string, bannerDesktop: string, title: string[], subtitle: string, aElement: { text: string, href: string } }[] = new Array(4)

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      bannerMobile: "/assets/main_banner_3.webp",
      bannerDesktop: "/assets/main_banner_3.webp",
      title: ['Download Free Report', 'in 60 Secs'],
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      aElement: {
        text: 'Download Now',
        href: '/brand-social-report'
      }
    };
    this.slides[1] = {
      id: 1,
      bannerMobile: "/assets/main_banner_1_mobile.webp",
      bannerDesktop: "/assets/main_banner_1_desktop.webp",
      title: ['360° Data-Driven', 'Digital Marketing Solutions'],
      subtitle: 'We are experts in providing creative solutions backed by data-driven insights.',
      aElement: {
        text: 'Discover More',
        href: '/what-we-do'
      }
    };
    this.slides[2] = {
      id: 2,
      bannerMobile: "/assets/main_banner_2_mobile.webp",
      bannerDesktop: "/assets/main_banner_2_desktop.webp",
      title: ['Social Media', 'Intelligence'],
      subtitle: 'Power your digital marketing effort with Adqlo, our proprietary social media intelligence platform.',
      aElement: {
        text: 'Discover More',
        href: '/social-media-intelligence'
      }
    };
    this.slides[3] = {
      id: 3,
      bannerMobile: "/assets/webqlo-slider-webqlorian.webp",
      bannerDesktop: "/assets/webqlo-slider-webqlorian.webp",
      title: ['Meet the', '#Webqlorians'],
      subtitle: '',
      aElement: {
        text: 'Discover More',
        href: '/who-we-are'
      }
    };
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}