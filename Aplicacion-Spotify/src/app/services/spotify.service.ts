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
      'Authorization' : 'Bearer BBQCh-LXujdwmWWsUFoyCsTJcu4FCFH_pNJpqHfebj8C-AZX7QUydrLz1kkpN1AvP3oIdztHCY7DL2oyYA2Q'
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
