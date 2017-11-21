(function() {
  var queryParamName = INSTALL_OPTIONS.queryParamName;
  var re = new RegExp(queryParamName + '=(?:1|0)');
  var match = location.search.match(re);
  if (match) {
    document.cookie = match[0];
  }
  if (document.cookie.indexOf(queryParamName + '=1') >= 0) {
    var selectorsToHide = INSTALL_OPTIONS.selectorsToHide;
    for (var i = 0, n = selectorsToHide.length; i < n; ++i) {
      var selector = selectorsToHide[i];
      const elements = document.querySelectorAll(selector);
      for (var j = 0, o = elements.length; j < o; ++j) {
        elements[j].className += ' hidden-by-qsh';
      }
    }
  }
}());
