class Registrar_comunidadService {

    constructor() {
        this.URI = `/api/Registrar_comunidad`;
    }

    async getBooks() {
        const response = await fetch(this.URI);    
        const Registrar_comunidad = await response.json();
        return Registrar_comunidad;
    }

    async postBook(Registrar_comunidad) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: Registrar_comunidad
        });
        const data = await res.json();
    }

    async deleteBook(Registrar_comunidadId) {
        const res = await fetch(`${this.URI}/${Registrar_comunidadId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'Delete'
        });
        const data = await res.json();
        console.log(data);
    }

}

export default Registrar_comunidadService;