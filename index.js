import cowsay from 'cowsay';
import {name} from './env.js';    
console.log(cowsay.say({
    text : `Hello from ${name}!`,
    e : "oO",
    T : "U "
}));
