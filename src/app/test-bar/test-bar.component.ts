import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test-bar',
  templateUrl: './test-bar.component.html',
  styleUrl: './test-bar.component.css'
})
export class TestBarComponent {

  @Output() buttonClose: EventEmitter<void> = new EventEmitter<void>();

  confirmDialogVisible = false;

  openConfirmDialog() {
    this.confirmDialogVisible = true;
  }
}
