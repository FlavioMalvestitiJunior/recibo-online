class InformacaoView extends View {

    template(model) {
        let moneyTalks = new MoneyTalks();
        return `
            <div id="recibo">
                <form class="form">
                    <div class="titulo-principal container col-xs-12 media-bottom">
                        <div id="header-title " class="col-xs-8 col-xs-6 ">
                            <h1>
                                <label id="titulo ">Recibo</label>
                            </h1>
                        </div>
                        <div id="valor " class="col-xs-4 col-xs-6 alert alert-info ">
                            <h4>
                                <label id="titulo ">Valor: R$ ${moneyTalks.formataNumberToReal(model.valor)}</label>
                            </h4>
                        </div>
                    </div>
                    <br/>
                    <div class="container">
                        <div id="body  " class="col-md-12">
                            <hr />
                            <div class="form-group ">
                                <label id="pagador ">Recebi de: ${model.pagador}</label>
                            </div>
                            <div class="form-group ">
                                <label id="valorDescricao ">A quantia de: ${moneyTalks.valorPorExtenso(model.valor)}</label>
                            </div>
                            <div class="form-group ">
                                <label id="observacao ">Referente: ${model.descricao}</label>
                            </div>
                            <div class="form-group ">
                                <label id="observacao ">Observações: ${model.observacao}</label>
                            </div>
                            <hr />
                            <div class="form-group ">
                                <label id="texto ">Sendo verdade, dou plena e rasa quitação</label>
                            </div>
                            <div class="form-group ">
                                <label id="local-data ">${model.local}, ${DateHelper.dataParaTexto(model.data)}</label>
                            </div>
                        </div>             
                        <div class="form-group text-center ">
                            <label id="tracer ">____________________________________________</label>
                            <br />
                            <label id="emitente ">${model.emitente}</label>
                            <br />
                            <label id="documento ">${model.documento}</label>
                        </div>
                    </div>
                </form>
            </div>
        <div id ='btn-groups' class="text-center ">
            <button onclick="informacaoController.voltar() " class="btn btn-primary text-center " type="button ">
                Voltar
            </button>
            <button onclick="informacaoController.imprimir() " class="btn btn-primary text-center " type="button ">
                Imprimir
            </button>
        </div>   
        `;
    }
}