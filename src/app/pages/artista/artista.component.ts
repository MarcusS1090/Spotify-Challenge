import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent  {

  artista : any={};
  topTracks:any[] =[]


  loadingArtista:boolean;

  constructor(private spotify:SpotifyService, private router:ActivatedRoute) { 

    this.loadingArtista=true;
    this.router.params.subscribe(params=>{
    this.getArtista(params['id']);
    this.getTopTracks(params['id']);
    })

  }

  getArtista(id:string){

    this.loadingArtista=true;

    this.spotify.getArtista(id).subscribe(res=>{
      console.log(res);

      this.artista = res;

      this.loadingArtista = false;

    })

  }

  getTopTracks(id:string){


    this.spotify.getTopTracks(id).subscribe(res=>{
      console.log(res);
      this.topTracks = res;
    })


}

}
