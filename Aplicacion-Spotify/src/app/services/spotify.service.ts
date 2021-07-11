import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query: string) {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQB4mncyVVagOPt4s3_zZc-hfLDzHbjEYTn9QYu8w14kh6SGLrghnLe5T_TUnSR3EZrpuKZITQBT5gHqbwc'
    })

    return this.http.get(url , {headers})

  }

  getNewRealeases() {

    return this.getQuery('browse/new-releases')
               .pipe( map((data: any) => data.albums.items))
  }

  getArtista( termino: string ) {

  return this.getQuery(`search?query=${ termino }&type=artist&offset=5&limit=15`)
              .pipe( map((data: any)=>data.artists.items))

  }

}
