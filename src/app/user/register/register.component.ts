import { UpdateUsuarioDto } from './../../entities/user.entities';
import { Component, OnInit } from '@angular/core';
import { UsersModel } from 'src/app/entities/user.entities';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private usersServicesService: UsersServicesService) { }
  users: UsersModel[] = [];
  actualUsers: UpdateUsuarioDto={};

  ngOnInit(): void {
    this.getUsers();
    // this.getUser();
    // this.createUser();
    // this.updateUser();
    // this.deleteUser();
  }
  getUsers() {
    this.usersServicesService.getAll().subscribe((response) => {
      this.users = response;
    });
  }

  getUser() {
    this.usersServicesService.getOne(2).subscribe((response) => {
      console.log(response);
    });
  }
  createUser() {
    const data = {
      name: 'GRUPO 1',
      email: 'rupo1@gmail.com',
      password: 'grupo1',
      region: 'sierra',
      rolId: 1
    };
    this.usersServicesService.store(data).subscribe((response) => {
      console.log(response);
    });
  }

  updateUser() {
    const data = {
      name: 'GRUPO 1',
      email: 'rupo1@gmail.com',
      password: 'grupo1',
      region: 'sierra',
      rolId: 1
    };
    this.usersServicesService.update(data, 2).subscribe((response) => {
      console.log(response);
    });
  }

  deleteUser(id: UsersModel['id']) {
    this.usersServicesService.destroy(id).subscribe((response: any) => {
      this.users = this.users.filter(user => user.id != id);
      console.log(response);
    });
  }

}
