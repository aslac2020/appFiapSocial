import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

@Input() post: any //Pai para Filho
@Output() notify = new EventEmitter(); // Filho para pai

  constructor() { }

  ngOnInit(): void {
  }


}
