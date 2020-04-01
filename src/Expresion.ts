import { Contexto } from "./Contexto";

export abstract class Expresion{
    public abstract uno();
    public abstract cuatro();
    public abstract cinco();
    public abstract nueve();
    public abstract multiplayer();

    public Interpretar(contexto : Contexto){
        if(contexto.expresion.startsWith(this.nueve())){
            contexto.valor = contexto.valor + (9*this.multiplayer())

        }
        else if(contexto.expresion.startsWith(this.cuatro())){
            contexto.valor = contexto.valor + (4*this.multiplayer())

        }
        else if(contexto.expresion.startsWith(this.cinco())){
            contexto.valor = contexto.valor + (5*this.multiplayer())

        }
        while(contexto.expresion.startsWith(this.uno())){
            contexto.valor = contexto.valor + (1*this.multiplayer())

        }


    }

}export default Expresion



