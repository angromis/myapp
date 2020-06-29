import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication.service";
import { User } from "../shared/user";
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular'
import { DatabaseService} from "../shared/database.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {

  slideOptions = {
  
    initialSlide: 1,
    speed: 650,
    
  };

  restList: any[];
  userlogedin : User;

  constructor(
    public dataService: DatabaseService,
    private router: Router,
    public authService: AuthenticationService
  ) { 
  // this.userlogedin = this.authService.getUser();
  
    
  }

  ngOnInit(){
   
    this.dataService.db.collection('restaurant').snapshotChanges().subscribe( res => {
      this.restList = [];
      res.forEach(a => {
        let item:any = a.payload.doc.data();
        item.id = a.payload.doc.id;
       
        if(item.rating >4){
          this.restList.push(item);
        }
       
       
      });
    });
  }
  getDetailedRestaurant(id: string){
    console.log(id)
    this.router.navigate(['/details/',id]);
  }
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

}