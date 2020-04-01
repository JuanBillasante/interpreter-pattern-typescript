import Expresion from "./Expresion";


export class ExpresionUno extends Expresion {
    public uno() {
        return "I";
    }
    public cuatro(){
        return "IV";
    }
    public cinco(){
        return "V";
    }
    public nueve(){
        return "IX";
    }
    public multiplayer(){
        return 1;
    }
}

export class ExpresionDiez extends Expresion {
    public uno(){
        return "X";
    }
    public cuatro(){
        return "XL";
    }
    public cinco(){
        return "L";
    }
    public nueve(){
        return "XC";
    }
    public multiplayer(){
        return 10;
    }

}

export class ExpresionCien extends Expresion{
    public uno(){
        return "C";
    }
    public cuatro(){
        return "CM";
    }
    public cinco(){
        return "CD";
    }
    public nueve(){
        return "D";
    }
    public multiplayer(){
        return 100;
    }
} 



