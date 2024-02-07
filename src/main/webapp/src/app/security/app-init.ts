import {KeycloakService} from "keycloak-angular";
import {resolve} from "@angular/compiler-cli";
import {environment} from "../../environments/environment.development";
import Keycloak, {KeycloakInstance} from "keycloak-js";
import KeycloakAuthorization from "keycloak-js/dist/keycloak-authz";
import {Injectable} from "@angular/core";



@Injectable({
  providedIn: 'root'
})
export class SecurityIdentity{

  constructor() {
  }

  private keycloak!: Keycloak

  private authorization!:any;

  initializer(): Promise<any> {
    const keycloak = new Keycloak(environment.keycloak)
    this.keycloak = keycloak
    return new Promise((resolve, reject) => {
      try{
        keycloak.init({onLoad: 'login-required', checkLoginIframe: true}).then(() => {
          this.authorization = new KeycloakAuthorization(this.keycloak)
        })
        resolve(resolve)
      } catch(error){
        reject(error)
      }
    });
    }

}

// export function initializer(keycloakService: KeycloakService): () => Promise<any> {
//   return (): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//       try{
//         await keycloakService.init({
//           config:environment.keycloak,
//           loadUserProfileAtStartUp: false,
//           initOptions: {
//             onLoad: 'login-required',
//             checkLoginIframe: true
//           }
//         })
//         resolve(resolve)
//       } catch(error){
//         reject(error)
//       }
//     });
//   }
// }
