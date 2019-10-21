import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSlides, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;
  public arrayOptions: Array<any> = [
    {
      image:'pedra',
      isChecked: false
    },
    {
      image: 'papel',
      isChecked: false
    },
    {
      image: 'tesoura',
      isChecked: false
    }
  ];
  public escolha: any;
  public campoDeBatalha = '../../assets/imagensJanKenPo/campo_batalha.png';
  public vitorias: number = 0;
  public derrotas: number = 0;
  public empates: number = 0;
  public partidas: number = 0;
  
  constructor(public toastController: ToastController) {}
  
  ngOnInit(): void {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      position: 'top',
      message: '       • Lucas Araujo                       • Vinicius Fiorio',
      duration: 2000,
      color: 'dark'
    });
    toast.present();
  }
  public selectChoose(value, id) {
    enum opcoes { 'pedra' = 0, 'papel' = 1, 'tesoura' = 2 }
    let random = Math.round(Math.random() * 2);
    let bot = ''; 
    this.escolha = value;

    if(random == opcoes.pedra) {
      bot = 'pedra'
    }

    if (random == opcoes.papel) {
      bot = 'papel'
    }

    if (random == opcoes.tesoura) {
      bot = 'tesoura'
    }
    this.ganhador(id, random);
    this.campoDeBatalha = '../../assets/imagensJanKenPo/' + this.escolha.image + '_' + bot + '.png';
  }

  ganhador(usurario, bot) {
    enum opcoes { 'pedra' = 0, 'papel' = 1, 'tesoura' = 2 }

    this.partidas += 1;
    switch (true) {
      case usurario == opcoes.papel && bot == opcoes.papel:
        this.empates += 1;
      break;
      case usurario == opcoes.pedra && bot == opcoes.pedra:
        this.empates += 1;
      break;
      case usurario == opcoes.tesoura && bot == opcoes.tesoura:
        this.empates += 1;
      break;
      case usurario == opcoes.papel && bot == opcoes.pedra:
        this.vitorias += 1;
      break;
      case usurario == opcoes.pedra && bot == opcoes.tesoura:
        this.vitorias += 1;
      break;
      case usurario == opcoes.tesoura && bot == opcoes.papel:
        this.vitorias += 1;
      break;
      case usurario == opcoes.papel && bot == opcoes.tesoura:
        this.derrotas += 1;
      break;
      case usurario == opcoes.pedra && bot == opcoes.papel:
        this.derrotas += 1;
      break;
      case usurario == opcoes.tesoura && bot == opcoes.pedra:
        this.derrotas += 1;
      break;
      default:
        break;
    }
  }
  ReiniciarCampos() {
    this.campoDeBatalha = '../../assets/imagensJanKenPo/campo_batalha.png';
    this.vitorias = 0;
    this.derrotas = 0;
    this.empates = 0;
    this.partidas = 0;
    this.arrayOptions = [
      {
        image: 'pedra',
        isChecked: false
      },
      {
        image: 'papel',
        isChecked: false
      },
      {
        image: 'tesoura',
        isChecked: false
      }
    ]
  }
}
