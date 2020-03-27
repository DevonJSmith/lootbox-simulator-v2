import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LootboxHomeComponent } from './lootbox-home/lootbox-home.component';
import { LandingSeedGeneratorComponent } from './landing-seed-generator/landing-seed-generator.component';


const routes: Routes = [
  {
    path: '',
    component: LandingSeedGeneratorComponent
  },
  {
    path: 'lootbox/:seed',
    component: LootboxHomeComponent
  },
  {
    path: 'lootbox',
    component: LootboxHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
