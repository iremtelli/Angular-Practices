import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hakkimizda',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './hakkimizda.component.html',
  styleUrls: ['./hakkimizda.component.scss'],
})
export class HakkimizdaComponent {}
