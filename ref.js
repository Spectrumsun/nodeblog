var mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost/connectionDatabase2");

var postSchema = new mongoose.Schema({
	title: String,
	content: String,
}) ;

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post"
		}
	]
});

var User = mongoose.model("User", userSchema);

/*User.create({
	email: "iamuser@company.com",
	name: " I am User"
});

*/

Post.create({
	title: "go fuck urself",
	content: "bal alalalahaa "
}, function(err, post){
	User.findOne({email:"iamuser@company.com"}, function(err, found){
		if(err){
			console.log(err);
		}else{
			found.posts.push(post);
			found.save(function(err, data){
				if(err){
					console.log(err)
				}else{
					console.log(data)
				}
			})
			
		}
	})
	
});



User.findOne({email: "iamuser@company.com"}).populate("posts").exec(function(err, user){
		if(err){
			console.log(err)
		}else{
			console.log(user);
		}

})


