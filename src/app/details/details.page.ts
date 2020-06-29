import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DatabaseService} from "../shared/database.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  id:any;
  restaurant: any;
  constructor( private actRoute: ActivatedRoute,
    private router: Router, public dataservice: DatabaseService) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.dataservice.db.collection('restaurant').snapshotChanges().subscribe( res => {
      this.restaurant = [];
      res.forEach(a => {
        let item:any = a.payload.doc.data();
        item.id = a.payload.doc.id;
       
        if(item.id == this.id){
          this.restaurant.push(item);
        }
       
       
      });
    });
  }

}
