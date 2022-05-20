const steps = ['add', 'commit', 'push'];

// Turn an array into a string. By default, join will use a comma:
const nothing = steps.join();
console.log('nothing test:', nothing);

// If you want to add another signal, you can pass as an argument:
const dash = steps.join(' - ');
console.log('dash test:', dash);

const empty = steps.join('');
console.log('empty test:', empty);

// If you want a linebreak, you can pass as an argument:
const line = steps.join('\n');
console.log('line test:', line);
