import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms'   
import { ActivatedRoute } from '@angular/router';
import { MedicineServiceService } from '../../shared/Services/medicine-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
   medicine: Imedicine={};
   id:number;
  constructor(private medService:MedicineServiceService, private router: Router, private activeLink:ActivatedRoute) { 
    this.id=this.activeLink.snapshot.params["id"];
    this.medicine=this.medService.getById(this.id);
  }

  ngOnInit() {
  }
  public OnEdit(form: NgForm) {
    const value = form.value;
    this.medService.Update(this.id,value);
    this.router.navigate(['/items']);
};
}
