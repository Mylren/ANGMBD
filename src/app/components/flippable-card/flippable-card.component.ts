import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'flippable-card',
  templateUrl: './flippable-card.component.html',
  styleUrls: ['./flippable-card.component.scss']
})
export class FlippableCardComponent implements OnInit {
  @ViewChild('container', { read: ElementRef, static:false }) label: ElementRef;
  @ViewChild('letter', { read: ElementRef, static:false }) letter: ElementRef;

  startTyping: Boolean = false;
  startTyping2: Boolean = false;
  isFlipped = false;
  bday: Boolean = false;
  msg1_end: Boolean = false;
  next: Boolean = false;
  test = false;

  constructor() { }

  ngOnInit(): void {
  }

  flip(): void{
    this.isFlipped = !this.isFlipped;
    this.startTyping = true;
  }

  showNextArrow(): void {
    this.next = true;
    this.label.nativeElement.classList.add('label_show')
  }

  advancePage(): void {
    if (this.next){
      this.letter.nativeElement.classList.add('delete')
      this.letter.nativeElement.addEventListener('animationend', () => {
        this.letter.nativeElement.style.display = 'none'
        this.startTyping2 = true
      })
    }
  }

  signLetter(): void {
    const M1 = document.getElementById('M-1')
    const M2 = document.getElementById('M-2')

    M1.classList.add('sign')
    M1.addEventListener('animationend', () => {
      M2.classList.add('sign')
    })
  }
}
