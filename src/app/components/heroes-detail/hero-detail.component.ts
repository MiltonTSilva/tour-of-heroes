import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero.interface';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-Detail.component.html',
  styleUrls: ['./hero-Detail.component.scss'],
})
export class heroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor() {}

  ngOnInit() {}
}
