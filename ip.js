'use strict';
var qrcode = require('qrcode-terminal');
var os = require('os');
var ifaces = os.networkInterfaces();
var ip;
Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;
  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      ip = iface.address
    } else {
      ip = iface.address
    }
    ++alias;
  });
});

qrcode.generate(`http://${ip}:3000/`, {small: true});
