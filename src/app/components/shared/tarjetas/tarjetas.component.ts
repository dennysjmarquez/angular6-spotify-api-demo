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

    switch (v.type) {

      case 'album':
        window.open(v.external_urls.spotify, '_blank');
        break;
      case 'artist':
        this._router.navigate(['/artist', v.id]);

    }

  }

  ngOnInit() {}

}
