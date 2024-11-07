import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test-bar',
  templateUrl: './test-bar.component.html',
  styleUrl: './test-bar.component.css'
})
export class TestBarComponent {

  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();

  confirmDialogVisible = false;

  closeSidebar() {
    this.buttonClicked.emit();
  }

  openConfirmDialog() {
    this.confirmDialogVisible = true;
  }
}
