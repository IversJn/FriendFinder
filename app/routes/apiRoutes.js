
var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post('/api/friends', function (req, res) {

    var newData = req.body;

		var tempRes= newData.scores;


		var compName = '';
		var compPicture = '';
		var tempDifference = 51; 

		for (var i = 0; i < friends.length; i++) {


			var newDifference = 0;
			for (var k = 0; j=k < tempRes.length; k++) {
			var newDifference = 0;
      newDifference += Math.abs(friends[i].scores[k] - tempRes[k]);
			}

			if (newDifference < tempDifference) {
				tempDifference = newDifference;
				compName = friends[i].name;
				compPicture = friends[i].picture;
			}
		}

    friends.push(newData);

		res.json({status: 'OK', compName: compName, compPicture: compPicture});

  });

};
