const User = require('./User');
const Group = require('./Event_Models/Group');
const Event = require('./Event_Models/Event');
const Group_Users = require('./Event_Models/Group_User');
const Event_Users = require('./Event_Models/Event_User');
const Question = require('./Question_Models/Question');
const Answer = require('./Question_Models/Answer');
const QuestionTag = require('./Question_Models/QuestionTag');
const Tag = require('./Question_Models/Tag');
const Post = require('./Social_Models/Post');
const Comment = require('./Social_Models/Comment');

// User to Group Associations
User.hasMany(Group, {
    foreignKey: 'user_id'
});

Group.belongsTo(User, {
    foreignKey: 'user_id'
});

User.belongsToMany(Group, {
    through: Group_Users,
    as: 'group_user',
    foreignKey: 'user_id'
});

Group.belongsToMany(User, {
    through: Group_Users,
    as: 'group_user',
    foreignKey: 'group_id'
});

Group_Users.belongsTo(User, {
    foreignKey: 'user_id'
});

Group_Users.belongsTo(Group, {
    foreignKey: 'group_id'
});

User.hasMany(Group_Users, {
    foreignKey: 'user_id'
});

Group.hasMany(Group_Users, {
    foreignKey: 'group_id'
});


// User to Event associations
User.hasMany(Event, {
    foreignKey: 'user_id'
});

Event.belongsTo(User, {
    foreignKey: 'user_id'
});

User.belongsToMany(Event, {
    through: Event_Users,
    as: 'event_user',
    foreignKey: 'user_id'
});

Event.belongsToMany(User, {
    through: Event_Users,
    as: 'event_user',
    foreignKey: 'event_id'
});

Event_Users.belongsTo(User, {
    foreignKey: 'user_id'
});

Event_Users.belongsTo(Event, {
    foreignKey: 'event_id'
});

User.hasMany(Event_Users, {
    foreignKey: 'user_id'
});

Event.hasMany(Event_Users, {
    foreignKey: 'event_id'
});

Event.belongsTo(Group, {
    foreignKey: 'group_id'
});

Group.hasMany(Event, {
    foreignKey: 'group_id'
});

// Question and Answer Associations
User.hasMany(Question, {
    foreignKey: 'user_id'
});

Question.belongsTo(User, {
    foreignKey: 'user_id'
});

Question.belongsToMany(Tag, {
    through: QuestionTag,
    as: 'question_tags',
    foreignKey: 'question_id'
});

Tag.belongsToMany(Question, {
    through: QuestionTag,
    as: 'question_tags',
    foreignKey: 'tag_id'
});

Answer.belongsTo(User, {
    foreignKey: 'user_id'
});

Answer.belongsTo(Question, {
    foreignKey: 'question_id'
});

User.hasMany(Answer, {
    foreignKey: 'user_id'
});

Question.hasMany(Answer, {
    foreignKey: 'question_id'
});

//create associations
User.hasMany(Post)

Post.belongsTo(User)

Comment.belongsTo(User)
  
Comment.belongsTo(Post)
  
User.hasMany(Comment)
  
Post.hasMany(Comment)


module.exports = { User, Post, Comment, Group, Event, Group_Users, Event_Users, 
    Question, Answer, QuestionTag, Tag }
