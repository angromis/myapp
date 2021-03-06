import { Injectable } from '@angular/core';
import { Review} from '../shared/Review';

import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore'
import { AngularFireDatabaseModule, AngularFireObject, AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Observable,  } from 'rxjs';
import { map, retryWhen } from  'rxjs/operators';
import * as firebase from 'firebase/app';
import 'firebase/firestore';





@Injectable({
  providedIn: 'root'
}) 

export class DatabaseService {
 items = [];
  restlistRef: AngularFireList<any>;
  restRef: AngularFireObject<any>;
 
  sum :number;
  
  mylist

  constructor(public db: AngularFirestore, private db2: AngularFireDatabase  ) {
   
  }


  
  

  
addReview(rev: Review){
      let name =  rev.name;
      let review =  rev.review;
      let vote = rev.vote;
    
  return firebase.firestore().collection('reviews').doc().set({name: name, review: review, vote: vote})
  
}
getRatingRestaurant (){
 
  this.db.collection('reviews').snapshotChanges().subscribe( res => {
    let count = 0;
    res.forEach(a => {
      let item:any = a.payload.doc.data();
      item.id = a.payload.doc.id;
      console.log(count + ".." + item.id);
     count++;
    });
    
  });
  
}
 
}
