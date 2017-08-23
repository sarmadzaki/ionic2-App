import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, Validators} from "@angular/forms";
import {ContactPage} from '../contact/contact'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public registration:any;
	firstname: String;
	lastname: String;
	email: String;
	password: String;
  constructor(private navCtrl: NavController) {
  

}
submit(){

	console.log("First Name: ", this.firstname,"Last Name: ",  this.lastname, "Email: ", this.email,"Password: ",this.password)
	this.navCtrl.push(ContactPage, {
	firstname: this.firstname,
	lastname: this.lastname
	});
	}  
}