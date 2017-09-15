import { Component, OnInit, OnChanges,Input} from '@angular/core';
import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {
  title = 'Recent Photos'
  @Input() filterBy?: string = 'all'
  visibleImages: any[] = [];

  constructor(private imageService: ImageServiceService) {
    this.visibleImages = this.imageService.getImages();
  }

  ngOnInit() {
  }

  ngOnChanges(){
    this.visibleImages = this.imageService.getImages()
  }
}
