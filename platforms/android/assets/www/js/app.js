/**
 * Created by gilbertor on 3/17/16.
 */
var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
  startScan();
  document.querySelector("#startScan").addEventListener("touchend", startScan, false);
  resultDiv = document.querySelector("#results");
}

function startScan() {

  cordova.plugins.barcodeScanner.scan(
    function (result) {
      var s = "Result: " + result.text + "<br/>" +
        "Format: " + result.format + "<br/>" +
        "Cancelled: " + result.cancelled;
      resultDiv.innerHTML = s;
    },
    function (error) {
      alert("Scanning failed: " + error);
    }
  );

}