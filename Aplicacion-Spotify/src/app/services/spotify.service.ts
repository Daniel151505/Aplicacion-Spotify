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
      'Authorization' : 'Bearer BQA3Pu9OBOF9XWTaWaHgzjZ__U60aCKUra-DkRCraw3G7mvNVjAH61m9o0GJCHgFFKYZRHvoaZz9u62DiZs'
    })

    return this.http.get(url , {headers})

  }

  getNewRealeases() {

    return this.getQuery('browse/new-releases')
               .pipe( map((data: any) => data.albums.items))
  }

  getArtistas( termino: string ) {

  return this.getQuery(`search?query=${ termino }&type=artist&offset=5&limit=15`)
              .pipe( map((data: any)=>data.artists.items))

  }

  getArtista( id: string ) {

    return this.getQuery(`artists/${ id }`)
                .pipe( map((data: any)=>data.artists.items))

    }

  getTopTracks( id: string ) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe( map((data: any)=>data.tracks))

    }

}
