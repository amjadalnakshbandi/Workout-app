// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackComponent } from "./back/back.component";
import { CardioComponent } from "./cardio/cardio.component";
import {MainComponent} from "./main/main.component";
import {ChestComponent} from "./chest/chest.component";
import {LowerArmsComponent} from "./lower-arms/lower-arms.component";
import {LowerLegsComponent} from "./lower-legs/lower-legs.component";
import {NeckComponent} from "./neck/neck.component";
import {ShouldersComponent} from "./shoulders/shoulders.component";

export const routes: Routes = [
 { path: 'main', component: MainComponent },
  { path: 'cardio', component: CardioComponent },
  { path: 'chest', component: ChestComponent },
  { path: 'back', component: BackComponent },
  { path: 'lower-arms', component: LowerArmsComponent },
  { path: 'lower-legs', component: LowerLegsComponent },
  { path: 'neck', component: NeckComponent },
  { path: 'shoulders', component: ShouldersComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
