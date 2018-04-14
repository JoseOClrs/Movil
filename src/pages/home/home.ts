import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { UsuarioPage } from '../usuario/usuario';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }
    
    irAUsuarios() {
        this.navCtrl.push(UsuarioPage);
    }
}
