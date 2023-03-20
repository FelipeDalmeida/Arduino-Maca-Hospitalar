// import { SerialPort } from 'serialport';
// import { ReadlineParser } from '@serialport/parser-readline'

const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const valorRef=2700;
const port = new SerialPort({path:'COM3', baudRate: 9600});
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));


  port.on('open', () => {
    console.log('Serial port open')
  })
  
  let i=0;
  let tara=0;
  let leitura=[]
  let valor;

  parser.on('data', data=>{
    if(i<10){
      leitura.push(Number(data))
    }
    if(i===10){
      tara=leitura.reduce((soma,elemento)=>{
        return soma+elemento;
      },0)/leitura.length
    }
    if(i>10){
      
      valor=data
      let valorab=Number(data-tara)
      console.log(valorab)
      if(valorab>0.8*Math.abs(valorRef)){
        document.getElementById('valor').innerHTML="Paciente no leito"
        document.getElementById('paciente1').style["background-color"]="green"
        document.getElementById('alert-paciente').innerHTML=``
      } else if(valorab<0.8*Math.abs(valorRef) && valorab>0.4*Math.abs(1000)){
        document.getElementById('valor').innerHTML="Paciente levantando"
        document.getElementById('paciente1').style["background-color"]="gold"
        document.getElementById('alert-paciente').innerHTML=``
      } else{
        document.getElementById('valor').innerHTML="Paciente fora do leito"
        document.getElementById('paciente1').style["background-color"]="red"
        document.getElementById('alert-paciente').innerHTML=`<div class="alert alert-danger" role="alert">
        Paciente fora do leito
      </div>`
      }
    }
    i++;
  })



const zerar=()=>{
  tara=Number(valor)
  console.log(tara)
}

document.getElementById('zerar').addEventListener("click",zerar)

