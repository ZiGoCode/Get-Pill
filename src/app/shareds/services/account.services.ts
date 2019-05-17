import { Injectable } from "@angular/core";
import { IRegister } from 'src/app/components/register/register.interface';
import { ILogin } from 'src/app/components/login/iogin.interface';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable()

export class AccountService {

    mockUserAccount: IAccount[] = [
        {
            id: '1',
            firstname: 'Naluebet',
            lastname: 'Manpati',
            email: 'ng@gmail.com',
            password: '123456',
            position: 'Developer',
            image: 'https://www.facebook.com/photo.php?fbid=1980693198694892&set=a.108601655904065&type=3&source=11&referrer_profile_id=100002626939882',
            created: new Date(),
            updated: new Date(),
        }
    ];

    onLogin(model: ILogin) {
        return new Promise<{accessToken: string}>((resolve, reject) => {
            const userLogin = this.mockUserAccount.find(item => item.email === model.email && item.password === model.password);
            if (!userLogin) return reject({Message: 'ชื้อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง'});
            resolve({
                accessToken: userLogin.id
            });
        });
    }

    onRegister(model: IRegister) {
        model['id'] = Math.random();
        return new Promise((resolve, reject) => {
            this.mockUserAccount.push(model)
            resolve(model);
        });
    }

}

export interface IAccount {
    firstname: string;
    lastname: string;
    email: string;
    password: string;

    id?: any;
    position?: string;
    image?: string;
    created?: Date;
    updated?: Date;
}