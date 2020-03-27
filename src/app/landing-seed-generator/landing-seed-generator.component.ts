import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-seed-generator',
  templateUrl: './landing-seed-generator.component.html',
  styleUrls: ['./landing-seed-generator.component.css']
})
export class LandingSeedGeneratorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // use faker library to generate a seed
    const seed = faker.internet.password(8);
    // route to the lootbox home using the seed
    this.router.navigate([`/lootbox/${seed}`]);
  }

}
