import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any = {}
  topTracks: any[] = []
  loadingArtist: boolean | undefined

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {

    this.loadingArtist = true

    this.router.params.subscribe(params =>{
      this.getArtista(params ['id'])
      this.getTopTracks(params ['id'])
    })
   }

  ngOnInit(): void {
  }

  getArtista(id: string) {

    this.loadingArtist = true

    this.spotify.getArtista(id)
        .subscribe((artista:any) =>
          {
            setTimeout(() => {
              this.artista = artista
              this.loadingArtist = false
            }, 2000);
        })

  }

  getTopTracks(id: string) {

    this.spotify.getTopTracks(id)
        .subscribe(topTracks => {
          this.topTracks = topTracks
        })

  }


}
