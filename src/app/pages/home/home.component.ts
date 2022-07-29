import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any[] = [];
  loading:boolean;
  error:boolean;

  constructor(private spotify : SpotifyService) {
    this.loading = true;
    this.error = false;
  

    this.spotify.getNewReleases().subscribe({

      next: (res)=>{
        this.nuevasCanciones = res;
        this.loading = false;
      },
      error:err =>{
        this.loading = false;
        this.error = true;

        Swal.fire({
          icon :"error",
          title : "ERROR",
          text : err.error.error.message,
          allowOutsideClick: false 

        })
      }
    })


   }

  ngOnInit() {
  }

}
