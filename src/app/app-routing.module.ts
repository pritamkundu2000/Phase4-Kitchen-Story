import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddComponent } from './add/add.component';
import { AddcereComponent } from './addcere/addcere.component';
import { AddfruitsComponent } from './addfruits/addfruits.component';
import { AddicComponent } from './addic/addic.component';
import { AddinComponent } from './addin/addin.component';
import { AdditemComponent } from './additem/additem.component';
import { AddnutsComponent } from './addnuts/addnuts.component';
import { AdminComponent } from './admin/admin.component';
import { AdpwdComponent } from './adpwd/adpwd.component';
import { BuyComponent } from './buy/buy.component';
import { CereComponent } from './cere/cere.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CoronaComponent } from './corona/corona.component';
import { FinalComponent } from './final/final.component';
import { FoodItemsComponent } from './food-items/food-items.component';
import { FruitComponent } from './fruit/fruit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NutComponent } from './nut/nut.component';
import { PayComponent } from './pay/pay.component';
import { RegisterComponent } from './register/register.component';
import { SfooditemsComponent } from './sfooditems/sfooditems.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'Fooditems',component:FoodItemsComponent},
  {path:'sFooditems',component:SfooditemsComponent},
  {path:'about',component:AboutusComponent},
  {path:'contact',component:ContactusComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cere',component:CereComponent},
  {path:'fruit',component:FruitComponent},
  {path:'nut',component:NutComponent},
  {path:'Fooditems/:id',component:BuyComponent},
  {path:'buy',component:BuyComponent},
 {path:'additem',component:AdditemComponent},
  {path:'addfruits',component:AddfruitsComponent},
  {path:'final',component:FinalComponent},
  {path:'pay',component:PayComponent},
  {path:'addi',component:AdditemComponent},
  {path:'addic',component:AddicComponent},
  {path:'addin',component:AddinComponent},
  {path:'adpwd',component:AdpwdComponent},
  {path:'admin',component:AdminComponent},
  {path:'addcere',component:AddcereComponent},
  {path:'addnuts',component:AddnutsComponent},
  {path:'add',component:AddComponent},
  {path:'corona',component:CoronaComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:ContactusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
