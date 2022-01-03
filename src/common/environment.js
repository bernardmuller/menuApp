let envConfig;

let env = (window.origin && window.origin.endsWith('.') && 'android') || process.env.NODE_ENV;

if (env === 'development') {

  envConfig = {
    name: 'Development',
    uiHost: 'http://localhost:3000/',
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