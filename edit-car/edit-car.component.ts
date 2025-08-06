import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightGallery } from 'lightgallery/lightgallery';
interface Select {
  name: string,
}

@Component({
  selector: 'app-edit-car',
  standalone: false,
  templateUrl: './edit-car.component.html',
  styleUrl: './edit-car.component.css'
})
export class EditCarComponent {
routes=routes
  items!: Select[];//multiselect
  selectedItems!: Select[];//multiselect
  isCheck:boolean[]=[false];
  checkActive:boolean[]=[false];
  toActive:boolean[]=[false];
  isTrash:boolean[]=[false];
  current:number=1
  next(): void {
    if(this.current<9){
    this.current+=1;
    }
  }
  previous():void{
    if(this.current>1){
      this.current-=1
    }
  }
  constructor(private router: Router ){
    this.items = [
      {name: 'Evans Dealer Car Zone',},
      {name: 'Allen Dealer Parking Lot', },
      {name: 'Walker Auto Trade Yard'},
  ];
  this.selectedItems=[
    {name: 'Allen Dealer Parking Lot', }
  ]
  }
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
  };
  private lightGallery!: LightGallery;
  private needRefresh = false;
  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  onInit = (detail: { instance: LightGallery }): void => {
    this.lightGallery = detail.instance;

  };
  directPage():void{
    this.router.navigate([routes.cars])
  }
  check(index:number):void{
    this.isCheck[index]=!this.isCheck[index]
  }
  toggleActive(index:number):void{
    this.toActive[index]=!this.toActive[index]
  }
  currentActive(index:number):void{
    this.checkActive[index]=!this.checkActive[index]
  }
  trash(index:number):void{
    this.isTrash[index]=!this.isTrash[index]
  }
}
