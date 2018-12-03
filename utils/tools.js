const spawn = require('child_process').spawn

const runCmd = (cmd, arg, cb) => {
    const child = spawn(cmd, arg);
    let res = '';

    child.on('data', (buffer) => {
        res += buffer.toString();
    })

    child.on('end', () => {
        cb(res);
    })
}