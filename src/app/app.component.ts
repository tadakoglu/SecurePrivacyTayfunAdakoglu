import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Banner } from './models/banner.model';
import { SecurePrivacyService } from './services/securePrivacy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private securetPrivacyService: SecurePrivacyService) {
  }

  ngOnInit() {
    this.subs.push(this.securetPrivacyService.getBanner().subscribe(bannerResp=>{
      this.banner = bannerResp.body;
    }));    
  }

  title = 'Secure Privacy Project By Tayfun Adakoğlu';

  private subs: Subscription[] = [] // Push subscriptions in this array on ngOnInit and destroy on ngOnDestroy

  private banner = new Banner();
  get getBanner():Banner{
    return this.banner;
  }

  isSettingsContainerOpen = true;
  toggleSettingsContainer(){
    if(this.isSettingsContainerOpen){
      this.isSettingsContainerOpen = false
    }
    else{
      this.isSettingsContainerOpen = true;
    }
  }
  removeStartingDotFromLink(link:string){
    if(!link){
      return;
    }
    if(link[0] == '.')
    {
      return 'https://'+ link.slice(1);
    }
    else{
      return 'https://'+ link
    }
  }


  acceptAll(){
    //No post API methods exists yet
  }
 



}
