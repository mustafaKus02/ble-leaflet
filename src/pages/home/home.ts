import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MapOptions, latLng, tileLayer, circle, polygon, marker, geoJSON} from "leaflet";
import {Point} from "geojson";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public options:MapOptions;
  private layersControl:any;
  private  layers:any;

  private point:Point={type:'Point'};


  constructor(public navCtrl: NavController ) {


   this.point.coordinates=[39.9333635, 32.85974190000002]


    this.options = {
      layers: [
       // tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
          geoJSON(this.point, {color:'red'})
      ],
      zoom:13,
      center: latLng(39.9333635, 32.85974190000002)
    };

    this.layersControl = {
      baseLayers: {
        'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
        'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      },
      overlays: {
        'Big Circle': circle([ 39.9333635, 32.85974190000002 ], { radius: 5000 }),
        'Big Square': polygon([[ 39.9333635, 32.85974190000002 ], [ 39.4333635, 32.65974190000002 ], [ 39.7333635, 32.45974190000002 ], [ 39.9333635, 32.85974190000002 ]])
      }
    }

    this.layers = [
      //circle([ 39.9733635, 32.85974190000002 ], { radius: 5000, color:'black' }),
      //polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]),
      //marker([ 39.9333635, 32.85974190000002 ])
      geoJSON(this.point)
    ];


  }








}
