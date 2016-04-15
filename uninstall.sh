#!/usr/bin/env bash
if [ "$(type -t cordova)" ];
   then
    cordova plugin rm com.phonegap.plugins.barcodescanner
    cordova plugin rm cordova-plugin-whitelist
    cordova plugin rm cordova-plugin-device
    cordova plugin rm cordova-plugin-x-toast
    cordova platform rm android
    cordova platforms ls
    cordova plugin list
   else
    echo "cordova is not installed try npm install -g cordova or run setup.sh"
fi