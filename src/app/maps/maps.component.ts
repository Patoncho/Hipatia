import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
	mostrar:boolean = false;
	text:string="Mostrar";

  constructor() { }

  ngOnInit() {
  }
toggle(){
if(this.mostrar){ 
	this.mostrar = false;
	this.text="Mostrar";
}
else{this.mostrar=true; this.text="Ocultar";}
	
}
}

