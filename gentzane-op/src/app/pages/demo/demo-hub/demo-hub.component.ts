import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IDemo } from '../../../interfaces/idemo.interface';

@Component({
  selector: 'app-demo-hub',
  imports: [RouterLink],
  templateUrl: './demo-hub.component.html',
  styleUrl: './demo-hub.component.css',
})
export class DemoHubComponent {
  demos: IDemo[] = [
    {
      id: 0,
      title: 'Tap Dodge',
      description: 'Esquiva obstaculos',
      image: '',
      path: 'tap-dodge',
    },
  ];
}
