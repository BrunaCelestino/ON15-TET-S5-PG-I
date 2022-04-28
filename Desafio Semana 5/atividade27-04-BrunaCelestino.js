class Jogador {
    constructor(nome, posicao, dataNascimento, nacionalidade, altura, peso) {
        this.nome = nome;
        this.posicao = posicao;
        this.dataNascimento = dataNascimento;
        this.nacionalidade = nacionalidade;
        this.altura = altura;
        this.peso = peso;

    } imprimirDados(jogador) {
        console.log(jogador);

    } calcularIdade(ano) {
        const hoje = ano;

        const data = hoje;
        let idade = data - this.dataNascimento;
        console.log(`A idade do jogador ${this.nome} é ${idade} anos.`);
    }

    aposentadoria(jogador) {

        let idade = jogador - this.dataNascimento;

        if (this.posicao == "Defesa") {
            let defesa = (40 - idade)
            console.log(`O jogador atua na posição de ${this.posicao}. Essa posição normalmente se aposenta com 40 anos. Faltam ${defesa} anos para ${this.nome} se aposentar.`);

        } else if (this.posicao == "Meio-campo") {
            let meioCampo = (38 - idade);
            console.log(`O jogador atua na posição de ${this.posicao}. Essa posição normalmente se aposenta com 38 anos. Faltam ${meioCampo} anos para ${this.nome} se aposentar.`);

        } else if (this.posicao == "Atacante") {
            let atacante = (35 - idade);
            console.log(`O jogador atua na posição de ${this.posicao}. Essa posição normalmente se aposenta com 40 anos. Faltam ${atacante} anos para ${this.nome} se aposentar.`);

        }
    }
}

const jogador1 = new Jogador("Neymar", "Atacante", 1992, "Brasileiro", "1,75m", "68 Kg.");



jogador1.imprimirDados(jogador1);
jogador1.calcularIdade(2022);
jogador1.aposentadoria(2022);