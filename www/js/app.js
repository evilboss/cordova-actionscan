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
      if(tagId){
        openActionTag(tagId);
      }else{
        alert('This is not an action tag');
      }

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
  $('#content').html('<iframe style="height:80vh !important; width:100vw !important;" src="'+actionTag+'"></iframe>');
}
function init() {
  $("#close").click(function () {
    closeApp();
  });
  $("#rescan").click(function () {
    startScan();
  });
  resultDiv = $("#results");
  startScan();
}
document.addEventListener("deviceready", init, false);

