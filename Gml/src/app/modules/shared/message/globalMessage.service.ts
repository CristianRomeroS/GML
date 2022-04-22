import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MessageComponent } from 'src/app/modules/shared/message/message.component';

@Injectable({
  providedIn: 'root'
})
export class globalMessage {
  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay) {}

  public show(message = '') {
    // Returns an OverlayRef (which is a PortalHost)

    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create({
        height:'100%',
        width:'100%',
        panelClass:'custom-overlay-panel2',
        hasBackdrop:true,
        backdropClass: "",
      });
    }

    // Create ComponentPortal that can be attached to a PortalHost
    const messageOverlayPortal = new ComponentPortal(MessageComponent);
    const component = this.overlayRef.attach(messageOverlayPortal); // Attach ComponentPortal to PortalHost
    component.instance.closePanel.subscribe(()=>this.overlayRef.detach()); 
  }

  public hide() {
    if (!!this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}