class FetchWrapper {    

    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(endpoint) {
        return fetch(this.baseURL + endpoint)
            .then(response => response.json());
    }   

    post(endpoint, body) {
        // pass the endpoint and body parameters to _send
        // and specify the method to be 'post'
        return this._send("post", endpoint, body);
    }
  

    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method, // object shorthand
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "niagara",
                "Host" : "login.microsoftonline.com"
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}

const API = new FetchWrapper('https://login.microsoftonline.com')

API.post('/{55e67ea6-2636-4be5-8eaa-0b5e6de9ed4f}/oauth2/v2.0/token', `grant_type=client_credentials&
scope=https%3A%2F%2Fgraph.microsoft.com%2F.default&
client_secret=kVa1CtmyMS3vaR3DT~_Lw48whA.~7g~S6z&
client_id=a9355f0d-def3-411a-8c33-6b4d6b27972f`).then(data => {
    console.log(data)
})