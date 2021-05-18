class LoginService {

    constructor() {
        this.URI = `/api/Login`;
    }

    async getBooks() {
        const response = await fetch(this.URI);    
        const Login = await response.json();
        return Login;
    }

    async postBook(Login) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: Login
        });
        const data = await res.json();
    }

    async deleteBook(LoginId) {
        const res = await fetch(`${this.URI}/${LoginId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'Delete'
        });
        const data = await res.json();
        console.log(data);
    }

}

export default LoginService;