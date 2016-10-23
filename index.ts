import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

Observable.of(1, 2, 3).forEach(x => console.log(x + '!!!'));
console.log();
let x: number = 10;
let y: string = 'abc';
console.log(`${x} has value 10 ${y}`);