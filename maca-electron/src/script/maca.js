// import { SerialPort } from 'serialport';
// import { ReadlineParser } from '@serialport/parser-readline'

const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');


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
      //console.log(data-tara)
      valor=data
      document.getElementById('valor').innerHTML=data-tara
    }
    i++;
  })



const zerar=()=>{
  tara=Number(valor)
  console.log(tara)
}

document.getElementById('zerar').addEventListener("click",zerar)

