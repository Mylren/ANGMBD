import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.scss']
})

export class GiftComponent implements OnInit {
  @ViewChild('gift', { read: ElementRef, static:false }) gift: ElementRef;
  @ViewChild('lid', { read: ElementRef, static:false }) lid: ElementRef;
  @ViewChild('contentcard', { read: ElementRef, static:false }) contentcard: ElementRef;
  @ViewChild('content', { read: ElementRef, static:false }) content: ElementRef;
  @ViewChild('box', { read: ElementRef, static:false }) box: ElementRef;

  gotClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  /* -------------- ESTADO INICIAL -------------- */
  hoverGift(event: Event) {
    if (!this.gotClicked){
      this.lid.nativeElement.classList.add('lid_hover')
      this.contentcard.nativeElement.classList.add('content_hover')
    }

  }

  leaveGift(event: Event){
    if (!this.gotClicked) {
      this.contentcard.nativeElement.classList.remove('content_hover')
      setTimeout(() => {
        this.lid.nativeElement.classList.remove('lid_hover')
      }, 300)
    }
  }

  triggerClick(event: Event){
    this.gotClicked = true;

    let gift = this.gift.nativeElement
    let box = this.box.nativeElement
    let lid = this.lid.nativeElement
    let content = this.contentcard.nativeElement

    lid.style.transformOrigin = 'center'
    box.classList.add('box_click')
    lid.classList.add('lid_click')
    box.addEventListener('animationend', () => {
      box.classList.add('box_click-reverse')
      box.addEventListener('animationend', () => {
        content.style.transition = 'all cubic-bezier(0.32,0.84,0.57,1.38) .6s'
        content.classList.remove('content_hover')
        this.openedGiftOnClick()
      })
    })
  }
  /* ------------------------------------------ */

  /* -------------- PRESENTE ABERTO -------------- */

  private openedGiftOnClick = () => {

    let content = this.contentcard.nativeElement

    this.gift.nativeElement.removeEventListener('click', this.openedGiftOnClick)
    content.classList.remove('opened_gift_hover')
    content.classList.add('opened_gift_click')
    content.addEventListener('animationend', () => {
      this.content.nativeElement.style.zIndex = 1
      content.classList.add('opened_gift_click-end')
    })
  }
}
