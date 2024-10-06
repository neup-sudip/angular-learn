import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrl: './test-data.component.css'
})
export class TestDataComponent implements OnInit {

  ngOnInit(): void {
    
  }

  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();


}
