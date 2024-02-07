import {KeycloakService} from "keycloak-angular";
import {resolve} from "@angular/compiler-cli";
import {environment} from "../../environments/environment.development";
import Keycloak from "keycloak-js";

export function  initializer(keycloak: Keycloak): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try{
        keycloak = new Keycloak(environment.keycloak)
        await keycloak.init({
            onLoad: 'login-required',
            checkLoginIframe: false
        });
        resolve(resolve);
      } catch(error){
        reject(error)
      }
    });
  }
}
