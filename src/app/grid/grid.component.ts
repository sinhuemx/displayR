import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

export interface PeriodicElement {
	id: number
  temp1: number;
  temp2: number;
  temp3: number;
  temp4: number;
  temp5: number;
  temp6: number;
  temp7: number;
  temp8: number;
  temp9: number;
  temp10: number;
	year: number;
	city: string;
	}
const ELEMENT_DATA: PeriodicElement[] = [
	{
    id:1,
    temp1: 1000,
    temp2: 1500,
    temp3: 2000,
    temp4: 2500,
    temp5: 3000,
    temp6: 3500,
    temp7: 4000,
    temp8: 4500,
    temp9: 5000,
    temp10: 5500,
    year: 2010,
    city: "Bronx",
  }
	];

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  standalone: true,
  imports: [
		MatTableModule,
		CommonModule,
    MatGridListModule
	]
})

export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dataSource = ELEMENT_DATA;
 

}

 