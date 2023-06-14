export interface User {
    id: number;
    email: string;
    name: string;
    createdAt: Date;
}

export interface UserCreateRequest {
    name: string;
    email: string;
}

export interface UserUpdateRequest {
    createdAt?: Date;
    email: string;
    name: string;
}
