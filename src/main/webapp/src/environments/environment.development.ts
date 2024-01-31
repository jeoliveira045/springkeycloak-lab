export const environment = {
  production: false,
  serverUrl: "/api",
  keycloak: {
    issuer: 'http://localhost:8085/auth/',
    realm: 'springboot-lab',
    clientId: 'springboot-angular-lab-frontend'
  }
};
