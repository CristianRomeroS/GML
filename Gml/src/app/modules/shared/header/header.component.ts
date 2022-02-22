import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public fixedTop: boolean=false;
  public openMenu: boolean=true;
  public bgBanner: string="https://remodela2000.com/wp-content/uploads/2021/04/reformas-en-madrid-1500x750.jpg"
  @HostListener("window:scroll", []) onWindowScroll() {

    if(document.documentElement.scrollTop>=200){
      this.fixedTop=true;
    }else{
      this.fixedTop=false;
    }
  }
  constructor(private router:Router) { }
  ngOnInit(): void {
    // if(this.router.url.includes('content')){
    //   this.bgBanner=""
    // }
  }



}
