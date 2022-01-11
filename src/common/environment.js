let envConfig;

let env = (window.origin && window.origin.endsWith('.') && 'android') || process.env.NODE_ENV;

if (env === 'development') {

  envConfig = {
    name: 'Development',
    uiHost: 'https://munchies-api-5fqmkwna4q-nw.a.run.app',
    apiHost: '/',
    assetBase: '/assets',
  };
}

if (env === 'production') {

  envConfig = {
    name: 'Production',
    uiHost: '/',
    apiHost: '',
    assetBase: '/assets',
  };
}

export const Environment = envConfig;