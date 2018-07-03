import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { SmallItemComponent } from './items/small-item/small-item.component';
import { ListingComponent } from './items/listing/listing.component';
import { MedicineServiceService } from './shared/Services/medicine-service.service';
import { FormsModule} from '@angular/forms';
import { AddComponent } from './items/add/add.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule , Routes} from '@angular/router';
import { EditComponent } from './items/edit/edit.component';
import {NgxPaginationModule} from 'ngx-pagination';




@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    SmallItemComponent,
    ListingComponent,
    AddComponent,
    EditComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    RouterModule.forRoot([
      {path:'',component:ItemsComponent},
      {path:'items',component:ItemsComponent},
      {path:'edit/:id',component:EditComponent}
      
    ])
  ],
  providers: [MedicineServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
