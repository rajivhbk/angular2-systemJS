
export class Address{
    street: string;
    city: string;
    suite: string;
    zipcode: string;
}
export class User{
    id?:string;
    name: string;
    email: string;
    phone: string;
    address = new Address;
}