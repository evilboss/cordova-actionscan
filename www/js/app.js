/**
 * Created by gilbertor on 3/17/16.
 */
var resultDiv;
var getTagId = function (result) {
  if (result.text.includes('actiontag.io')) {
    var tagId = result.text;
    return tagId;
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
      openActionTag(result.text);
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
function closeApp(){
  navigator.app.exitApp();

}
function openActionTag(actionTag) {
  cordova.InAppBrowser.open(actionTag, '_blank');
}
function init() {
  $("#close").click(function(){closeApp()});
  $("#rescan").click(function(){startScan()});
  resultDiv = $("#results");
}
document.addEventListener("deviceready", init, false);
