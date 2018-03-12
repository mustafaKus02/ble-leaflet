import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapOptions, latLng, tileLayer, circle, polygon, marker, geoJSON, point} from "leaflet";
import {HttpClient} from "@angular/common/http";
import {FeatureCollection} from "geojson";




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public options:MapOptions;
  private layersControl:any;
  private  layers:any;

  private geoJSON:FeatureCollection<any,any>;


  constructor(public navCtrl: NavController, http:HttpClient ) {


    http.get("http://indoor.keydata.com.tr/indoor/data/alan.json").subscribe(data=> {this.geoJSON=data;


      /*geoJSON([{
          type: 'Polygon',
          coordinates:
            [[[ 39.9333635, 32.85974190000002 ], [ 39.4333635, 32.65974190000002 ], [ 39.7333635, 32.45974190000002 ], [ 39.9333635, 32.85974190000002 ]]]
        }, {type:'Point', coordinates:[39.9333635, 32.8597419000000]}] as any,
        { style: () => ({ color: '#ff7800' })})*/


      this.options = {
        layers: [
          //tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
          geoJSON((this.geoJSON))
        ],
        zoom:5,
        center: latLng(35.408422, 38.767952)
      };

    })

      debugger;


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
      //geoJSON(this.point)
    ];


  }

  showMap(){
    return this.options!=undefined;
  }








}
