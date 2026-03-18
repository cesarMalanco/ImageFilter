import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-item',
  standalone: true,
  imports: [],
  templateUrl: './photo-item.html',
  styleUrl: './photo-item.css',
})
export class PhotoItem {
  @Input() item: any;
}
