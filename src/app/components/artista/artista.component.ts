import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { PreviousRouteService } from '../services/previous-route.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {

  artista: any = {};
  loading: boolean = true;
  topTracks: any[] = [];

  constructor(private _router: Router, private _PreviousRouteService: PreviousRouteService, private _activatedRoute: ActivatedRoute, private _spotifyService: SpotifyService) {

    this._activatedRoute.params.subscribe(data => {

      this.getArtista(data.id);
      this.getTopTracks(data.id);

    });

  }

  regresar(){

    this._router.navigate([this._PreviousRouteService.previousUrl]);

  }

  getArtista(id: string){

    this._spotifyService.getArtista(id).subscribe(data => {

      this.artista = data;
      this.loading = false;

    })

  }

  getTopTracks(id: string){

    this._spotifyService.getTopTracks(id).pipe(map((data: any) => {

      return data.tracks.sort((a, b) =>{

        if(a.album.name > b.album.name){

          return 1;

        }else if(a.album.name < b.album.name){

          return -1

        }else if(a.album.name == b.album.name){

          return 0;

        }


      })

    })).subscribe(data => {

      this.topTracks = data;

    });

  }

}
