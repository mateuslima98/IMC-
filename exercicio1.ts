import {Pessoa} from "./pessoa"

    let rogerio = new Pessoa(59,1.75)

    //rogerio.peso = 68
    //rogerio.altura = 1.74
    
    console.log(rogerio.imc())
    console.log(rogerio.classificar())