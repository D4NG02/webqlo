import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-what-we-do',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './home-what-we-do.component.html',
  styleUrl: './home-what-we-do.component.css'
})
export class HomeWhatWeDoComponent implements OnInit {
  title = 'What We Do'

  cards: { id: number, video: string, title: string, description: string }[] = new Array()

  ngOnInit(): void {
    this.cards[0] = {
      id: 0,
      video: 'https://www.webqlo.com/images/what-we-do/integrated-digital-marketing/Integrated_Digital_Marketing_MASTER_compressed.mp4',
      title: 'Integrated Digital Marketing',
      description: 'We seamlessly integrate  360° channels in your marketing campaigns, ensuring a strategic and smooth customer journey.'
    };
    this.cards[1] = {
      id: 1,
      video: 'https://www.webqlo.com/images/what-we-do/social-media-marketing/Social_Media_Marketing_MASTER_compressed.mp4',
      title: 'Social Media Marketing',
      description: 'We specialize in growing your brand across all social media in Malaysia like Facebook, Instagram, TikTok, and more.'
    };
    this.cards[2] = {
      id: 2,
      video: 'https://www.webqlo.com/images/what-we-do/performance-marketing/Performance_Marketing_Home_MASTER_compressed.mp4',
      title: 'Performance Marketing',
      description: 'Measure every action, from clicks to leads to sales. Achieve remarkable results in your performance marketing journey with us.'
    };
    this.cards[3] = {
      id: 3,
      video: 'https://www.webqlo.com/images/what-we-do/social-media-intelligence/Social_Media_Intelligence_MASTER_compressed.mp4',
      title: 'Social Media Intelligence',
      description: "Unlock the power of data with our proprietary social media analytics. We delve into the 'why' behind the numbers, crafting successful digital marketing solutions for your brand."
    };
    this.cards[4] = {
      id: 4,
      video: 'https://www.webqlo.com/images/what-we-do/website-development/Website_Development_MASTER_compressed.mp4',
      title: 'Web Design & Development',
      description: "Web design company in Malaysia crafting world-class websites for brands. Let us create your stunning, responsive, and SEO-optimized online presence."
    };
    this.cards[5] = {
      id: 5,
      video: 'https://www.webqlo.com/images/what-we-do/big-data-analytics/Big_Data_Analytics_MASTER_compressed.mp4',
      title: 'AI & Data Science',
      description: "Adqlo - Our proprietary AI and data technology provides bespoke business analytics. Tap into our  360° analytics for accelerated growth."
    };
  }
}
