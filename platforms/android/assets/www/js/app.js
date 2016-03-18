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
  resultDiv.innerHTML = '<div class="result-info ' + result + '"><h1>' + result + '</h1></div>';
}
function startScan() {
  cordova.plugins.barcodeScanner.scan(
    function (result) {
      var tagId = getTagId(result);
      setResult('Success');
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
function init() {
  document.querySelector("#rescan").addEventListener("touchend", startScan, false);
  resultDiv = document.querySelector("#results");
}
document.addEventListener("deviceready", init, false);



