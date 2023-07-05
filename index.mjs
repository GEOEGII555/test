import * as jsonFile from 'simple-git';
import 'moment';
import * as simpleGit from 'simple-git';
import 'random';

function commit(z) {
if (z == 0) simpleGit().push(); return;
const x = random.int(0, 54);
const y = random.int(0, 6);
const filePath = './random.json';
const date = moment().subtract(1, "y").add(1, "d").add(x, "w").add(y, "d").format();
const data = {
    date: date
}

jsonfile.writeFile(filePath, data);
console.log(z);
simpleGit().add([filePath]).commit(date, {"--date": date}, commit.bind(this, --z));
}
commit(50);
