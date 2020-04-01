import { expect } from "chai";
import Contexto  from "../src/Contexto";
import Expresion from "../src/Expresion";
import { ExpresionUno, ExpresionCien, ExpresionDiez } from "../src/Expresiones";


describe('expresionUno', function(){
    it('Result', function(){
      let c = new Contexto();
      c.contexto("I")
      let lista = []
      lista.push(new ExpresionUno)
      lista.push(new ExpresionDiez)
      lista.push(new ExpresionCien)
      let i = 0
      for(i=0; i<3;i++){
        let ex:Expresion=lista[i]
        ex.Interpretar(c)
      }
      expect(c.valor).equals(1);
    });
  });


  describe('expresionCinco', function(){
    it('Result', function(){
      let c = new Contexto();
      c.contexto("V")
      let lista = []
      lista.push(new ExpresionUno)
      lista.push(new ExpresionDiez)
      lista.push(new ExpresionCien)
      let i = 0
      for(i=0; i<3;i++){
        let ex:Expresion=lista[i]
        ex.Interpretar(c)
      }
      expect(c.valor).equals(5);
    });
  });


  describe('expresionNueve', function(){
    it('Result', function(){
      let c = new Contexto();
      c.contexto("IX")
      let lista = []
      lista.push(new ExpresionUno)
      lista.push(new ExpresionDiez)
      lista.push(new ExpresionCien)
      let i = 0
      for(i=0; i<3;i++){
        let ex:Expresion=lista[i]
        ex.Interpretar(c)
      }
      expect(c.valor).equals(9);
    });
  });


  describe('expresionDiez', function(){
    it('Result', function(){
      let c = new Contexto();
      c.contexto("X")
      let lista = []
      lista.push(new ExpresionUno)
      lista.push(new ExpresionDiez)
      lista.push(new ExpresionCien)
      let i = 0
      for(i=0; i<3;i++){
        let ex:Expresion=lista[i]
        ex.Interpretar(c)
      }
      expect(c.valor).equals(10);
    });
  });


  describe('expresionCien', function(){
    it('Result', function(){
      let c = new Contexto();
      c.contexto("C")
      let lista = []
      lista.push(new ExpresionUno)
      lista.push(new ExpresionDiez)
      lista.push(new ExpresionCien)
      let i = 0
      for(i=0; i<3;i++){
        let ex:Expresion=lista[i]
        ex.Interpretar(c)
      }
      expect(c.valor).equals(100);
    });

  });
  describe('expresionCuarentena', function(){
    it('Result', function(){
      let c = new Contexto();
      c.contexto("XL")
      let lista = []
      lista.push(new ExpresionUno)
      lista.push(new ExpresionDiez)
      lista.push(new ExpresionCien)
      let i = 0
      for(i=0; i<3;i++){
        let ex:Expresion=lista[i]
        ex.Interpretar(c)
      }
      expect(c.valor).equals(40);
    });
  });