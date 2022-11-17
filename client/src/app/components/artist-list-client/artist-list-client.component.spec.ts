import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistListClientComponent } from './artist-list-client.component';

describe('ArtistListClientComponent', () => {
  let component: ArtistListClientComponent;
  let fixture: ComponentFixture<ArtistListClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistListClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
