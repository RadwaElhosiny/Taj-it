import { Component, OnInit,Input } from '@angular/core';
import { MedicineServiceService } from '../../shared/Services/medicine-service.service';

@Component({
  selector: 'app-small-item',
  templateUrl: './small-item.component.html',
  styleUrls: ['./small-item.component.css']
})
export class SmallItemComponent implements OnInit {
  @Input() medicine:Imedicine; 
  @Input() medicines:Imedicine[];
  constructor(private medService:MedicineServiceService) { 

  }
  OnDel()
  {
    var d=this.medService.FindIndex(this.medicine.id);
    this.medService.Delete(d);
  }

  ngOnInit() {

  }

}
