function validateRequest(request) {
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let regexURI = /^([A-Za-z0-9.]+)$|[*]/g;
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let regexMessage = /^([^<>\\&'"]*)$/g;

    if (request.method === undefined || !methods.includes(request.method)) throw new Error('Invalid request header: Invalid Method');
    if (request.uri === undefined || !request.uri.match(regexURI)) throw new Error('Invalid request header: Invalid URI');
    if (request.version === undefined || !versions.includes(request.version)) throw new Error('Invalid request header: Invalid Version');
    if (request.message === undefined || !request.message.match(regexMessage)) throw new Error('Invalid request header: Invalid Message');

    return request;
}
validateRequest();