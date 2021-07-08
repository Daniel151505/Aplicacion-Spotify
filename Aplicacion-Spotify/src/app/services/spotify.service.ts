import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewRealeases() {

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDoy_amKkRCu5zbX6pecR1RvZbzusspU-_75ryhlqoW66ZrA9o9_ZiBrlgzl4E2xjUI0USdIrvNlSOBcow'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })

  }
}
