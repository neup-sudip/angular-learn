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

  closeConfirmDialog(event: Event) {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.confirmDialogVisible = false;
    }
  }

  confirm() {
    this.confirmDialogVisible = false;
  }
}
