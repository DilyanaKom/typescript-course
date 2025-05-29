"use strict";
function httpCodes(httpCode) {
    switch (httpCode.code) {
        case 200:
        case 201:
        case 301:
            console.log(httpCode.text);
            return;
        case 400:
        case 404:
        case 500: console.log(httpCode.text.slice(0, httpCode.printCharacters));
    }
}
httpCodes({ code: 200, text: 'OK' });
httpCodes({ code: 404, text: 'Not found', printCharacters: 3 });
//# sourceMappingURL=04-http-codes.js.map