import User, { createURL, gravatar} from './src/user';

const sumon = new User('Sumon Selim', 'smseleem@gmail.com', 'sumonselim.com');
const profile = createURL(sumon.name);
const avatar = gravatar(sumon.email);

console.log(profile);
console.log(avatar);
