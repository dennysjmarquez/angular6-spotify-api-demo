import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './components/services/spotify.service';
import { ActivatedRoute, Router, RoutesRecognized} from '@angular/router';
import { PreviousRouteService} from './components/services/previous-route.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private _activatedRoute: ActivatedRoute, private _location: Location, private _previousRouteService: PreviousRouteService, private _router: Router, private _SpotifyService: SpotifyService){

    this._previousRouteService.registerUrls();

    function getHashParams(q) {
      let hashParams = {}, e, r = /([^&;=]+)=?([^&;]*)/g;

      while (e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      return hashParams;
    }

    this._router.events.subscribe(data => {

      if (data instanceof RoutesRecognized) {

        const URL = this._location.path();

        if (URL.split('=')[0] === 'access_token') {

          let param = getHashParams(URL);
          const NewToen = param['access_token'];
          NewToen && (sessionStorage.setItem('token', NewToen), this._SpotifyService.upDateToken());

        }

      }

    });

  }

  ngOnInit() {

  }

}
