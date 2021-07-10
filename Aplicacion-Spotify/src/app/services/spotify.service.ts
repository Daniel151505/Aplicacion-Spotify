import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewRealeases() {

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQCyPTLUUwEEgEouNwEyN0VCFqTqUZ-9ccgpPpvaGaJiEiAxktCyUZgBe5dh2Ob9eInsuADnONtdIzrV3uY'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
          .pipe( map((data:any) =>{
            return data.albums.items
          }) )
  }

  getArtista(termino: string) {

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQCyPTLUUwEEgEouNwEyN0VCFqTqUZ-9ccgpPpvaGaJiEiAxktCyUZgBe5dh2Ob9eInsuADnONtdIzrV3uY'
    })

  return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=5&limit=15`, { headers })
          .pipe( map((data: any)=>data.artists.items))

  }

}
