import { Component, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/services/artists.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-artist',
  templateUrl: './single-artist.component.html',
  styleUrls: ['./single-artist.component.css']
})
export class SingleArtistComponent implements OnInit {
  products: any = [];
  artist: any;
  constructor(private artistsService: ArtistsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    this.getProductsByArtist(params['id']);
    this.getArtist(params['id']);

  }

  getProductsByArtist(id: string) {
    this.artistsService.getProductsByArtist(id).subscribe(
      res => {
        this.products = res;
      },
      err => console.error(err)
    )
  }
  getArtist(id: string) {
    this.artistsService.getArtist(id).subscribe(
      res => {
        this.artist = res;
      },
      err => console.error(err)
    )
  }

}
