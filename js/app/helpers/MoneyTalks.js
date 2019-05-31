class MoneyTalks {
    constructor() {
        this._extenso = [];
        this._extenso[1] = 'um';
        this._extenso[2] = 'dois';
        this._extenso[3] = 'tres';
        this._extenso[4] = 'quatro';
        this._extenso[5] = 'cinco';
        this._extenso[6] = 'seis';
        this._extenso[7] = 'sete';
        this._extenso[8] = 'oito';
        this._extenso[9] = 'nove';
        this._extenso[10] = 'dez';
        this._extenso[11] = 'onze';
        this._extenso[12] = 'doze';
        this._extenso[13] = 'treze';
        this._extenso[14] = 'quatorze';
        this._extenso[15] = 'quinze';
        this._extenso[16] = 'dezesseis';
        this._extenso[17] = 'dezessete';
        this._extenso[18] = 'dezoito';
        this._extenso[19] = 'dezenove';
        this._extenso[20] = 'vinte';
        this._extenso[30] = 'trinta';
        this._extenso[40] = 'quarenta';
        this._extenso[50] = 'cinquenta';
        this._extenso[60] = 'sessenta';
        this._extenso[70] = 'setenta';
        this._extenso[80] = 'oitenta';
        this._extenso[90] = 'noventa';
        this._extenso[100] = 'cem';
        this._extenso[200] = 'duzentos';
        this._extenso[300] = 'trezentos';
        this._extenso[400] = 'quatrocentos';
        this._extenso[500] = 'quinhentos';
        this._extenso[600] = 'seiscentos';
        this._extenso[700] = 'setecentos';
        this._extenso[800] = 'oitocentos';
        this._extenso[900] = 'novecentos';
    }

    valorPorExtenso(valor) {
        let restante = valor;
        let retorno = this._trilhoes(restante);
        let extenso = retorno[0];
        restante = retorno[1];
        retorno = this._bilhoes(restante);
        extenso += retorno[0];
        restante = retorno[1];
        retorno = this._milhoes(restante);
        extenso += retorno[0];
        restante = retorno[1];
        retorno = this._milhares(restante);
        extenso += retorno[0];
        restante = retorno[1];
        retorno = this._centenas(restante);
        extenso += retorno[0];
        restante = retorno[1];
        retorno = this._dezenas(restante);
        extenso += retorno[0];
        restante = retorno[1];
        retorno = this._unidades(restante);
        extenso += retorno[0];
        restante = retorno[1];

        if (Math.trunc(valor) == 1) {
            extenso += ' real';
        } else if (extenso.match('ão') || extenso.match('ões')) {
            extenso += ' de reais'
        } else {
            extenso += ' reais'
        }

        if (restante > 0) {
            extenso += ' e'


            valor = restante * 100;
            retorno = this._dezenas(valor);
            extenso += retorno[0];
            restante = retorno[1];

            retorno = this._unidades(restante);
            extenso += retorno[0];
            restante = retorno[1];

            if (Math.trunc(valor) == 1) {
                extenso += ' centavo';
            }
            if (Math.trunc(valor) > 0) {
                extenso += ' centavos'
            }
        }
        return extenso;

    }
    _trilhoes(valor) {
        let trilhao = 1000000000000;
        let retorno = "";
        if (valor >= trilhao) {
            let trilhoes = Math.trunc(valor / trilhao);
            valor = valor - (trilhoes * trilhao);
            if (trilhoes > 1) {
                retorno += this._getCentena(trilhoes) + ' trilhões';
            } else {
                retorno += this._extenso[trilhoes] + ' trilhão';
            }
            if ((valor > 0) && Math.trunc(valor / trilhao) == 0) {
                retorno += '';
            } else if (valor > 0) {
                retorno += ' e';
            }

        }
        return [].concat(retorno, parseFloat(valor).toFixed(2));
    }

    _bilhoes(valor) {
        let bilhao = 1000000000;
        let retorno = "";

        if (valor >= bilhao) {
            let bilhoes = Math.trunc(valor / bilhao);
            valor = valor - (bilhoes * bilhao);

            if (bilhoes > 1) {
                retorno += this._getCentena(bilhoes) + ' bilhões';
            } else {
                retorno += " " + this._extenso[bilhoes] + ' bilhão';
            }

            if ((valor > 0) && Math.trunc(valor / bilhao) == 0) {
                retorno += '';
            } else if (valor > 0) {
                retorno += ' e';
            }

        }
        return [].concat(retorno, parseFloat(valor).toFixed(2));
    }

    _milhoes(valor) {
        let milhao = 1000000;
        let retorno = "";

        if (valor >= milhao) {

            let milhoes = Math.trunc(valor / milhao);
            valor = valor - (milhoes * milhao);

            if (milhoes > 1) {
                retorno += this._getCentena(milhoes) + ' milhões';
            } else {
                retorno += this._extenso[milhoes] + ' milhão';
            }

            if ((valor > 0) && Math.trunc(valor / milhao) == 0) {
                retorno += '';
            } else if (valor > 0) {
                retorno += ' e';
            }

        }
        return [].concat(retorno, parseFloat(valor).toFixed(2));

    }

    _milhares(valor) {
        let retorno = "";
        if (valor >= 1000) {

            let milhas = Math.trunc(valor / 1000)
            valor = valor - (milhas * 1000);
            retorno += this._getCentena(milhas) + ' mil';

            if ((valor > 0) && Math.trunc(valor / 100) == 0) {
                retorno += '';
            } else if (valor >= 1) {
                retorno += ' e';
            }

        }
        return [].concat(retorno, parseFloat(valor).toFixed(2));

    }
    _centenas(valor) {
        let retorno = "";
        let valorAux = valor;

        if (valor >= 100) {
            let centenas = Math.trunc(valor / 100)
            valor = valor - (centenas * 100);
            if (centenas === 1) {
                if (valorAux % 100 != 0) {
                    retorno += ' cento';
                } else {
                    retorno += ' ' + this._extenso[100];
                }
            } else {
                retorno += ' ' + this._extenso[centenas * 100];
            }

            if (valor >= 1) {
                retorno += ' e';
            }
        }
        return [].concat(retorno, parseFloat(valor).toFixed(2));

    }

    _dezenas(valor) {
        let retorno = "";
        if (valor >= 10 && valor <= 19) {
            retorno += ' ' + this._extenso[Math.trunc(valor)];
            valor = valor - Math.trunc(valor);
        } else if (valor > 19) {
            let dezenas = Math.trunc(Math.trunc(valor) / 10)
            valor = valor - (dezenas * 10);
            retorno += ' ' + this._extenso[dezenas * 10];
            if ((valor > 0) && Math.trunc(valor / 1) <= 0) {
                retorno += '';
            } else if (valor >= 1) {
                retorno += ' e';
            }
        }
        return [].concat(retorno, parseFloat(valor).toFixed(2));
    }

    _unidades(valor) {
        let retorno = "";
        if (Math.trunc(valor) != 0) {
            let valorAux = valor;
            retorno = ' ' + this._extenso[Math.trunc(valor)];
            valor = valor - Math.trunc(valor);
        }
        return [].concat(retorno, parseFloat(valor).toFixed(2));
    }

    _getCentena(valor) {
        let retorno = this._centenas(valor);
        let extenso = retorno[0];
        valor = retorno[1];
        retorno = this._dezenas(valor);
        extenso += retorno[0];
        valor = retorno[1];
        retorno = this._unidades(valor);
        extenso += retorno[0];

        return extenso;

    }
    formataNumberToReal(valor) {
        valor = valor.toFixed(2);
        valor += "";
        valor = valor.replace(".", ",");
        return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    }
}