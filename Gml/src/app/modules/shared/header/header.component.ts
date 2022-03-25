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
  public cosa: string=""
  public titulo: string=""
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
    if(this.location.path()=='/calefaccion'){
      this.bgBanner="../../../../assets/images/fondosheader/headercalefaccion.jpg";
      this.titulo="CALEFACCÍON";
      this.cosa="Si su vivienda no tiene instalación de calefacción se la realizamos al mejor precio, asesorándole con el sistema más adecuado para cada caso."
      console.log(this.location.path())
    }else if(this.location.path()=='/calderas'){
      this.bgBanner="../../../../assets/images/fondosheader/headerboiler.jpg";
      this.titulo="CALDERAS";
      this.cosa="Disponemos de un amplio conociemto de calderas, realizamos la instalacion y mantenimientos de distintos modelos"

    }else if(this.location.path()=='/gas'){
      this.bgBanner="../../../../assets/images/fondosheader/headergas.jpg";
      this.titulo="GAS";
      this.cosa="Realizamos cambios de butano y propano a gas natural que es más ecológico y económico"

    }else if(this.location.path()=='/aerotermia'){
      this.bgBanner="../../../../assets/images/fondosheader/headeraero.jpg";
      this.titulo="AEROTERMIA";
      this.cosa="Instalación de suelo radiante, calefaccion, refrigeracion o agua caliente"

    }else if(this.location.path()=='/acs'){
      this.bgBanner="../../../../assets/images/fondosheader/headeracs.jpg";
      this.titulo="AGUA CALIENTE SANITARIA";
      this.cosa="Instalaciones ACS de agua caliente destinadas al consumo humano"

    }else if(this.location.path()=='/saneamientos'){
      this.bgBanner="../../../../assets/images/fondosheader/headersaneamientos.jpg";
      this.titulo="SANEAMIENTOS";
      this.cosa="Te ofrecemos nuestro servicio, contamos con técnicos expertos, autorizados y certificados para hacer cualquier reparación de averías (tuberias, sanitarios, fugas, goteos, sanitarios, radiadores, etc)"

    }else if(this.location.path()=='/contacto'){
      this.bgBanner="../../../../assets/images/fondosheader/headersaneamientos.jpg";
      this.titulo="CONTACTO";
      this.cosa="Si quieres un presupuesto sin compromiso alguno o más información sobre cualquiera de nuestros servicios, no dudes en escribirnos."
    }else{
      this.bgBanner="https://remodela2000.com/wp-content/uploads/2021/04/reformas-en-madrid-1500x750.jpg";
      this.titulo="Instalaciones Siacara";
      this.cosa="Empresa seria y creada por expertos en el sector que cuenta con años de experiencia que buscar ofrecer un servicio eficaz, rápido, personal y económico adaptado para todas las necesidades."
      console.log(this.location.path())
    }
  }



}
