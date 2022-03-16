import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnChanges {

  constructor(private renderer: Renderer2) {}
  ngOnChanges(changes: SimpleChanges): void {
   
  }

  ngOnInit(): void {
    (document.getElementById('navbar') as HTMLElement).classList.remove(
      'light'
    );
    const nav = document.getElementById('navbar') as HTMLElement;
    (document.getElementById('menuBtn') as HTMLElement).addEventListener('click',()=>{
      nav.classList.toggle('light')
    })

  }
  
}
