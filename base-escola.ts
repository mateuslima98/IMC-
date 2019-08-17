 class Aluno{
        constructor(public nome:string) {}
            exibir() { 
                console.log("Nome: "+ this.nome)
            }
        }

        //Cada Classe criar um modulo
        export {Aluno as Aluno } //<Outra Classe>