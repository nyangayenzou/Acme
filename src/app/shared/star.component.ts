import { Component, Input, OnChanges} from "@angular/core";

@Component({
  selector:'pm-star',
  templateUrl:'./star.component.html',
  styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
  @Input() rating:number=0;
  cropwidth: number = 75;

  ngOnChanges(): void {
      this.cropwidth = this.rating * 75/5;
  }
}
