var mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost/connectionDatabase");

var postSchema = new mongoose.Schema({
	title: String,
	content: String,
}) ;

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts:[postSchema]
});

var User = mongoose.model("User", userSchema);

/*var newUser = new User ({
	email: "willdoe@company.com",
	name: "willam Doe"
});
*/
/*newUser.posts.push({
	title: "The Gods has spoken",
	content: " sam et justo duo dolores et ea rebum  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, . Stet clita kasd gubergren, etetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
});


newUser.save(function(err, user){
	if(err){
		console.log(err)
	}else{
		console.log(user)
	}
});*/


/*var newPost = new Post({
	title: "2001 A space ship"
	content: "hahahhahahah"
});*/

/*newPost.save(function(err, post){
	if(err){
		console.log(err)
	}else{
		console.log(post)
	}
})
*/



/*User.findOne({name: "willam Doe"}, function(err, user){
	if(err){
		console.log(err)
	}else{
		console.log(user)
	}
})*/

User.findOne({name: "willam Doe"}, function(err, user){
	if(err){
		console.log(err)
	}else{
		user.posts.push({
			title:"Do yogu belive in the force",
			content:"keep calm and use the force, keep calm and use the force, keep calm and use the force, keep calm and use the force"
		})
		user.save(function(err, user){
			if(err){
				console.log(err)
			}else{
				console.log(user)
			}
		});
	}
})