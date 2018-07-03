import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms'
import { MedicineServiceService } from '../../shared/Services/medicine-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public item: Imedicine= {};
 
  constructor(private medService:MedicineServiceService , private router: Router) { }

  ngOnInit() {
  }
  public OnAdd(form: NgForm) {
    this.medService.Add(this.item);
    this.router.navigate(['/items']);
}
}
