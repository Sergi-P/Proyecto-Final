class RegistrarService {

    constructor() {
        this.URI = `/api/Registrar`;
    }

    async getRegistrar() {
        const response = await fetch(this.URI);    
        const Registrar = await response.json();
        return Registrar;
    }

    async postRegistrar(Registrar) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: Registrar
        });
        const data = await res.json();
    }

    async deleteRegistrar(RegistrarId) {
        const res = await fetch(`${this.URI}/${RegistrarId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'Delete'
        });
        const data = await res.json();
        console.log(data);
    }

}

export default RegistrarService;