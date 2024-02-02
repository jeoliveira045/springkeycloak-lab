import {KeycloakService} from "keycloak-angular";
import {resolve} from "@angular/compiler-cli";
import {environment} from "../../environments/environment.development";

export function  initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try{
        await keycloak.init({
          config:{
            url: environment.keycloak.issuer,
            realm: environment.keycloak.realm,
            clientId: environment.keycloak.clientId
          },
          loadUserProfileAtStartUp: true,
          initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: true
          },
          bearerExcludedUrls: ['/assets']
        });
        resolve(resolve);
      } catch(error){
        console.log(error)
        reject(error)
      }
    });
  }
}
