import { Component, OnInit } from '@angular/core';
import { Geolocation} from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap} from '@ionic-native/google-maps';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  public map:GoogleMap;

  public geolocation:Geolocation
  constructor() { }

  ngOnInit() {
    this.loadMap();
   
  }

  ionViewDidload(){
   
  }
  loadMap(){
    var crd;
    function success(pos){
      crd = pos.coords;
      console.log("mapOptions")
      var mapOptions ={
        camera:{
          target:{lat: crd.latitude, lng: crd.longitude},
          zoom:19
          
        }
      };
      var map = GoogleMaps.create('map_canvas', mapOptions);

      var marker = map.addMarker({
        position: {lat:crd.latitude, lng:crd.longitude},
        title:"You are here!"
      })
    }
    function error(err){
      console.log('Errrr')
    }
    navigator.geolocation.getCurrentPosition(success, error,{enableHighAccuracy:true});
    
    
  }
}
