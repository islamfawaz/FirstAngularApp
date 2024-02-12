import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  urlImages: string[] = [
    './../../assets/images/photo2.png',
    './../../assets/images/photo3.png',
    './../../assets/images/photo4.png',
  ];
  isClicked: boolean = false;
  cImage: string = '';
  cIndex: number = 0;

  ifClickIMage(imageUrl: string): void {
    this.cImage = imageUrl;
    this.isClicked = true;
    this.cIndex = this.urlImages.indexOf(this.cImage);
  }
  ifCloseImage(event: any): void {
    if (event.target.classList.contains('overlayImage')) {
      this.isClicked = false;
    }
  }
  closeImage(): void {
    this.isClicked = false;
  }
}
 

