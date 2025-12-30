import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map-section',
  templateUrl: './map-section.html',
  styleUrls: ['./map-section.scss'],
  standalone: true,
  imports: [
    UpperCasePipe,
    CommonModule
  ]
})
export class MapSectionComponent {
  selectedProvince: string | null = null;

//variabili
// Galleria
  gallery = [
    { src: 'assets/gallery/1.jpg', alt: 'Spiaggia al tramonto' },
    { src: 'assets/gallery/2.jpg', alt: 'Surfboards e palme' },
    { src: 'assets/gallery/3.jpg', alt: 'Centro storico' },
    { src: 'assets/gallery/4.jpg', alt: 'Veduta aerea della costa' }
  ];
  mainIndex = 0;

  // lista città / province (label mostrata, id corrispondente ai gruppi/path nell'SVG)
  cities = [
    { id: 'verona', label: 'Verona' },
    { id: 'vicenza', label: 'Vicenza' },
    { id: 'belluno', label: 'Belluno' },
    { id: 'treviso', label: 'Treviso' },
    { id: 'venezia', label: 'Venezia' },
    { id: 'padova', label: 'Padova' },
    { id: 'rovigo', label: 'Rovigo' }
  ];

//funzioni
  selectImage(i: number) {
    this.mainIndex = i;
  }
  nextImage() {
    this.mainIndex = (this.mainIndex + 1) % this.gallery.length;
  }
  prevImage() {
    this.mainIndex = (this.mainIndex - 1 + this.gallery.length) % this.gallery.length;
  }
  onKeyGallery(ev: KeyboardEvent) {
    if (ev.key === 'ArrowRight') this.nextImage();
    if (ev.key === 'ArrowLeft') this.prevImage();
  }

  selectProvince(province: string): void {
    this.selectedProvince = province;
    console.log('Provincia selezionata:', province);
  }

  viewCities() {
    // logic to show cities
  };

  learnMore() {
    // logic to show more info
  };


  // helper per accessibilità: seleziona con tastiera (Enter / Space)
  onCityKey(event: KeyboardEvent, id: string) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.selectProvince(id);
    }
  }
}
