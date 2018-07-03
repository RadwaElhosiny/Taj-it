import { Injectable } from '@angular/core';

@Injectable()
export class MedicineServiceService {
  private medicines: Imedicine[];

  constructor() {
    this.medicines = [
      {
        id: 1,
        name: 'Panadol',
        price: 40,
        image: "URL1",
        expireDate: '23-1-2018'
      },
      {
        id: 23,
        name: 'Advil',
        price: 20,
        image: "URL2",
        expireDate: '29-1-2018'
      },
      {
        id: 20,
        name: 'Ketofan',
        price: 30,
        image: "URL3",
        expireDate: '23-1-2018'
      },
      {
        id: 4,
        name: 'Minalax',
        price: 40,
        image: "URL4",
        expireDate: '22-1-2018'
      },
      {
        id: 5,
        name: 'Congestal',
        price: 85,
        image: "URL5",
        expireDate: '12-1-2018'
      },
      {
        id: 16,
        name: 'Lilgnokayen',
        price: 70,
        image: "URL6",
        expireDate: '11-1-2018'
      },
      {
        id: 20,
        name: 'Colona',
        price: 100,
        image: "URL7",
        expireDate: '13-1-2018'
      },
      {
        id: 23,
        name: 'Cinalax',
        price: 65,
        image: "URL10",
        expireDate: '11-1-2018'
      },
      {
        id: 25,
        name: 'Katafast',
        price: 70,
        image: "URL7",
        expireDate: '16-1-2018'
      },
      {
        id: 16,
        name: 'kinacomp',
        price: 70,
        image: "URL4",
        expireDate: '19-1-2018'
      },
    ]
  }
  public GetAll(): Imedicine[] {
    return this.medicines;
  }

  public getById(id: number): Imedicine {

    const index = this.medicines.findIndex(a => a.id == id);
    return this.medicines[index];
  }

  public Add(medicine: Imedicine) {
    
    this.medicines.push(medicine);
  }

  public Update(id: number, medicine: Imedicine) {

    var d = this.medicines.find(i => i.id === id);
    if (medicine.id != null) {
      d.id = medicine.id;
    }
    if (medicine.name != null) {
      d.name = medicine.name;
    }
    if (medicine.price != null) {
      d.price = medicine.price;
    }
    if (medicine.image != null) {
      d.image = medicine.image;
    }
    if (medicine.expireDate != null) {
      d.expireDate = medicine.expireDate;
    }
  }

  public Delete(id)
    {
      
      this.medicines.splice(id,1);
      console.log(id);
     
    }
    public FindIndex(id:number)
    {
      const index = this.medicines.findIndex(a => a.id == id);
      return index;
    }
}
