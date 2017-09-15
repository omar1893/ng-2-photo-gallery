import { Injectable } from '@angular/core';

@Injectable()
export class ImageServiceService {

  constructor() { }
  visibleImages = []
  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }
  getImage(id: number){
    return IMAGES.slice(0).find(image => image.id == id)
  }
}

const IMAGES = [
  { "id": 1, "category": "boats", "caption": "View from a boat", "url": "http://images.boats.com/resize/wp/2/files/2016/01/robalo-R160.jpg" },
  { "id": 2, "category": "dogs", "caption": "Cute dogs", "url": "http://fwmail.teenee.com/etc/img3/m230848.jpg" },
  { "id": 3, "category": "boats", "caption": "View from a boat", "url": "http://images.boats.com/resize/wp/2/files/2016/01/robalo-R160.jpg" },
  { "id": 4, "category": "dogs", "caption": "Cute dogs", "url": "http://fwmail.teenee.com/etc/img3/m230848.jpg" },
  { "id": 5, "category": "boats", "caption": "View from a boat", "url": "http://images.boats.com/resize/wp/2/files/2016/01/robalo-R160.jpg" },
  { "id": 6, "category": "dogs", "caption": "Cute dogs", "url": "http://fwmail.teenee.com/etc/img3/m230848.jpg" },
  { "id": 7, "category": "boats", "caption": "View from a boat", "url": "http://images.boats.com/resize/wp/2/files/2016/01/robalo-R160.jpg" },
  { "id": 8, "category": "dogs", "caption": "Cute dogs", "url": "http://fwmail.teenee.com/etc/img3/m230848.jpg" },
  { "id": 9, "category": "boats", "caption": "View from a boat", "url": "http://images.boats.com/resize/wp/2/files/2016/01/robalo-R160.jpg" },
  { "id": 10, "category": "dogs", "caption": "Cute dogs", "url": "http://fwmail.teenee.com/etc/img3/m230848.jpg" }
] 