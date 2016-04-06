/**
 * Created by gilbertor on 4/6/16.
 */
function init() {
  $("#back").click(function () {
    window.location.href = 'index.html'
  });
}
document.addEventListener("deviceready", init, false);