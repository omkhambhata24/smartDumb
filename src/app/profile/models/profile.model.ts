export interface Profile {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    department: number;
    gender: boolean;
    employment: string;
      
}


export interface Department{
    id: number,
    name: string
}