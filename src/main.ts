import './polyfills';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // includes NgIf and TitleCasePipe
import { bootstrapApplication } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { GridComponent } from './app/grid/grid.component';
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		// import standalone Components, Directives and Pipes 
		GridComponent,
		// or NgModules like Angular Material
		CommonModule,
		MatCardModule,
		MatGridListModule
		
	],
	template: `
    <mat-card>
    	<h2 app-highlight>{{name | titlecase}}</h2>
	    <app-grid></app-grid>
    </mat-card>
  `,
})
export class ExampleStandaloneComponent {
	name = 'Carlos Sinhue Garcia Hernandez';
}

bootstrapApplication(ExampleStandaloneComponent)
	.then((ref) => {
		// Ensure Angular destroys itself on hot reloads.
		if (window['ngRef']) {
			window['ngRef'].destroy();
		}
		window['ngRef'] = ref;

		// Otherwise, log the boot error
	})
	.catch((err) => console.error(err));
