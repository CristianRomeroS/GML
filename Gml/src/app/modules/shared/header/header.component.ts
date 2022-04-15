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
      this.cosa=`¿Desea cambiar su antiguo radiador? 
      Nosotros nos encargamos de la sustitución de uno nuevo. Realizamos instalaciones en reformas y obra nueva, también reparamos cualquier fuga que pueda tener su instalación. Nosotros también instalamos suelo radiante, el cual está ganando más popularidad en estos últimos años, nos encargamos del dimensionamiento y su instalación.`
      console.log(this.location.path())
    }else if(this.location.path()=='/calderas'){
      this.bgBanner="../../../../assets/images/fondosheader/headerboiler.jpg";
      this.titulo="CALDERAS";
      this.cosa="Disponemos de un amplio conocimiento de calderas, realizamos la instalación y mantenimiento de distintos modelos."

    }else if(this.location.path()=='/gas'){
      this.bgBanner="../../../../assets/images/fondosheader/headergas.jpg";
      this.titulo="GAS";
      this.cosa="Realizamos instalaciones de gas para su vivienda y resolvemos cualquier tipo de anomalía que tenga su instalación. Trabajo realizado por personal cualificado y certificado."

    }else if(this.location.path()=='/aerotermia'){
      this.bgBanner="../../../../assets/images/fondosheader/headeraero.jpg";
      this.titulo="AEROTERMIA";
      this.cosa="Instalación de suelo radiante, calefacción, refrigeración o agua caliente."

    }else if(this.location.path()=='/acs'){
      this.bgBanner="../../../../assets/images/fondosheader/headeracs.jpg";
      this.titulo="AGUA CALIENTE SANITARIA";
      this.cosa="Instalaciones ACS de agua caliente destinadas al consumo humano."

    }else if(this.location.path()=='/saneamientos'){
      this.bgBanner="../../../../assets/images/fondosheader/headersaneamientos.jpg";
      this.titulo="SANEAMIENTOS";
      this.cosa="Servicio de reparación inmediata de cualquier tipo de avería, fuga, atasco, grifería e instalación de aparatos, no dude en consultarnos."

    }else if(this.location.path()=='/reforma'){
      this.bgBanner="../../../../assets/images/fondosheader/headeralba.jpg";
      this.titulo="ALBAÑILERIA";
      this.cosa="Contamos con personal altamente cualificado y con amplia experiencia en el sector para garantizar un trabajo bien hecho."

    }else if(this.location.path()=='/aireacondicionado'){
        this.bgBanner="../../../../assets/images/fondosheader/headeraire2.jpg";
        this.titulo="AIRE ACONDICIONADO";
        this.cosa="Instalación, cambio o mantenimiento de maquinas de aire acondicionado."

    }else if(this.location.path()=='/contacto'){
      this.bgBanner="../../../../assets/images/fondosheader/headerform.jpg";
      this.titulo="CONTACTO";
      this.cosa="Si quieres un presupuesto sin compromiso o simplemente más información sobre cualquiera de nuestros servicios, no dudes en escribirnos."

    }else{
      this.bgBanner="https://remodela2000.com/wp-content/uploads/2021/04/reformas-en-madrid-1500x750.jpg";
      this.titulo="Instalaciones Siacara";
      this.cosa="Empresa seria y creada por expertos en el sector que cuenta con años de experiencia que buscar ofrecer un servicio eficaz, rápido, personal y económico adaptado para todas las necesidades."
      console.log(this.location.path())
    }
  }



}
