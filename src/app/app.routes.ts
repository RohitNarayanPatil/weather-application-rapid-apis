import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LatlongComponent } from './components/latlong/latlong.component';
import { FivedayrecordComponent } from './components/fivedayrecord/fivedayrecord.component';

export
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'coordinates', component: LatlongComponent },
  { path: 'five', component: FivedayrecordComponent },
  { path: '**', redirectTo: '' }
];


