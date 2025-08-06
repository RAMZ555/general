import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAttributesComponent } from './car-attributes.component';

const routes: Routes = [
  { path: '',
     component: CarAttributesComponent,
     children:[
      { path: 'brands', loadChildren: () => import('./brands/brands.module').then(m => m.BrandsModule) },
      { path: 'types', loadChildren: () => import('./types/types.module').then(m => m.TypesModule) },
      { path: 'models', loadChildren: () => import('./models/models.module').then(m => m.ModelsModule) },
      { path: 'transmissions', loadChildren: () => import('./transmissions/transmissions.module').then(m => m.TransmissionsModule) },
      { path: 'fuel', loadChildren: () => import('./fuel/fuel.module').then(m => m.FuelModule) },
      { path: 'color', loadChildren: () => import('./color/color.module').then(m => m.ColorModule) },
      { path: 'steering', loadChildren: () => import('./steering/steering.module').then(m => m.SteeringModule) },
      { path: 'seats', loadChildren: () => import('./seats/seats.module').then(m => m.SeatsModule) },
      { path: 'cylinders', loadChildren: () => import('./cylinders/cylinders.module').then(m => m.CylindersModule) },
      { path: 'doors', loadChildren: () => import('./doors/doors.module').then(m => m.DoorsModule) },
      { path: 'features', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) }, 
      { path: 'safety-features', loadChildren: () => import('./safety-features/safety-features.module').then(m => m.SafetyFeaturesModule) }
     ]
     }, 
    
              ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarAttributesRoutingModule { }
