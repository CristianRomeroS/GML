import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public fixedTop: boolean=false;
  public openMenu: boolean=true;
  public bgBanner: string=""
  @HostListener("window:scroll", []) onWindowScroll() {

    if(document.documentElement.scrollTop>=200){
      this.fixedTop=true;
    }else{
      this.fixedTop=false;
    }
  }
  constructor(private location: Location) { }
  
  ngOnInit(): void {
    console.log(this.location.path())
    if(this.location.path()=='/galeria'){
      this.bgBanner="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbATFZ56qzHKHeNRxSRAIpOJHB_IEWGXLgbg&usqp=CAU"
      console.log(this.location.path())
    }else{
      this.bgBanner="https://remodela2000.com/wp-content/uploads/2021/04/reformas-en-madrid-1500x750.jpg"
      console.log(this.location.path())
    }
  }



}
