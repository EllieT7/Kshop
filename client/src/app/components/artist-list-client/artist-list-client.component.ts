import { Component, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-artist-list-client',
  templateUrl: './artist-list-client.component.html',
  styleUrls: ['./artist-list-client.component.css']
})
export class ArtistListClientComponent implements OnInit {
  artists: any = [];
  constructor(private artistService: ArtistsService) { }

  ngOnInit(): void {
    this.getArtists();
  }

  getArtists(){
    this.artistService.getArtists().subscribe(
      res => {
        this.artists = res;
        console.log(this.artists);

      }, 
      err => console.error(err)
    );
  }

}
