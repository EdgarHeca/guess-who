import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public avengers: Array<any>;

  public caracteristicas: Array<any>;

  public playerLista: Array<any>;
  public iaLista: Array<any>;
  public iaListaTemp: Array<any>;

  public turnoPlayer: boolean = true;

  public esPreguntas: Array<any>;
  public tienePreguntas: Array<any>;
  public usaPreguntas: Array<any>;
  public colorPreguntas: Array<any>;
  public vivoPreguntas: Array<any>;

  public cabelloPreguntas: Array<any>;
  public pielPreguntas: Array<any>;

  public dropdownOpciones: Array<any>;
  public dropdownOpcionesAux: Array<any>;
  public auxNeeded: boolean = false;
  public dropdownOpcionesPlayerGuess: Array<any>;

  public opcion: string = "Es: "; //radio value
  public opcionContext: string = "hombre";
  public opcionAuxContext: string = "";

  public playerGuess: string = "";

  public lastAnswerIa: string = "";
  public lastAnswerBIa: boolean = false;
  public firstAnswer: boolean = false;
  public answerHumano: boolean = false;
  public answerHombre: boolean = false;

  public lastAnswer: string = "";
  public lastAnswerB: boolean = false;

  public gameOver: boolean = false;

  constructor() {
    this.avengers = [
      { id: 1, nombre: 'Ironman', imagen: 'https://imgur.com/Ozt6UHH.jpg' },
      { id: 2, nombre: 'Spiderman', imagen: 'https://imgur.com/NaY0Z86.jpg' },
      { id: 3, nombre: 'Wanda', imagen: 'https://imgur.com/Z6erAIS.jpg' },
      { id: 4, nombre: 'Nick Fury', imagen: 'https://imgur.com/VVIPzKz.jpg' },
      { id: 5, nombre: 'War Machine', imagen: 'https://imgur.com/y3Hmdyf.jpg' },
      { id: 6, nombre: 'Maria Hill', imagen: 'https://imgur.com/1yP5WEa.jpg' },
      { id: 7, nombre: 'W\'kabi', imagen: 'https://imgur.com/uC0SSwS.jpg' },
      { id: 8, nombre: 'Thor', imagen: 'https://imgur.com/37f9Wlc.jpg' },
      { id: 9, nombre: 'The Collector', imagen: 'https://imgur.com/lHFAPw7.jpg' },
      { id: 10, nombre: 'Shuri', imagen: 'https://imgur.com/mpE2Id5.jpg' },
      { id: 11, nombre: 'Okoye', imagen: 'https://imgur.com/cUGS6BR.jpg' },
      { id: 12, nombre: 'Starlord', imagen: 'https://imgur.com/4w9VrTL.jpg' },
      { id: 13, nombre: 'Vision', imagen: 'https://imgur.com/8CPrRD3.jpg' },
      { id: 14, nombre: 'Wong', imagen: 'https://imgur.com/mVEIzkf.jpg' },
      { id: 15, nombre: 'Mantis', imagen: 'https://imgur.com/PJMFYwz.jpg' },
      { id: 16, nombre: 'Gamora', imagen: 'https://imgur.com/x1AmGPE.jpg' },
      { id: 17, nombre: 'Nebula', imagen: 'https://imgur.com/C8oBmCJ.jpg' },
      { id: 18, nombre: 'Dr. Strange', imagen: 'https://imgur.com/j7Wvbkg.jpg' },
      { id: 19, nombre: 'Hawkeye', imagen: 'https://imgur.com/TP8T0pX.jpg' },
      { id: 20, nombre: 'Cpt. America', imagen: 'https://imgur.com/PG90jRa.jpg' },
      { id: 21, nombre: 'Ned', imagen: 'https://imgur.com/lcHZ9oA.jpg' },
      { id: 22, nombre: 'Black Panther', imagen: 'https://imgur.com/fJExV21.jpg' },
      { id: 23, nombre: 'Loki', imagen: 'https://imgur.com/kh7gZGs.jpg' },
      { id: 24, nombre: 'Hulk', imagen: 'https://imgur.com/SOOHnC3.jpg' },
      { id: 25, nombre: 'Ayo', imagen: 'https://imgur.com/pKssQvI.jpg' },
      { id: 26, nombre: 'Bucky', imagen: 'https://imgur.com/vX3Fos8.jpg' },
      { id: 27, nombre: 'Drax', imagen: 'https://imgur.com/6OSMRWS.jpg' },
      { id: 28, nombre: 'Falcon', imagen: 'https://imgur.com/3KT7rOD.jpg' },
      { id: 29, nombre: 'Rocket', imagen: 'https://imgur.com/3PCvD9z.jpg' },
      { id: 30, nombre: 'Ant Man', imagen: 'https://imgur.com/8YPNPU9.jpg' },
      { id: 31, nombre: 'Black Widow', imagen: 'https://imgur.com/1p2zFhE.jpg' },
      { id: 32, nombre: 'Groot', imagen: 'https://imgur.com/4LEdLab.jpg' }
    ];

    this.caracteristicas = [
      { id: 1, humano: 'sí', arma: 'traje', puesto1: 'ingeniero', puesto2: 'avenger', color1: 'rojo', color2: 'dorado', sexo: 'hombre', cabello: 'sí', colorcabello: 'castaño', piel: 'clara', pelaje: 'no', vivo: 'no', capa: 'no', traje: 'armadura', casco: 'sí' },
      { id: 2, humano: 'sí', arma: 'telarañas', puesto1: 'avenger', puesto2: 'estudiante', color1: 'rojo', color2: 'azul', sexo: 'hombre', cabello: 'sí', colorcabello: 'castaño', piel: 'clara', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'armadura', casco: 'sí' },
      { id: 3, humano: 'sí', arma: 'magia', puesto1: 'avenger', puesto2: 'hechicero', color1: 'rojo', color2: 'no', sexo: 'mujer', cabello: 'sí', colorcabello: 'rojo', piel: 'clara', pelaje: 'no', vivo: 'sí', capa: 'sí', traje: 'traje', casco: 'sí' },
      { id: 4, humano: 'sí', arma: 'pistolas', puesto1: 'agente shield', puesto2: 'no', color1: 'negro', color2: 'no', sexo: 'hombre', cabello: 'no', colorcabello: 'no', piel: 'oscura', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'traje', casco: 'no' },
      { id: 5, humano: 'sí', arma: 'traje', puesto1: 'avenger', puesto2: 'militar', color1: 'gris', color2: 'rojo', sexo: 'hombre', cabello: 'no', colorcabello: 'no', piel: 'oscura', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'armadura', casco: 'sí' },
      { id: 6, humano: 'sí', arma: 'pistolas', puesto1: 'agente shield', puesto2: 'no', color1: 'negro', color2: 'no', sexo: 'mujer', cabello: 'sí', colorcabello: 'negro', piel: 'clara', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'traje', casco: 'no' },
      { id: 7, humano: 'sí', arma: 'escudo', puesto1: 'guerrero', puesto2: 'no', color1: 'negro', color2: 'gris', sexo: 'hombre', cabello: 'sí', colorcabello: 'negro', piel: 'oscura', pelaje: 'no', vivo: 'sí', capa: 'sí', traje: 'traje', casco: 'no' },
      { id: 8, humano: 'no', arma: 'martillo', puesto1: 'dios', puesto2: 'avenger', color1: 'gris', color2: 'rojo', sexo: 'hombre', cabello: 'sí', colorcabello: 'rubio', piel: 'clara', pelaje: 'no', vivo: 'sí', capa: 'sí', traje: 'armadura', casco: 'sí' },
      { id: 9, humano: 'sí', arma: 'muñequera', puesto1: 'coleccionista', puesto2: 'no', color1: 'negro', color2: 'blanco', sexo: 'hombre', cabello: 'sí', colorcabello: 'blanco', piel: 'clara', pelaje: 'no', vivo: 'sí', capa: 'sí', traje: 'traje', casco: 'no' },
      { id: 10, humano: 'sí', arma: 'guantelete', puesto1: 'ingeniero', puesto2: 'princesa', color1: 'negro', color2: 'gris', sexo: 'mujer', cabello: 'sí', colorcabello: 'negro', piel: 'oscura', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'traje', casco: 'no' },
      { id: 11, humano: 'sí', arma: 'lanza', puesto1: 'guerrero', puesto2: 'no', color1: 'rojo', color2: 'dorado', sexo: 'mujer', cabello: 'no', colorcabello: 'no', piel: 'oscura', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'armadura', casco: 'no' },
      { id: 12, humano: 'sí', arma: 'pistolas', puesto1: 'guardián de la galaxia', puesto2: 'no', color1: 'rojo', color2: 'no', sexo: 'hombre', cabello: 'sí', colorcabello: 'rubio', piel: 'clara', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'traje', casco: 'sí' },
      { id: 13, humano: 'no', arma: 'gema de la mente', puesto1: 'avenger', puesto2: 'no', color1: 'verde', color2: 'rojo', sexo: 'hombre', cabello: 'no', colorcabello: 'no', piel: 'roja', pelaje: 'no', vivo: 'sí', capa: 'sí', traje: 'traje', casco: 'no' },
      { id: 14, humano: 'sí', arma: 'magia', puesto1: 'hechicero', puesto2: 'no', color1: 'rojo', color2: 'no', sexo: 'hombre', cabello: 'sí', colorcabello: 'negro', piel: 'clara', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'traje', casco: 'no' },
      { id: 15, humano: 'sí', arma: 'puños', puesto1: 'guardián de la galaxia', puesto2: 'no', color1: 'verde', color2: 'no', sexo: 'mujer', cabello: 'sí', colorcabello: 'negro', piel: 'clara', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'traje', casco: 'no' },
      { id: 16, humano: 'no', arma: 'espada', puesto1: 'guardián de la galaxia', puesto2: 'mercenario', color1: 'azul', color2: 'verde', sexo: 'mujer', cabello: 'sí', colorcabello: 'rosa', piel: 'verde', pelaje: 'no', vivo: 'no', capa: 'no', traje: 'traje', casco: 'no' },
      { id: 17, humano: 'no', arma: 'pistolas', puesto1: 'mercenario', puesto2: 'no', color1: 'morado', color2: 'azul', sexo: 'mujer', cabello: 'no', colorcabello: 'no', piel: 'azul', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'traje', casco: 'no' },
      { id: 18, humano: 'sí', arma: 'magia', puesto1: 'avenger', puesto2: 'hechicero', color1: 'rojo', color2: 'azul', sexo: 'hombre', cabello: 'sí', colorcabello: 'negro', piel: 'clara', pelaje: 'no', vivo: 'sí', capa: 'sí', traje: 'traje', casco: 'no' },
      { id: 19, humano: 'sí', arma: 'arco', puesto1: 'avenger', puesto2: 'mercenario', color1: 'negro', color2: 'gris', sexo: 'hombre', cabello: 'sí', colorcabello: 'castaño', piel: 'clara', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'traje', casco: 'no' },
      { id: 20, humano: 'sí', arma: 'escudo', puesto1: 'avenger', puesto2: 'militar', color1: 'azul', color2: 'rojo', sexo: 'hombre', cabello: 'sí', colorcabello: 'rubio', piel: 'clara', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'traje', casco: 'no' },
      { id: 21, humano: 'sí', arma: 'magia', puesto1: 'estudiante', puesto2: 'no', color1: 'rosa', color2: 'no', sexo: 'hombre', cabello: 'sí', colorcabello: 'castaño', piel: 'oscura', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'no', casco: 'no' },
      { id: 22, humano: 'sí', arma: 'garras', puesto1: 'rey', puesto2: 'avenger', color1: 'negro', color2: 'morado', sexo: 'hombre', cabello: 'sí', colorcabello: 'negro', piel: 'oscura', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'armadura', casco: 'sí' },
      { id: 23, humano: 'no', arma: 'cetro', puesto1: 'dios', puesto2: 'principe', color1: 'verde', color2: 'dorado', sexo: 'hombre', cabello: 'sí', colorcabello: 'negro', piel: 'clara', pelaje: 'no', vivo: 'no', capa: 'sí', traje: 'traje', casco: 'sí' },
      { id: 24, humano: 'sí', arma: 'puños', puesto1: 'avenger', puesto2: 'científico', color1: 'verde', color2: 'morado', sexo: 'hombre', cabello: 'sí', colorcabello: 'negro', piel: 'verde', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'no', casco: 'no' },
      { id: 25, humano: 'sí', arma: 'lanza', puesto1: 'guerrero', puesto2: 'no', color1: 'rojo', color2: 'dorado', sexo: 'mujer', cabello: 'no', colorcabello: 'no', piel: 'oscura', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'armadura', casco: 'no' },
      { id: 26, humano: 'sí', arma: 'brazo biónico', puesto1: 'agente shield', puesto2: 'militar', color1: 'negro', color2: 'gris', sexo: 'hombre', cabello: 'sí', colorcabello: 'negro', piel: 'clara', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'traje', casco: 'no' },
      { id: 27, humano: 'sí', arma: 'dagas', puesto1: 'guardián de la galaxia', puesto2: 'mercenario', color1: 'verde', color2: 'rojo', sexo: 'hombre', cabello: 'no', colorcabello: 'no', piel: 'verde', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'no', casco: 'no' },
      { id: 28, humano: 'sí', arma: 'alas', puesto1: 'avenger', puesto2: 'militar', color1: 'azul', color2: 'rojo', sexo: 'hombre', cabello: 'sí', colorcabello: 'negro', piel: 'oscura', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'armadura', casco: 'no' },
      { id: 29, humano: 'no', arma: 'pistolas', puesto1: 'guardián de la galaxia', puesto2: 'no', color1: 'naranja', color2: 'gris', sexo: 'hombre', cabello: 'no', colorcabello: 'no', piel: 'oscura', pelaje: 'sí', vivo: 'sí', capa: 'no', traje: 'traje', casco: 'no' },
      { id: 30, humano: 'sí', arma: 'cambiar tamaño', puesto1: 'avenger', puesto2: 'ingeniero', color1: 'rojo', color2: 'gris', sexo: 'hombre', cabello: 'sí', colorcabello: 'castaño', piel: 'clara', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'traje', casco: 'sí' },
      { id: 31, humano: 'sí', arma: 'pistolas', puesto1: 'avenger', puesto2: 'agente shield', color1: 'negro', color2: 'rojo', sexo: 'mujer', cabello: 'sí', colorcabello: 'rojo', piel: 'clara', pelaje: 'no', vivo: 'no', capa: 'no', traje: 'traje', casco: 'no' },
      { id: 32, humano: 'no', arma: 'puños', puesto1: 'guardián de la galaxia', puesto2: 'no', color1: 'café', color2: 'no', sexo: 'hombre', cabello: 'no', colorcabello: 'no', piel: 'no', pelaje: 'no', vivo: 'sí', capa: 'no', traje: 'no', casco: 'no' }
    ];

    this.esPreguntas = [
      ['hombre'],
      ['mujer'],
      ['ingeniero'],
      ['avenger'],
      ['agente shield'],
      ['guerrero'],
      ['príncipe'],
      ['princesa'],
      ['rey'],
      ['guardián de la galaxia'],
      ['mercenario'],
      ['hechicero'],
      ['militar'],
      ['estudiante'],
      ['dios'],
      ['científico'],
      ['humano']
    ];

    this.tienePreguntas = [
      ['traje (vestimenta)'],
      ['cabello'],
      ['armadura'],
      ['capa'],
      ['casco'],
      ['pelaje'],
      ['piel']
    ];

    this.cabelloPreguntas = [
      ['castaño'],
      ['rojo'],
      ['rosa'],
      ['negro'],
      ['rubio'],
      ['blanco'],
      ['no tiene']
    ];

    this.pielPreguntas = [
      ['oscura'],
      ['clara'],
      ['verde'],
      ['azul'],
      ['roja'],
      ['no tiene']
    ];

    this.usaPreguntas = [
      ['traje (especial)'],
      ['telarañas'],
      ['magia'],
      ['pistolas'],
      ['martillo'],
      ['escudo'],
      ['muñequera'],
      ['guantelete'],
      ['lanza'],
      ['gema de la mente'],
      ['espada'],
      ['arco'],
      ['garras'],
      ['cetro'],
      ['brazo biónico'],
      ['dagas'],
      ['alas'],
      ['cambiador de tamaño'],
      ['puños']
    ];

    this.colorPreguntas = [
      ['rojo'],
      ['gris'],
      ['negro'],
      ['dorado'],
      ['verde'],
      ['azul'],
      ['morado'],
      ['naranja'],
      ['café'],
      ['blanco']
    ];

    this.vivoPreguntas = [
      ['sí'],
      ['no']
    ];

    this.dropdownOpciones = [];
    this.dropdownOpcionesAux = [];
    this.dropdownOpcionesPlayerGuess = [];

    this.fillDropdown(this.esPreguntas);

    this.playerLista = this.avengers;
    this.iaLista = this.caracteristicas;
    this.iaListaTemp = [];

  }

  ngOnInit(): void {
    const elemento = document.getElementById("cards-container")!;
    elemento.style.visibility = "hidden";

    const btnReset = document.getElementById("boton-reset")! as HTMLButtonElement | null;
    btnReset!.disabled = true;


  }

  public flipped: boolean[] = [];
  public charPicked: boolean = false;
  public characterId!: number;
  public characterNombre!: string;
  public characterImagen!: string;

  public iaPick: number = 0;
  public charPickedIa: boolean = false;
  public characterIdIa!: number;
  public characterNombreIa!: string;
  public characterImagenIa!: string;

  hideImage(event: Event) {

    let elementId: string = (event.target as Element).id;

    if (this.flipped[parseInt(elementId) - 1]) {
      document.getElementById(elementId)!.setAttribute('src', this.avengers[parseInt(elementId) - 1].imagen);

      this.flipped[parseInt(elementId) - 1] = false;

      this.emptyDropdownPlayerGuess();
      this.addToPlayerList(parseInt(elementId));
      this.fillDropdownPlayerGuess(this.playerLista);
    }
    else {
      if ((this.charPicked)) {
        document.getElementById(elementId)!.setAttribute('src', 'https://imgur.com/G8c4Jxh.jpg');

        this.flipped[parseInt(elementId) - 1] = true;

        this.emptyDropdownPlayerGuess();
        this.removeFromPlayerList(parseInt(elementId));
        this.fillDropdownPlayerGuess(this.playerLista);
      }
    }

    if (!this.charPicked) {

      this.characterId = this.avengers[parseInt(elementId) - 1].id;
      this.characterNombre = this.avengers[parseInt(elementId) - 1].nombre;
      this.characterImagen = this.avengers[parseInt(elementId) - 1].imagen;

      if (confirm("¿Estás seguro que quieres seleccionar a " + this.characterNombre + "?")) {
        this.charPicked = true;
        console.log('Sí');

        this.iaPickChar();
      } else {
        // Do nothing!
        console.log('No');
      }

    }
  }

  startActualGame() {
    const elemento = document.getElementById("boton-preguntar")! as HTMLButtonElement | null;

    if (this.turnoPlayer) {
      // this.turnoPlayer = false;
      switch (this.opcion) {
        case 'Es: ':
          switch (this.opcionContext) {
            case 'hombre':
              this.checkPropertyIa("sexo", "hombre");
              break;
            case 'mujer':
              this.checkPropertyIa("sexo", "mujer");
              break;
            case 'ingeniero':
              this.checkPropertyIa("puesto1", "ingeniero");
              break;
            case 'avenger':
              this.checkPropertyIa("puesto1", "avenger");
              break;
            case 'agente shield':
              this.checkPropertyIa("puesto1", "agente shield");
              break;
            case 'guerrero':
              this.checkPropertyIa("puesto1", "guerrero");
              break;
            case 'príncipe':
              this.checkPropertyIa("puesto1", "príncipe");
              break;
            case 'princesa':
              this.checkPropertyIa("puesto1", "princesa");
              break;
            case 'rey':
              this.checkPropertyIa("puesto1", "rey");
              break;
            case 'guardián de la galaxia':
              this.checkPropertyIa("puesto1", "guardián de la galaxia");
              break;
            case 'mercenario':
              this.checkPropertyIa("puesto1", "mercenario");
              break;
            case 'hechicero':
              this.checkPropertyIa("puesto1", "hechicero");
              break;
            case 'militar':
              this.checkPropertyIa("puesto1", "militar");
              break;
            case 'estudiante':
              this.checkPropertyIa("puesto1", "estudiante");
              break;
            case 'dios':
              this.checkPropertyIa("puesto1", "dios");
              break;
            case 'científico':
              this.checkPropertyIa("puesto1", "científico");
              break;
            case 'humano':
              this.checkPropertyIa("humano", "sí");
              break;
          }
          break;
        case 'Tiene: ':
          switch (this.opcionContext) {
            case 'traje (vestimenta)':
              this.checkPropertyIa("traje", "traje");
              break;
            case 'cabello':
              switch (this.opcionAuxContext) {
                case 'castaño':
                  this.checkPropertyIa("colorcabello", "castaño");
                  break;
                case 'rojo':
                  this.checkPropertyIa("colorcabello", "rojo");
                  break;
                case 'rosa':
                  this.checkPropertyIa("colorcabello", "rosa");
                  break;
                case 'negro':
                  this.checkPropertyIa("colorcabello", "negro");
                  break;
                case 'rubio':
                  this.checkPropertyIa("colorcabello", "rubio");
                  break;
                case 'blanco':
                  this.checkPropertyIa("colorcabello", "blanco");
                  break;
                case 'no tiene':
                  this.checkPropertyIa("colorcabello", "no");
                  break;
              }
              break;
            case 'armadura':
              this.checkPropertyIa("traje", "armadura");
              break;
            case 'capa':
              this.checkPropertyIa("capa", "sí");
              break;
            case 'casco':
              this.checkPropertyIa("casco", "sí");
              break;
            case 'pelaje':
              this.checkPropertyIa("pelaje", "sí");
              break;
            case 'piel':
              switch (this.opcionAuxContext) {
                case 'oscura':
                  this.checkPropertyIa("piel", "oscura");
                  break;
                case 'clara':
                  this.checkPropertyIa("piel", "clara");
                  break;
                case 'no':
                  this.checkPropertyIa("piel", "no");
                  break;
                case 'verde':
                  this.checkPropertyIa("piel", "verde");
                  break;
                case 'azul':
                  this.checkPropertyIa("piel", "azul");
                  break;
                case 'roja':
                  this.checkPropertyIa("piel", "roja");
                  break;
              }
              break;
          }
          break;
        case 'Usa: ':
          switch (this.opcionContext) {
            case 'traje (especial)':
              this.checkPropertyIa("arma", "traje");
              break;
            case 'telarañas':
              this.checkPropertyIa("arma", "telarañas");
              break;
            case 'magia':
              this.checkPropertyIa("arma", "magia");
              break;
            case 'pistolas':
              this.checkPropertyIa("arma", "pistolas");
              break;
            case 'escudo':
              this.checkPropertyIa("arma", "escudo");
              break;
            case 'muñequera':
              this.checkPropertyIa("arma", "muñequera");
              break;
            case 'guantelete':
              this.checkPropertyIa("arma", "guantelete");
              break;
            case 'lanza':
              this.checkPropertyIa("arma", "lanza");
              break;
            case 'gema de la mente':
              this.checkPropertyIa("arma", "gema de la mente");
              break;
            case 'espada':
              this.checkPropertyIa("arma", "espada");
              break;
            case 'arco':
              this.checkPropertyIa("arma", "arco");
              break;
            case 'garras':
              this.checkPropertyIa("arma", "garras");
              break;
            case 'cetro':
              this.checkPropertyIa("arma", "cetro");
              break;
            case 'brazo biónico':
              this.checkPropertyIa("arma", "brazo biónico");
              break;
            case 'dagas':
              this.checkPropertyIa("arma", "dagas");
              break;
            case 'alas':
              this.checkPropertyIa("arma", "alas");
              break;
            case 'cambiador de tamaño':
              this.checkPropertyIa("arma", "cambiar tamaño");
              break;
            case 'puños':
              this.checkPropertyIa("arma", "puños");
              break;
            case 'martillo':
              this.checkPropertyIa("arma", "martillo");
              break;
          }
          break;
        case 'Usa color: ':
          switch (this.opcionContext) {
            case 'rojo':
              this.checkPropertyIa("color1", "rojo");
              break;
            case 'gris':
              this.checkPropertyIa("color1", "gris");
              break;
            case 'negro':
              this.checkPropertyIa("color1", "negro");
              break;
            case 'dorado':
              this.checkPropertyIa("color1", "dorado");
              break;
            case 'verde':
              this.checkPropertyIa("color1", "verde");
              break;
            case 'azul':
              this.checkPropertyIa("color1", "azul");
              break;
            case 'morado':
              this.checkPropertyIa("color1", "morado");
              break;
            case 'naranja':
              this.checkPropertyIa("color1", "naranja");
              break;
            case 'café':
              this.checkPropertyIa("color1", "café");
              break;
            case 'blanco':
              this.checkPropertyIa("color1", "blanco");
              break;
          }
          break;
        case 'Está vivo: ':
          switch (this.opcionContext) {
            case 'sí':
              this.checkPropertyIa("vivo", "sí");
              break;
            case 'no':
              this.checkPropertyIa("vivo", "no");
              break;
          }
          break;
      }
    }
    else if (!this.turnoPlayer) {
      // console.log(this.turnoPlayer);
      // elemento!.disabled = true;

      // this.iaGuess();
      // this.turnoPlayer = true;
    }

  }

  startGame(event: Event) {
    let elementId: string = (event.target as Element).id;

    const elemento = document.getElementById(elementId)! as HTMLButtonElement | null;
    const nombreElemento = document.getElementById(elementId)!.id;

    const contCartas = document.getElementById("cards-container")!;


    switch (nombreElemento) {

      case 'boton-usuario':
        elemento!.disabled = true;
        const btnReset = document.getElementById("boton-reset")! as HTMLButtonElement | null;

        btnReset!.disabled = false;

        contCartas.style.visibility = "visible";

        alert("Elige un personaje");



        break;

      case 'boton-ia':
        elemento!.disabled = true;
        const btnReset2 = document.getElementById("boton-reset")! as HTMLButtonElement | null;

        btnReset2!.disabled = false;

        contCartas.style.visibility = "visible";

        alert("Elige un personaje");

        break;

      case 'boton-reset':
        elemento!.disabled = true;

        const contCartasR = document.getElementById("cards-container")!;
        const btnUsr = document.getElementById("boton-usuario")! as HTMLButtonElement | null;
        const btnIa = document.getElementById("boton-ia")! as HTMLButtonElement | null;

        btnUsr!.disabled = false;
        btnIa!.disabled = false;

        this.iaLista = [];
        this.iaLista = this.caracteristicas;
        this.firstAnswer = false;
        this.answerHumano = false;
        this.answerHombre = false;


        contCartasR.style.visibility = "hidden";

        this.charPicked = false;
        this.charPickedIa = false;

        for (let avenger of this.avengers) {
          document.getElementById(avenger.id)!.setAttribute('src', this.avengers[avenger.id - 1].imagen);

          this.flipped[parseInt(avenger) - 1] = false;
        }

        break;

      default:
        console.log("Nada");
        break;
    }

  }

  iaPickChar() {
    if (this.charPicked) {
      // IA elige personaje
      this.iaPick = Math.floor(Math.random() * (32) + 1);
      // this.iaPick = 32;
      console.log(this.iaPick);
      this.charPickedIa = true;
      // Asignar personaje
      this.characterIdIa = this.avengers[this.iaPick - 1].id;
      this.characterNombreIa = this.avengers[this.iaPick - 1].nombre;
      this.characterImagenIa = this.avengers[this.iaPick - 1].imagen;
    }
  }

  togglePrev(event: Event) {
    let elementId: string = (event.target as Element).id;
    let elemento = document.getElementById(elementId)!.id;

    switch (elemento) {
      case 'prev-on':
        if (document.getElementById('prev-on')!.textContent === "visibility") {
          document.getElementById('prev-on')!.textContent = "visibility_off";

          document.getElementById("char-preview")!.setAttribute('src', this.characterImagen);

          document.getElementById("card-title")!.textContent = this.characterNombre;
        }
        else {
          document.getElementById(elementId)!.textContent = "visibility";

          document.getElementById("char-preview")!.setAttribute('src', 'https://imgur.com/G8c4Jxh.jpg');
          document.getElementById("card-title")!.textContent = "-----------";
        }
        break;

      case 'prev-on-ia':
        if (document.getElementById('prev-on-ia')!.textContent === "visibility") {
          document.getElementById('prev-on-ia')!.textContent = "visibility_off";

          document.getElementById("char-preview-ia")!.setAttribute('src', this.characterImagenIa);

          document.getElementById("card-title-ia")!.textContent = this.characterNombreIa;
        }
        else {
          document.getElementById(elementId)!.textContent = "visibility";

          document.getElementById("char-preview-ia")!.setAttribute('src', 'https://imgur.com/G8c4Jxh.jpg');
          document.getElementById("card-title-ia")!.textContent = "-----------";
        }
        break;

    }
  }

  radioChangeHandler(event: any) {
    this.opcion = event.target.value;

    switch (this.opcion) {
      case 'Es: ':
        this.emptyDropdown();
        this.fillDropdown(this.esPreguntas);
        this.opcionContext = this.esPreguntas[0].toString();
        this.auxNeeded = false;

        console.log(this.opcion);
        console.log(this.opcionContext);
        break;
      case 'Tiene: ':
        this.emptyDropdown();
        this.fillDropdown(this.tienePreguntas);
        this.opcionContext = this.tienePreguntas[0].toString();
        this.auxNeeded = false;

        console.log(this.opcion);
        console.log(this.opcionContext);
        break;
      case 'Usa: ':
        this.emptyDropdown();
        this.fillDropdown(this.usaPreguntas);
        this.opcionContext = this.usaPreguntas[0].toString();
        this.auxNeeded = false;

        console.log(this.opcion);
        console.log(this.opcionContext);
        break;
      case 'Usa color: ':
        this.emptyDropdown();
        this.fillDropdown(this.colorPreguntas);
        this.opcionContext = this.colorPreguntas[0].toString();
        this.auxNeeded = false;

        console.log(this.opcion);
        console.log(this.opcionContext);
        break;
      case 'Está vivo: ':
        this.emptyDropdown();
        this.fillDropdown(this.vivoPreguntas);
        this.opcionContext = this.vivoPreguntas[0].toString();
        this.auxNeeded = false;

        console.log(this.opcion);
        console.log(this.opcionContext);
        break;
      default:
        console.log(this.opcionContext);
        console.log(this.opcion);
        break;
    }
  }

  selectChangeHandler(event: any) {
    this.opcionContext = event.target.value;

    console.log(this.opcionContext);

    switch (this.opcionContext) {
      case 'cabello':
        this.emptyDropdownAux();
        this.fillDropdownAux(this.cabelloPreguntas);
        this.auxNeeded = true;

        break;

      case 'piel':
        this.emptyDropdownAux();
        this.fillDropdownAux(this.pielPreguntas);
        this.auxNeeded = true;

        break;

      default:
        this.auxNeeded = false;
        break;
    }
  }

  selectAuxChangeHandler(event: any) {
    this.opcionAuxContext = event.target.value;

    console.log(this.opcionAuxContext);
  }

  fillDropdown(lista: Array<any>) {
    lista.forEach(element => {
      this.dropdownOpciones.push(element);
    });
  }

  fillDropdownAux(lista: Array<any>) {
    lista.forEach(element => {
      this.dropdownOpcionesAux.push(element);
    });
  }

  fillDropdownPlayerGuess(lista: Array<any>) {
    lista.forEach(element => {
      this.dropdownOpcionesPlayerGuess.push(element);
    });
  }

  emptyDropdown() {
    this.dropdownOpciones = [];
  }

  emptyDropdownAux() {
    this.dropdownOpcionesAux = [];
  }

  emptyDropdownPlayerGuess() {
    this.dropdownOpcionesPlayerGuess = [];
  }

  removeFromPlayerList(idR: number) {
    this.playerLista = this.playerLista.filter(data => data.id != idR);
  }

  addToPlayerList(idR: number) {
    let idR2 = idR - 1;
    this.playerLista.push({ id: this.avengers[idR2].id, nombre: this.avengers[idR2].nombre, imagen: this.avengers[idR2].imagen });
  }

  insertIaTempList(idR: number) {
    let key = this.iaLista[idR - 1];
    this.iaListaTemp.push({ id: key.id, arma: key.arma, puesto1: key.puesto1, puesto2: key.puesto2, color1: key.color1, color2: key.color2, sexo: key.sexo, cabello: key.cabello, colorcabello: key.colorcabello, piel: key.piel, pelaje: key.pelaje, vivo: key.vivo, capa: key.capa, traje: key.traje, casco: key.casco });
  }

  updateIaList() {
    console.log(this.iaListaTemp);
  }

  deleteFromIaList() {
    this.iaLista = this.getDifferenceF(this.iaLista, this.iaListaTemp);

    console.log(this.iaLista);
  }

  getDifferenceF(array1: Array<any>, array2: Array<any>) {
    return array1.filter(object1 => {
      return array2.some(object2 => {
        return object1.id === object2.id;
      });
    });
  }

  getDifferenceS(array1: Array<any>, array2: Array<any>) {
    return array1.filter(object1 => {
      return !array2.some(object2 => {
        return object1.id === object2.id;
      });
    });
  }

  checkPropertyIa(propiedad: string, valor: string, propiedad2?: string) {
    let key;
    let key2;
    switch (propiedad) {
      case 'sexo':
        key = this.caracteristicas[this.characterIdIa - 1].sexo;
        break;
      case 'humano':
        key = this.caracteristicas[this.characterIdIa - 1].humano;
        break;
      case 'arma':
        key = this.caracteristicas[this.characterIdIa - 1].arma;
        break;
      case 'puesto1':
        key = this.caracteristicas[this.characterIdIa - 1].puesto1;
        key2 = this.caracteristicas[this.characterIdIa - 1].puesto2;
        break;
      case 'puesto2':
        key = this.caracteristicas[this.characterIdIa - 1].puesto2;
        key2 = this.caracteristicas[this.characterIdIa - 1].puesto1;
        break;
      case 'color1':
        key = this.caracteristicas[this.characterIdIa - 1].color1;
        key2 = this.caracteristicas[this.characterIdIa - 1].color2;
        break;
      case 'color2':
        key = this.caracteristicas[this.characterIdIa - 1].color2;
        key2 = this.caracteristicas[this.characterIdIa - 1].color1;
        break;
      case 'cabello':
        key = this.caracteristicas[this.characterIdIa - 1].cabello;
        break;
      case 'colorcabello':
        key = this.caracteristicas[this.characterIdIa - 1].colorcabello;
        break;
      case 'piel':
        key = this.caracteristicas[this.characterIdIa - 1].piel;
        break;
      case 'pelaje':
        key = this.caracteristicas[this.characterIdIa - 1].pelaje;
        break;
      case 'vivo':
        key = this.caracteristicas[this.characterIdIa - 1].vivo;
        break;
      case 'capa':
        key = this.caracteristicas[this.characterIdIa - 1].capa;
        break;
      case 'traje':
        key = this.caracteristicas[this.characterIdIa - 1].traje;
        break;
      case 'casco':
        key = this.caracteristicas[this.characterIdIa - 1].casco;
        break;
    }

    if (key === valor || key2 === valor) {
      console.log(key, valor, key2, valor, "sí");
      this.lastAnswer = "Sí";
      console.log(key, 'sí', this.caracteristicas[this.characterIdIa - 1].id);
    }
    else {
      console.log(key, valor, key2, valor, "no");
      this.lastAnswer = "No";
      console.log(key, 'no', this.caracteristicas[this.characterIdIa - 1].id);
    }
  }

  selectGuessChangeHandler(event: any) {
    this.playerGuess = event.target.value;
  }

  adivinar() {
    if (confirm("¿Estás seguro que es " + this.playerGuess + "?")) {
      if (this.playerGuess === this.characterNombreIa) {
        console.log("¡Ganaste!")
      }
      else {
        console.log("Perdiste :(")
      }
    } else {
      // Do nothing!
      console.log('No estoy seguro');
    }
  }

  iaGuess() {
    const elemento = document.getElementById("boton-preguntar")! as HTMLButtonElement | null;

    if (!this.firstAnswer && !this.turnoPlayer) {
      if (confirm("¿Tu personaje es: humano?")) {
        this.firstAnswer = true;
        this.answerHumano = true;
        this.turnoPlayer = true;

        elemento!.disabled = false;

        this.checkProperty("humano", "sí");

        console.log(this.turnoPlayer, 'if');

      } else {
        this.turnoPlayer = true;
        this.answerHumano = true;

        elemento!.disabled = false;

        this.checkProperty("humano", "no");

        console.log(this.turnoPlayer, 'else');
      }
    }
    console.log(this.answerHombre, this.turnoPlayer, this.answerHumano);

    if (!this.answerHombre && !this.turnoPlayer && this.answerHumano) {
      if (confirm("¿Tu personaje es: hombre?")) {
        this.answerHombre = true;
        this.turnoPlayer = true;

        elemento!.disabled = false;

        this.checkProperty("sexo", "hombre");
      } else {
        this.answerHombre = true;
        this.turnoPlayer = true;

        elemento!.disabled = false;

        this.checkProperty("sexo", "mujer");
      }
    }

  }

  checkProperty(propiedad: string, valor: string, propiedad2?: string) {
    this.iaListaTemp = [];

    this.iaLista.forEach((value, index) => {
      let key;
      let key2;

      switch (propiedad) {
        case 'sexo':
          key = this.iaLista[index].sexo;
          break;
        case 'humano':
          key = this.iaLista[index].humano;
          break;
        case 'arma':
          key = this.iaLista[index].arma;
          break;
        case 'puesto1':
          key = this.iaLista[index].puesto1;
          key2 = this.iaLista[index].puesto2;
          break;
        case 'puesto2':
          key = this.iaLista[index].puesto2;
          key2 = this.iaLista[index].puesto1;
          break;
        case 'color1':
          key = this.iaLista[index].color1;
          key2 = this.iaLista[index].color2;
          break;
        case 'color2':
          key = this.iaLista[index].color2;
          key2 = this.iaLista[index].color1;
          break;
        case 'cabello':
          key = this.iaLista[index].cabello;
          break;
        case 'colorcabello':
          key = this.iaLista[index].colorcabello;
          break;
        case 'piel':
          key = this.iaLista[index].piel;
          break;
        case 'pelaje':
          key = this.iaLista[index].pelaje;
          break;
        case 'vivo':
          key = this.iaLista[index].vivo;
          break;
        case 'capa':
          key = this.iaLista[index].capa;
          break;
        case 'traje':
          key = this.iaLista[index].traje;
          break;
        case 'casco':
          key = this.iaLista[index].casco;
          break;
      }

      if (key === valor || key2 === valor) {
        console.log(key, valor, key2, valor, "sí");
        this.insertIaTempList(index + 1);
        this.lastAnswerIa = "Sí";
        this.lastAnswerBIa = true;
        console.log(key, 'sí', this.iaLista[index].id);
      }
      else {
        console.log(key, valor, key2, valor, "no");
        this.lastAnswerIa = "No";
        this.lastAnswerBIa = false;
        console.log(key, 'no', this.iaLista[index].id);
      }
    });
    console.log(this.iaListaTemp);
    console.log(this.iaLista);
    this.deleteFromIaList();
    console.log(this.iaListaTemp);
    console.log(this.iaLista);
  }
}