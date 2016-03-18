/**
 * Created by gilbertor on 3/17/16.
 */

/**
 * Created by gilbertor on 3/17/16.
 */
var getTagId = function (result) {
  if (result.text.includes('actiontag.io')) {
    var tagId = result.text;
    return tagId;
  }
}
function setResult(result) {
  var template = $('#result-template').html();
  var templateScript = Handlebars.compile(template);
  var context = {"result":result};
  var html = templateScript(context);
  $(document.body).append(html);

}
function startScan() {
  setResult('Success');
  cordova.plugins.barcodeScanner.scan(
    function (result) {
      var tagId = getTagId(result);
      setResult('Success' +tagId);
    },
    function (error) {
      setResult('Failed')
    }
  );
}
function init() {
  $.ready(function(){
    setResult('success');
  });
  document.querySelector("#close").addEventListener("touchend", startScan, false);
}
document.addEventListener("deviceready", init, false);




