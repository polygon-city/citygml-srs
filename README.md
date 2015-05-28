# CityGML SRS

Retrieve SRS dimension and name from a given XML string, walking down the child nodes if necessary.

## Usage

```javascript
var citygmlSRS = require("citygml-srs");

var xml = "..."; // Some CityGML
var srs = citygmlSRS(xml); // {dimension: 3, name: "some-srs-name"}
```
