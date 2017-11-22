var mongoDB = require('./mongo/mongodb.js');
var user = require('./mongo/user_model.js');
var post = require('./mongo/post_model.js');



//test to create a new user:

function test_create_user(first, last, password, email){
    console.log("Testing user creation");
    user.create_user(first, last, password, email);

}

function test_create_post(creator_id, title, body){ //TODO <--
    console.log("Testing post creation");
    post.create_post(creator_id, title, body);

}


//test to create a new friendship between two users
function test_create_friendship(user_id_one, user_id_two){
    user.create_friendship(user_id_one, user_id_two);
}


// RUN ALL TESTS:
test_create_post("5a13493450c4400509b8c638","first Post","Here is the body - Shannon Demo");
//test_create_friendship("5a13493450c4400509b8c638", "5a1349cf40dad8051baae596");