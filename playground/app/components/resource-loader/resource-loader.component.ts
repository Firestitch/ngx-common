import { Component } from '@angular/core';

import { loadJs } from '@firestitch/common';


@Component({
  selector: 'app-resource-loader',
  templateUrl: './resource-loader.component.html',
  styleUrls: ['./resource-loader.component.scss'],
})
export class ResourceLoaderComponent {

  constructor(
  ) {
    loadJs('https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyDwK5HDj6mtad3wQNzS6ZauLe7raegSPpo&loading=async')
      .subscribe(() => {
        console.log('Google Map loaded');
      });
  }

}


