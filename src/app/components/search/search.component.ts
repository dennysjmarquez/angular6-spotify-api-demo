import { Component, Output } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  private _timeWaitSearch: any;

  @Output() searchArtis: any[] = [];
  loading: boolean = false;

  constructor(private _spotifyService: SpotifyService) { }

  search(v: string){

    clearTimeout(this._timeWaitSearch);

    this._timeWaitSearch = setTimeout(() => {

      this.loading = true;

      this._spotifyService.getArtistas(v).subscribe((data: any) => {

        this.searchArtis = data;
        this.loading = false;

      }, error => {

        error.status == 401 || error.status == 400 && (this._spotifyService.tokenRefreshURL());

      });

    }, 500);

  }

}
