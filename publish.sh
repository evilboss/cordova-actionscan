#!/usr/bin/env bash
path=$PWD
echo $path
cd platforms/android/build/outputs/apk/
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $path/actionscan.keystore android-release-unsigned.apk action-scan
$ANDROID_HOME/build-tools/23.0.1/zipalign 4 \android-release-unsigned.apk action-scan.apk