const BankID = require('../BankID');
const config = {
    passphrase: 'qwerty123',
    pfx: 'FPTestcert2_20150818_102329.pfx',
    test: true,
};

const bankid = new BankID(config);
let timer = null;
bankid.on('connecting', function () {
    console.log('Try to connect to BankID...');
});

bankid.on('connected', function () {
    console.log('Connection success!');
    bankid.Authenticate({ personalNumber: '198602262415' });
    timer = setInterval(function(){},10000);
});

bankid.on('error', function (err) {
    console.log('error');
    console.error(err);
    clearInterval(timer);
});

bankid.on('authenticate.complete', function (data) {
    console.log('Loggin!');
    console.log('Hello, ' + data.userInfo.name + '!');
    console.log('You are logged in with ssn: ' + data.userInfo.personalNumber);
    clearInterval(timer);
});

