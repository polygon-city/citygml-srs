var _ = require("lodash");
var DOMParser = require("xmldom").DOMParser;
var domParser = new DOMParser();

var citygmlSRS = function(xml) {
  var xmlDOM = domParser.parseFromString(xml);
  var srs = getSRS(xmlDOM);
  return srs;
};

// Walk DOM until SRS is found
var getSRS = function(xmlDOM) {
  var srs = {};

  if ((!srs.dimension && !srs.name) && xmlDOM.hasChildNodes()) {
    _.every(xmlDOM.childNodes, function(node) {
      if (node.getAttribute) {
        srs.dimension = Number(node.getAttribute("srsDimension"));
        srs.name = node.getAttribute("srsName");
      }

      if (!srs.dimension && !srs.name) {
        srs = getSRS(node);
      }

      if (srs.dimension || srs.name) {
        return false;
      } else {
        return true;
      }
    });
  }

  return srs;
};

module.exports = citygmlSRS;
