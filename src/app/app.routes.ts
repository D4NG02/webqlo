import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { WhoWeAreComponent } from './routes/who-we-are/who-we-are.component';
import { WhatWeDoComponent } from './routes/what-we-do/what-we-do.component';
import { OurWorkComponent } from './routes/our-work/our-work.component';
import { HeadlinesComponent } from './routes/headlines/headlines.component';
import { ContactUsComponent } from './routes/contact-us/contact-us.component';
import { BrandSocialReportComponent } from './routes/brand-social-report/brand-social-report.component';
import { SocialMediaIntelligenceComponent } from './routes/social-media-intelligence/social-media-intelligence.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'who-we-are', component: WhoWeAreComponent },
    { path: 'what-we-do', component: WhatWeDoComponent },
    { path: 'our-work', component: OurWorkComponent },
    { path: 'headlines', component: HeadlinesComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'brand-social-report', component: BrandSocialReportComponent },
    { path: 'social-media-intelligence', component: SocialMediaIntelligenceComponent },
];
