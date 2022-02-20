import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public fixedTop: boolean=false;
  public openMenu: boolean=true;
  @HostListener("window:scroll", []) onWindowScroll() {

    if(document.documentElement.scrollTop>=200){
      this.fixedTop=true;
    }else{
      this.fixedTop=false;
    }
  }
  constructor() { }
  ngOnInit(): void {
  }



}
