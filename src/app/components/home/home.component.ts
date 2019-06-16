import {Component, OnInit, Output} from '@angular/core';
import {SpotifyService} from '../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  @Output() newReleases: any[] = [];
  loading: boolean = false;

  constructor(private _spotifyService: SpotifyService) {

    if (this._spotifyService.checkTokenSpo()) {

      this.loading = true;

      this._spotifyService.getNewReleases().subscribe((data: any) => {

        this.newReleases = data;
        this.loading = false;

      }, error => {

        error.status == 401 && (this._spotifyService.tokenRefreshURL());

      });

    }

  }

  ngOnInit() {



  }

}
