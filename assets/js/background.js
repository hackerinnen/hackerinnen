(function() {
  // global var
  var backgroundWidth = 60; //if height is same
  var circleWidth = 40; // if height is the same
  var offSet = (backgroundWidth - circleWidth) / 2;
  var count = 25;
  var body;
  var maxWidth;
  var maxHeight;

  /**
   * Helper math functions
   */

  function hashString(str, hash) {
    var hash = 5381;
    var i = str.length;

    while (i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }

    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
     * integers. Since we want the results to be always positive, convert the
     * signed int to an unsigned by doing an unsigned bitshift. */
    return (hash >>> 0).toString();
  }

  function splitIntoPairsOf3(str) {
    return str.match(/.{1,3}/g);
  }

  /**
   * DOM functions
   */

  function createElement(className) {
    var node = document.createElement("div");
    node.classList.add(className);
    body.appendChild(node);
    return node;
  }

  function setPosition(ele, top, left) {
    var maxTop = Math.round((maxHeight - offSet) / backgroundWidth);
    var maxLeft = Math.round((maxWidth - offSet) / backgroundWidth);

    var topPos = (top % maxTop) * backgroundWidth + offSet;
    var leftPos = (left % maxLeft) * backgroundWidth + offSet;
    ele.style.top = topPos + "px";
    ele.style.left = leftPos + "px";
  }

  function createHorizontalElement(top, left) {
    var eleHorizontal = createElement("horizontal");
    setPosition(eleHorizontal, top, left);
  }

  function createVerticalElement(top, left) {
    var verticalHorizontal = createElement("vertical");
    setPosition(verticalHorizontal, top, left);
  }

  /**
   * Init function
   */

  function generateCode(string) {
    var inputString = string;
    var newInput;
    var i = 0;

    while (i < count) {
      var string = newInput || inputString;
      var hashArray = splitIntoPairsOf3(hashString(string));
      createHorizontalElement(hashArray[0], hashArray[2]);
      newInput = hashArray[1] + i;
      i++;
    }

    var j = 0;
    while (j < count) {
      var string = newInput || inputString;
      var hashArray = splitIntoPairsOf3(hashString(string));
      createVerticalElement(hashArray[0], hashArray[2]);
      newInput = j + hashArray[1];
      j++;
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    body = document.getElementById("generated-bg");
    if (body && window.inputString) {
      maxWidth = body.clientWidth;
      maxHeight = body.clientHeight;
      generateCode(window.inputString);
    }
  });
})();
