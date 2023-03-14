import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline'
const port = new SerialPort({path:'COM3', baudRate: 9600});
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));


port.on('open', () => {
  console.log('Serial port open')
})

let i=0;
let media=0;
let leitura=[]
parser.on('data', data=>{
  if(i<10){
    leitura.push(Number(data))
  }
  if(i===10){
    media=leitura.reduce((soma,elemento)=>{
      return soma+elemento;
    },0)/leitura.length
  }
  if(i>10){
    console.log(data-media)
  }
  i++;
})


