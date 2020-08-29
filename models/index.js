const User = require("./User");
const Post = require("./Post");
const Vote = require('./Vote');

// create associations, this makes a one to many relationship between User and Post
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// create the reverse association
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// Linking User and Post for voting purposes
// User belongs to Many
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});
// Post belongs to Many
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Vote };