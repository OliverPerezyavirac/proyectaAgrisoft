import { RolModel } from './rol.entities';

export interface UsersModel {
    id: number;
    name: string;
    email: string;
    password: string;
    region: string;
    rol: RolModel;
}
export interface CreateUsuarioDto extends Omit<UsersModel, 'id' | 'rol'> {
    rolId: number;
}

export interface UpdateUsuarioDto extends Partial<UsersModel> {
    rolId?: number;
}