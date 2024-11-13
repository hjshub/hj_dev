export default class _gb {
  wW: number;
  wH: number;
  html: HTMLHtmlElement | any;
  body: HTMLBodyElement | any;
  layout: HTMLElement | any;
  main: HTMLElement | any;
  header: HTMLElement | any;
  btnAllMenuOpen: any;
  title: NodeListOf<Element>;
  anchor: NodeListOf<Element>;
  rRange: NodeListOf<Element>;
  //CommonFunction: () => { init: () => void; isMob: () => boolean; scrollReset: () => void; scrollGage: () => any; animate: () => void; toggleTheme: () => void; };
  scrollTop: number;
  client_H: number;
  scroll_H: number;
  scrollSize: number;
  listTrg: HTMLElement | any;
  animate: NodeListOf<Element>;
  scrollGage: any;

  constructor() {
    this.wW = window.innerWidth;
    this.wH = window.innerHeight;
    this.html = document.querySelector('html');
    this.body = document.querySelector('body');
    this.layout = document.getElementById('layout');
    this.main = document.getElementById('main');
    this.header = document.getElementById('gnb');
    this.btnAllMenuOpen = document.querySelector('.button-allMenu-open');
    this.title = document.querySelectorAll('.r-tit');
    this.anchor = document.querySelectorAll('.anchor');
    this.rRange = document.querySelectorAll('.r-range');
  }
}
