import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from './model/device';
import { NgForm } from '@angular/forms';
import { ApiServiceService } from './api/api-service.service';

const INITIAL_STATE = { label: null, os: null };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  devices: Device[] = [];
  active: any = INITIAL_STATE;

  constructor(private http: HttpClient, private apiService: ApiServiceService<Device[] | any>) {
    // console.log ('environment:', env);
    this.getAll();
  }

  getAll() {
    this.apiService.get('http://localhost:3000/devices').subscribe((result) => (this.devices = result));
  }// Fine getAll

  setActive(device: Device) {
    console.log(device);
    this.active = device;
  }

  delete(event: MouseEvent, device: Device) {
    this.apiService
      .delete(`http://localhost:3000/devices/${device.id}`)
      .subscribe(() => {
        const index = this.devices.indexOf(device);
        this.devices.splice(index, 1);
      });
  }// Fine delete

  save(form: NgForm) {
    if (this.active.id) {
      this.edit(form.value);
    } else {
      this.add(form.value);
      form.reset();
    }
  }// Fine save

  add(device: Device) {
    this.apiService
      .post(`http://localhost:3000/devices`, device)
      .subscribe((res) => {
        this.devices.push(res);
        this.reset();
      });
  }// Fine add

  edit(device: Device) {
    const newDevice = Object.assign({}, this.active, device);

    this.apiService
      .put(`http://localhost:3000/devices/${newDevice.id}`, newDevice)
      .subscribe((res) => {
        const index = this.devices.findIndex(
          (device) => device.id === newDevice.id
        );
        this.devices[index] = newDevice;
      });
  } //Fine edit

  reset() {
    this.active = INITIAL_STATE;
  }
}