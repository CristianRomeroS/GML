import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    let cc = window as any;
    cc.cookieconsent.initialise({
      "palette": {
        "popup": {
          "background": "#3c404d",
          "text": "#d6d6d6"
        },
        "button": {
          "background": "#8bed4f"
        }
      },
      "theme": "classic",
      "content": {
        "message": "Estamos usando cookies para mejorar experiencia del usuario y obtener datos analíticos. Puedes saber más sobre cookies aqui:",
        "dismiss": "Aceptar",
        "link": "Más info"
      }
    });
  }
  title = 'Gml';
}
