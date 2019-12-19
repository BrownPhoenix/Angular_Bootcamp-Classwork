
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users.component';
import { routing } from './app.routing';

import { ReactiveFormsModule } from '@angular/forms'; 
import { UserFormComponent } from './user-form.component';


var config ={ 
  apiKey: "AIzaSyCm2XXwe9lSmoQuaZv4yWghk0eoELw2e5g",
authDomain: "angularcrudproject-5c73a.firebaseapp.com",
databaseURL: "https://angularcrudproject-5c73a.firebaseio.com",
projectId: "angularcrudproject-5c73a",
storageBucket: "angularcrudproject-5c73a.appspot.com",
messagingSenderId: "441234568686",
appId: "1:441234568686:web:b62264e49402e4c7"

}
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
