import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightGallery } from 'lightgallery/lightgallery';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/_services/http-request.service';
interface Select {
  name: string,
}
@Component({
  selector: 'app-add-car',
  standalone: false,
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent {
  addCarForm: FormGroup | any;
  routes = routes
  items!: Select[];//multiselect
  selectedItems!: Select[];//multiselect
  isCheck: boolean[] = [false];
  checkActive: boolean[] = [false];
  toActive: boolean[] = [false];
  isTrash: boolean[] = [false];
  current: number = 1
  next(): void {
    if (this.current < 9) {
      this.current += 1;
    }
  }
  previous(): void {
    if (this.current > 1) {
      this.current -= 1
    }
  }
  constructor(private router: Router, private http: HttpRequestService) {
    this.initialLoad();
    this.addCarForm = new FormGroup({
      brand: new FormControl('', [Validators.required]),
      model: new FormControl('', [Validators.required]),
      fuel: new FormControl('', [Validators.required]),
      dailyCharge: new FormControl(0, [Validators.required, Validators.min(0)]),
      weeklyCharge: new FormControl(0, [Validators.required, Validators.min(0)]),
      monthlyCharge: new FormControl(0, [Validators.required, Validators.min(0)]),
      otherDetails: new FormControl('', [Validators.required]),
      mainLocation: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      passengers: new FormControl(1, [Validators.required, Validators.min(1)]),
      carType: new FormControl('', [Validators.required]),
      platNumber: new FormControl('', [Validators.required]),
      yearOfCar: new FormControl('', [Validators.required]),
      transmission: new FormControl('', [Validators.required]),
      noOfAirbags: new FormControl(0, [Validators.required, Validators.min(1)]),
    });
  }

  initialLoad() {
    Promise.all([this.getAccessories()]).then((res: any) => {

    }).catch(err => {

    })
  }

  getAccessories() {
    this.http.getApiCall("accessories").subscribe((res: any) => {

    }, err => {

    })
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

  onSubmit() {
    console.log(this.addCarForm);
  }

  onInit = (detail: { instance: LightGallery }): void => {
    this.lightGallery = detail.instance;

  };
  directPage(): void {
    this.router.navigate([routes.cars])
  }
  check(index: number): void {
    this.isCheck[index] = !this.isCheck[index]
  }
  toggleActive(index: number): void {
    this.toActive[index] = !this.toActive[index]
  }
  currentActive(index: number): void {
    this.checkActive[index] = !this.checkActive[index]
  }
  trash(index: number): void {
    this.isTrash[index] = !this.isTrash[index]
  }
}
