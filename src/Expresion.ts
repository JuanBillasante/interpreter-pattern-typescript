import { Contexto } from "./Contexto";

export abstract class Expresion{
    public abstract uno();
    public abstract cuatro();
    public abstract cinco();
    public abstract nueve();
    public abstract multiplayer();

    public Interpretar(contexto : Contexto){
        if(contexto.expresion==(this.nueve())){
            contexto.valor = (9*this.multiplayer())

        }
        else if(contexto.expresion==(this.cuatro())){
            contexto.valor = (4*this.multiplayer())

        }
        else if(contexto.expresion==(this.cinco())){
            contexto.valor = (5*this.multiplayer())

        }
        else if(contexto.expresion==(this.uno())){
            contexto.valor = (1*this.multiplayer())
           
        }


    }

}export default Expresion



