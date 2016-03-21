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
function setResult(result) {
  resultDiv.html('<div class="result-info ' + result + '"><h1>' + result + '</h1></div>');
}
function startScan() {
  cordova.plugins.barcodeScanner.scan(
    function (result) {
      var tagId = getTagId(result);
      setResult('Success');
      openActionTag(tagId);
    },
    function (error) {
      setResult('Failed');
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
  cordova.InAppBrowser.open(actionTag, '_blank','location=no','zoom=yes');
}
function init() {
  $("#close").click(function () {
    closeApp()
  });
  $("#rescan").click(function () {
    startScan()
  });
  resultDiv = $("#results");
}
document.addEventListener("deviceready", init, false);
