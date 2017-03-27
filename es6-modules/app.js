import {uniq} from 'lodash';
import {apiKey as key, url, sayHi} from './src/config';

sayHi('Sumon');
console.log(key, url);

const ages = [15, 20, 67, 52, 12, 12];
console.log(uniq(ages));
