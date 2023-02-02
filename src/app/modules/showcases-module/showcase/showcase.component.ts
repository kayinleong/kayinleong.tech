import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'component-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css'],
})
export class ShowcasesComponent implements OnInit {
  @Input() organisationName!: string;
  @Input() organisationSubName!: string;
  @Input() organisationEventName!: string;
  @Input() logoFileName!: string;
  @Input() logoAltName!: string;
  @Input() showcaseUrl!: string;
  @Input() show: boolean = false;

  constructor(private saniter: DomSanitizer) {}

  ngOnInit(): void {}

  sanitize(url: string) {
    return this.saniter.bypassSecurityTrustResourceUrl(url);
  }

  showButtonOnClick() {
    this.show = true;
  }
}
