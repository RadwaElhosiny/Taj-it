import { Component, OnInit, Input } from '@angular/core';
import { MedicineServiceService } from '../../shared/Services/medicine-service.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  medicines: Imedicine[];
  filteredMed: Imedicine[];
  _listFilter: string;
  sotred: Imedicine[];
  p: number = 1;
  num=4;
  constructor(private medService: MedicineServiceService) {}

  SetItemValue(no)
  {
    this.num=no;
    console.log(no);
    
  }
  OrderItById() {

    this.filteredMed.sort((n1, n2) => {
      return n1.id - n2.id
      //console.log(this.filteredMed);
    }

    ), console.log(this.filteredMed);
  }
  OrderItByIdReverse() {

    this.filteredMed.sort((n1, n2) => {
      return n2.id - n1.id
      //console.log(this.filteredMed);
    }

    ), console.log(this.filteredMed);
  }
  
  OrderItByPrice()
  {
    this.filteredMed.sort((n1, n2) => {
      return n1.price - n2.price
     });
  }
  OrderItByPriceReverse()
  {
    this.filteredMed.sort((n1, n2) => {
      return n2.price - n1.price
     });
  }
  OrderItByName()
  {
    this.filteredMed.sort((n1, n2) => {
      return n1.name.localeCompare(n2.name);
     });
  }
  OrderItByNameReverse()
  {
    this.filteredMed.sort((n1, n2) => {
      return n2.name.localeCompare(n1.name);
     });
  }
  OrderItByDate()
  {
    this.filteredMed.sort((n1, n2) => {
      return n1.expireDate.localeCompare(n2.expireDate);
     });
  }
  OrderItByDateReverse()
  {
    this.filteredMed.sort((n1, n2) => {
      return n2.expireDate.localeCompare(n1.expireDate);
     });
  }

  get listFilter(): string {
    return this._listFilter;

  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMed = this.listFilter ? this.performFilter(this.listFilter) : this.medicines;
  }

  performFilter(filterBy: string): Imedicine[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.medicines.filter((med: Imedicine) =>
      med.name.toLocaleLowerCase().startsWith(filterBy) ||
      med.price.toString().startsWith(filterBy)
    );
  }

  ngOnInit() {
    this.medicines = this.medService.GetAll();
    this.filteredMed = this.medicines;
  }
}
