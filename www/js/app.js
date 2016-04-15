/**
 * Created by gilbertor on 3/17/16.
 */
var resultDiv;
var getTagId = function (result) {
  if (result.text.includes('actiontag.io')) {
    var tagId = result.text;
    //Need to resolve tagId
    if (tagId) {
      if (tagId.indexOf('http://') >= 0) {
        return tagId;
      }
      tagId = 'http://' + tagId;
      return tagId;
    }
  }
}
function startScan() {
  cordova.plugins.barcodeScanner.scan(
    function (result) {
      if (!result.cancelled) {
        var tagId = getTagId(result);
        if (tagId) {
          openActionTag(tagId);
        } else {
          showToast('This is not an action tag');

        }
      }
      if (result.cancelled) {
        showToast('Scan Canceled');
      }


    },
    function (error) {
    },
    {
      "preferFrontCamera": false,
      "showFlipCameraButton": true,
      "prompt": "Place an action-tag inside the scan area"
    }
  );
}
function closeApp() {
  navigator.app.exitApp();

}
function openActionTag(actionTag) {
  $('#content').html('<iframe style="height:80vh !important; width:100vw !important;" src="' + actionTag + '"></iframe>');
}
function setListeners() {
  $("#close").click(function () {
    closeApp();
  });
  $("#rescan").click(function () {
    startScan();
  });
}
function init() {
  startScan();
  setListeners();
}
function pushHandler() {
  setListeners();

}

function showToast(message){
  window.plugins.toast.showWithOptions({
    message: message,
    duration: 'short', // 2000 ms
    position: 'center',
    styling: {
    //  opacity: 0.75, // 0.0 (transparent) to 1.0 (opaque). Default 0.8
      backgroundColor: '#d9534f', // make sure you use #RRGGBB. Default #333333
     // textColor: '#FFFF00', // Ditto. Default #FFFFFF
      cornerRadius: 16, // minimum is 0 (square). iOS default 20, Android default 100
     // horizontalPadding: 20, // iOS default 16, Android default 50
   //   verticalPadding: 16 // iOS default 12, Android default 30
    }
  });

}
document.addEventListener("deviceready", init, false);
window.addEventListener('push', pushHandler);
