import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';

const URL = environment.spotifyUrl;

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http:HttpClient) { }

  getQuery(query:string){

    const headers = new HttpHeaders({
      'Authorization':  "Bearer BQAowud1N0AQvi_lOElkov3_juqqcTypEYH8S7zDgZ_g82fVoPOPaele9lkkmoi4tyJ2o9lR3dEvxEOMX3Fnw_siSfwKkDyFUk7ZOk6Ht6aOX-ZwgTQ"
    });

    return this.http.get(`${URL}/${query}`,{headers})
  }

  getNewReleases(){
   

    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((res:any)=>{
        return res.albums.items;
      })
    )
  }

  getArtistas(termino:string){

    return this.getQuery(`search?query=${termino}y&type=artist&market=es&limit=15`).pipe(
      map((res:any)=>{
        return res.artists.items;
      })
    )
  }


  getArtista(id:string){

    return this.getQuery(`artists/${id}`)

  }

  getTopTracks(id:string){

    return this.getQuery(`artists/${id}/top-tracks?market=es`).pipe(
      map((res:any)=>{
        return res.tracks;
      })
    )
  }

}
