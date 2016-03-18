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
  resultDiv.innerHTML = result;
}
function startScan() {
  cordova.plugins.barcodeScanner.scan(
    function (result) {
      var tagId = getTagId(result);
      setResult('<h1>Result:Success</h1>');
    },
    function (error) {
      setResult('<h1>Result:Failed</h1>');
    },
    {
      "preferFrontCamera": false,
      "showFlipCameraButton": true,
      "prompt": "Place an action-tag inside the scan area"
    }
  );

}
function init() {
  document.querySelector("#close").addEventListener("touchend", startScan, false);
  resultDiv = document.querySelector("#results");
  setResult('<h1>Result:<b>Butu</b></h1>');
}
document.addEventListener("deviceready", init, false);



