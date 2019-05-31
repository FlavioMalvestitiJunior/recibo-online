class DateHelper {
    constructor() {
        throw new Error('DateHelper não pode ser instanciada');
    }

    static dataParaTexto(data) {
        return `${data.getUTCDate()}/${data.getUTCMonth() + 1}/${data.getUTCFullYear()}`;
    }
    static textoParaData(texto) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
            throw new Error('Deve estar no fromato aaaa-mm-dd');
        }
        return new Date(...texto.split('-').map((item, index) => item - index % 2));
    }
}