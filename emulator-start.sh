#!/usr/bin/env bash
if [ "$(type -t cordova)" ];
 then
      cordova emulate android
 else
      echo "cordova is not installed try npm install -g cordova or run setup.sh"
fi