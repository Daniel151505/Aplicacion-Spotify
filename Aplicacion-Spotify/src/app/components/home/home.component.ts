import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

nuevasCanciones: any[] = []
loading:boolean;

  constructor(private spotify: SpotifyService) {

    this.loading = true;

    this.spotify.getNewRealeases()
      .subscribe( (data : any) => {

        setTimeout(() => {
          this.nuevasCanciones = data
          this.loading= false;
        }, 2000);

      });

   }

  ngOnInit(): void {
  }

}
