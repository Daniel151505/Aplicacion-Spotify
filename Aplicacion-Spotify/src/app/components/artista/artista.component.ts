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

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {
    this.router.params.subscribe(params =>{
      this.getArtista(params ['id'])
    })
   }

  ngOnInit(): void {
  }

  getArtista(id: string) {

    this.spotify.getArtista(id)
        .subscribe(artista =>{
          this.artista = artista
        })

  }

}
