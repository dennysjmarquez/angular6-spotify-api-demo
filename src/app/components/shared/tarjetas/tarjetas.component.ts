import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {

  @Input() tarjetaData: any = [];

  constructor(private _router: Router) {}

  view(v: any){

    let id = v.id;

    switch (v.type) {

      case 'album':
        // this._router.navigate(['/artist', id]);
        break;
      case 'artist':
        this._router.navigate(['/artist', id]);

    }

  }

  ngOnInit() {}

}
