import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-Message',
  templateUrl: './Message.component.html',
  styleUrls: ['./Message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() closePanel = new EventEmitter<void>();
  close() {
    this.closePanel.emit();
  }
}
