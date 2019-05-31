class Informacao {

    constructor(data, pagador, valor, descricao, observacao, local, emitente, documento) {
        this._data = new Date(data);
        this._pagador = pagador;
        this._valor = valor * 1.0;
        this._descricao = descricao;
        this._observacao = observacao;
        this._local = local;
        this._emitente = emitente;
        this._documento = documento;
        Object.freeze(this);
    }

    get data() { return new Date(this._data) }
    get pagador() { return this._pagador }
    get valor() { return this._valor }
    get descricao() { return this._descricao }
    get observacao() { return this._observacao }
    get local() { return this._local }
    get emitente() { return this._emitente }
    get documento() { return this._documento }


}