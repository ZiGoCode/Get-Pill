import { Injectable } from "@angular/core";
import { IRegister } from 'src/app/components/register/register.interface';
import { ILogin } from 'src/app/components/login/iogin.interface';
import { IProfile } from 'src/app/authentication/components/profile/profile.interface';

@Injectable()

export class AccountService {

    private mockUserAccount: IAccount[] = [
        {
            id: '1',
            firstname: 'Naluebet',
            lastname: 'Manpati',
            email: 'ng@gmail.com',
            password: '123456',
            position: 'Frontend Developer',
            image: 'https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.0-9/53862965_1980693202028225_645704180689797120_n.jpg?_nc_cat=111&_nc_eui2=AeE_Tw556jOCff7M9g0eyxMDxtCDgMKzSzP9mdEPoS2TBe_ErjfZhtXd51__cSSVHr2Q7BtScHl_5UBqetgAC3qB_5_N9DwVE_P7wEJi4HqTTg&_nc_ht=scontent.fbkk2-6.fna&oh=10759b2f5cade4c1e352283a1dd9d9b4&oe=5D600FFF',
            created: new Date(),
            updated: new Date(),
        },
        {
            id: '2',
            firstname: 'Naluebet',
            lastname: 'Manpati',
            email: 'fn@gmail.com',
            password: '123456',
            position: 'Backend Developer',
            created: new Date(),
            updated: new Date(),
        }
    ];

    onUpdateProfile(accessToken: string, model: IProfile) {
        return new Promise((resolve, reject) => {
            const userProfile = this.mockUserAccount.find(user => user.id == accessToken);
            if (!userProfile) return reject({ Message: 'ไม่มีผู้ใช้ในระบบ' });
            userProfile.firstname = model.firstname;
            userProfile.lastname = model.lastname;
            userProfile.position = model.position;
            userProfile.image = model.image;
            userProfile.updated = new Date();
            resolve(userProfile);
        })
    }

    getUserLogin(accessToken: string) {
        return new Promise<IAccount>((resolve, reject) => {
            const userLogin = this.mockUserAccount.find(m => m.id === accessToken);
            if (!userLogin) return reject({ Message: 'accessToken ไม่ถูกต้อง' });
            resolve(userLogin);
        });
    }

    onLogin(model: ILogin) {
        return new Promise<{ accessToken: string }>((resolve, reject) => {
            const userLogin = this.mockUserAccount.find(item => item.email === model.email && item.password === model.password);
            if (!userLogin) return reject({ Message: 'ชื้อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง' });
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