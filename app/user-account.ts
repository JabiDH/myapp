export class UserAccount{
    private Id: number;
    private Email: string;
    private Password: string;

    constructor(email: string, password: string){
        this.Email = email;
        this.Password = password;
    }
}