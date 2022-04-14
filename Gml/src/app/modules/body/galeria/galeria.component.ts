import { Component, OnInit } from '@angular/core';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
  
  public images:string[]=[];
  public path:string="";
  public objetosRuta:any={
    "calderas":33,
    "acs":6,
    "aerotermia":39,
    "calefaccion":14,
    "gas":21,
    "saneamientos":21,
    "reforma":12,
    "aireacondicionado":5
  }
  constructor(private location: Location) { }

  ngOnInit(): void {
    this.path=this.location.path();
    for(let i=0;i<this.objetosRuta[`${this.path.substring(this.path.indexOf("/")+1)}`];i++){
      this.images[i]=`assets/images${this.path}${this.path} (${i+1}).jpg`;
    }
  }

}
