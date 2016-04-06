#!/usr/bin/env bash
if [ "$(type -t cordova)" ];
   then
       cordova platform add android
       cordova plugin add cordova-plugin-device
       cordova plugin add cordova-plugin-whitelist
       cordova plugin add https://github.com/Telerik-Verified-Plugins/BarcodeScanner.git#fb0a4f80092ab173366c98c6a1555bbed0ad864f
       cordova platforms ls
       cordova plugin list
       if [ "$(type -t bower)" ];
          then
            cd www/
            bower install
            bower list
          else
          echo "bower is not installed try npm install -g bower or run setup.sh"
       fi
   else
        echo "cordova is not installed try npm install -g cordova or run setup.sh"
fi