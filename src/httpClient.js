import superagent from "superagent";
const methods = ['get', 'post', 'put', 'patch', 'del'];

export default class HttpClient {
    constructor() {
        methods.forEach(method =>
            this[method] = (path, {params, data, headers, attach} = {}) => new Promise((resolve, reject) => {
                const request = superagent[method](path);

                if (params) {
                    request.query(params);
                }
                if (data) {
                    request.send(data);
                }

                if (headers) {
                    for (const key of Object.keys(headers)) {
                        request.set(key, headers[key]);
                    }
                }
                if (attach) {
                    for (const key of Object.keys(attach)) {
                        request.attach(key, attach[key]);
                    }
                }

                request.end((err, {body} = {}) =>
                    err ? reject(body || err) : resolve(body));
            }));
    }
}