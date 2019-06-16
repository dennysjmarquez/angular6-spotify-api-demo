import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  public credentials = {

    clientId: 'd57de5a1be5941e5bf26c9d3ce37ffa2',
    clientSecret: '825d9a8f767a49dfb6bd7b2ca4cb51f9',
    accessToken: ''

  };

  public poolURlS = {

    authorize: 'https://accounts.spotify.com/es-ES/authorize?client_id=' +
      this.credentials.clientId + '&response_type=token' +
      '&redirect_uri=' + encodeURIComponent('/#/') +
      '&expires_in=3600',
    refreshaAcessToken: 'https://accounts.spotify.com/api/token'


  };

  constructor(private _httpClient: HttpClient) {

    this.upDateToken()

  }

  upDateToken(){
    this.credentials.accessToken = sessionStorage.getItem('token') || '';
  }

  getInfo(query: string){

    const URL = `https://api.spotify.com/v1/${query}`;
    const HEADER = {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.credentials.accessToken})};

    return this._httpClient.get(URL, HEADER);

  }

  checkTokenSpoLogin() {

    this.checkTokenSpo() || (sessionStorage.setItem('refererURL', location.href), window.location.href = this.poolURlS.authorize);

  }

  checkTokenSpo() {

    return !!this.credentials.accessToken;

  }

  tokenRefreshURL() {

    this.checkTokenSpo() && alert('Expiro la sesión');

    this.credentials.accessToken = '';
    sessionStorage.removeItem('token');
    this.checkTokenSpoLogin();

  }

  getNewReleases() {

    return this.getInfo('browse/new-releases?limit=50&offset=0').pipe(map((data: any) => data.albums.items));

  }

  getArtistas(v: string) {

      return this.getInfo(`search?q=${v}&type=artist&limit=50&offset=0`).pipe(map((data: any) => data.artists.items));

  }

  getArtista(v: string) {

      return this.getInfo(`artists/${v}`);

  }

  getTopTracks(v: string) {

      return this.getInfo(`artists/${v}/top-tracks?country=us`);

  }

}
