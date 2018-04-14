import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { UserService } from '../../providers/user-service';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the UsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {
users: Object ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userServiceProvider : UserServiceProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad UsuarioPage');
    this.userServiceProvider.getUsers()

    .subscribe(
      (data) => { // Success
        this.users = data;
      //  localStorage.qp2 = data;
      //  localStorage.qp2JSON = JSON.stringify(data);
      //  this.users = data['info'];

      },
      (error) =>{
        console.error(error);
      }
    )
  }

}
