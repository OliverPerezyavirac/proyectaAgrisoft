import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CreateUsuarioDto, UpdateUsuarioDto, UsersModel } from '../entities/user.entities';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {
  
  constructor(private httpClient: HttpClient) { }
  readonly API_URL: string = 'http://api.escuelajs.co/api/v1/products';

  //*Consultar usuarios
  getAll(): Observable<UsersModel[]> {
    return this.httpClient.get<UsersModel[]>(this.API_URL);
  }
  //*Consultar usuarios por ID
  getOne(id: UsersModel['id']): Observable<UsersModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<UsersModel>(url);
  }
  //*Crear ususarios
  store(user: CreateUsuarioDto): Observable<UsersModel> {
    return this.httpClient.post<UsersModel>(this.API_URL, user);
  }
  //*Actualizar ususarios
  update(user: UpdateUsuarioDto, id: UsersModel['id']): Observable<UsersModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<UsersModel>(url, user);
  }
  //*Eliminar ususarios
  destroy(id: UsersModel['id']): Observable<any> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
      return response.rta;
    })
    );
  }

}

