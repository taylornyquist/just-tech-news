const User = require("./User");
const Post = require("./Post");

// create associations, this makes a one to many relationship between User and Post
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// create the reverse association
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };