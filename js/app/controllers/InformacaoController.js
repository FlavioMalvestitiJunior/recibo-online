class InformacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._informacaoView = new InformacaoView($('#recibo-preenchido'));
    }

    gerar(event) {
        event.preventDefault();
        let $ = document.querySelector.bind(document);
        let informacao = this._criaInfromacao();
        $("#recibo-preencher").classList.add('hide');
        this._informacaoView.update(informacao);
    }
    imprimir() {
        let $ = document.querySelector.bind(document);
        $("#btn-groups").classList.add('hide');
        print();
        $("#btn-groups").classList.remove('hide');
    }
    voltar() {
        let $ = document.querySelector.bind(document);
        $("#recibo-preencher").classList.remove('hide');

        this._informacaoView.limpar();

    }

    _criaInfromacao() {
        let $ = document.querySelector.bind(document);
        return new Informacao(
            $('#data').value,
            $('#pagador').value,
            $('#valor').value,
            $('#descricao').value,
            $('#observacao').value,
            $('#local').value,
            $('#emitente').value,
            $('#documento').value
        );
    }
    _hideBody() {
        let $ = document.querySelector.bind(document);
        $('#recibo-preencher').classList.add('hide');
    }
}