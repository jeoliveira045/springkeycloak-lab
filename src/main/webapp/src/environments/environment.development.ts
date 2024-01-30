export const environment = {
  production: false,
  serverUrl: "/api/",
  keycloak: {
    issuer: 'http://localhost:8085/auth/',
    realm: 'springboot-lab-realm',
    clientId: 'springboot-angular-lab'
  }

};
