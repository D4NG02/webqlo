import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'app-home-our-client',
  standalone: true,
  imports: [NgFor, RouterLink, ThemeDirective, CarouselComponent,
    CarouselIndicatorsComponent, CarouselInnerComponent,
    CarouselItemComponent, CarouselControlComponent],
  templateUrl: './home-our-client.component.html',
})
export class HomeOurClientComponent {
  title: string = 'our clients'
  imagesDesktop: string[] = [
    'https://www.webqlo.com/images/new_client_logo/phc_log.webp',
    'https://www.webqlo.com/images/new_client_logo/abbott_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/hbct_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/sr_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/spritzer_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/nars_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/shiseido_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/cpb_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/laura_mercier_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/laneige_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/clarins_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/estee_lauder_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/zuellig_pharma_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/mahsing_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/loreal_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/taisho_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/taiko_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/kto_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/taiwan_excellence_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/amway_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/rakuten_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/kkm_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/sunway_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/guocera_logo.webp',
    'https://www.webqlo.com/images/new_client_logo/tiger_logo.webp'
  ]
  imagesMobile: [string[], string[], string[]] = [
    [
      'https://www.webqlo.com/images/new_client_logo/phc_log.webp',
      'https://www.webqlo.com/images/new_client_logo/abbott_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/nars_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/shiseido_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/clarins_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/estee_lauder_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/taisho_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/taiko_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/rakuten_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/kkm_logo.webp',
    ],
    [
      'https://www.webqlo.com/images/new_client_logo/hbct_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/sr_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/cpb_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/laura_mercier_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/zuellig_pharma_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/mahsing_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/kto_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/taiwan_excellence_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/sunway_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/guocera_logo.webp',
    ],
    [
      'https://www.webqlo.com/images/new_client_logo/spritzer_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/amway_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/laneige_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/tiger_logo.webp',
      'https://www.webqlo.com/images/new_client_logo/loreal_logo.webp',
    ]
  ]
}
