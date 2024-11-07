import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.css'
})
export class ErrorDialogComponent {
  @Output() close = new EventEmitter<void>(); 

  onClose() {
    this.close.emit();
  }
}
