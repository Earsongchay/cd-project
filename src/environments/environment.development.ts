export const environment = {
  production:false,
  HOST_URL: '/v1/api',
  KEYCLOAK: {
    URL: 'http://localhost:8080',
    realm: 'test',
    clientId: 'test-keycloak',
    grant_type: 'password',
    clientSecret: '',
  },
};
