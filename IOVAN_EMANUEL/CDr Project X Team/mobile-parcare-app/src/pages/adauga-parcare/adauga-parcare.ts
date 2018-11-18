import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController } from 'ionic-angular';
import { RequestsService } from '../../providers/requests.service';

@IonicPage({
  priority: 'off'
})
@Component({
  selector: 'page-adauga-parcare',
  templateUrl: 'adauga-parcare.html'
})
export class AdaugaParcarePage {
  model: any = {};
  isLoading: boolean;

  constructor(public navCtrl: NavController,
              private modalCtrl: ModalController,
              private requests: RequestsService) {

  }
  
  adauga() {
    this.isLoading = true;
    var route = "api/post/parcari";
    this.requests.post(route, this.model).subscribe(data => {
      
    }, error => {
      if (error.status = "404") {}
      console.log('Eroare! S-a intamplat ceva la introducerea parcarii!');
    }, () => {
      this.isLoading = false;
    })
  }

  harta(loc) {
    const modal = this.modalCtrl.create('HartaModal', { locatie: loc });
    modal.present();
  }
}
