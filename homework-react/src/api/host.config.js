let port
let _localEnv = localStorage.getItem("setEnv")
const env = _localEnv || process.env.NODE_ENV;

// dev
const devPort = {
    BASE_URL: 'http://localhost:3001'
}
// fat
const fatPort = {
    BASE_URL: 'http://localhost:3001'
}
// production 
const proPort = {
    BASE_URL_ZMLEARN: 'http://localhost:3001'
}

switch(env){
    // dev
    case 'development':
        port = devPort;
        break;
    case 'fat':
        // fat
        port = fatPort;
        break;
    case 'production':
        // production
        port = proPort;
        break;
    default:
        port = devPort;
}

export default port