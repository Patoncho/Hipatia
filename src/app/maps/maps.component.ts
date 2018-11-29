import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
	mostrar:boolean = false;

  constructor() { }

  ngOnInit() {
  }
toggle(){
if(this.mostrar){ 
	this.mostrar = false;
}
else{this.mostrar=true;}
	
}
}

