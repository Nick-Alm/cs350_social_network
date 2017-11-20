var mongoDB = require('./mongo/mongodb.js');
var user = require('./mongo/user_model.js');




//test to create a new user:

function test_create_user(first, last, password, email){
    var new_user = new user({ first_name: first, last_name: last, password: password, email: email });
    
    new_user.save(function (err) {
      if (err) {
        console.log(err);
      } else {
          
        console.log('successfully created user with id: ' );
        
        var query = user.findOne({ last_name: last }); //define the mongoose query to search the collection
        
        query.exec(function (err, person) { // actually execute the query
            if (err) return handleError(err);
                console.log(person._id) // log the _id of the found object in the console in order to verify that something was actually found
            })
      }
    });
}


//test to create a new friendship between two users
function test_create_friendship(user_id_one, user_id_two){
    user.create_friendship(user_id_one, user_id_two);
}


// RUN ALL TESTS:
//test_create_user("John","Doe","testpassword123","test@test.com");
//test_create_friendship("5a13493450c4400509b8c638", "5a1349cf40dad8051baae596");