import { setTimeout } from "timers";

export default class AuthenticationService {
    static isAuthenticated: boolean = false; // savoir si l'user est connecté ou non, false car user non connecté

    // simule une connexion via une api externe, renvoie true si connecté ou false si echec
    static login(username: string, password: string): Promise<boolean> {
        // login fake, pour tester rapidement
        const isAuthenticated = (username === 'pikachu' && password === 'pikachu');

        return new Promise(resolve => {
            setTimeout(() => {
                this.isAuthenticated = isAuthenticated;
                resolve(isAuthenticated);
            }, 1000);
        })
    }
}