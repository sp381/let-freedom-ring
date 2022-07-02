const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema (
    {
        commentBody: {
            type: String, 
            required: 'Please add a comment',
            minlength: 1,
            maxlength: 150
        },
        username: {
            type: String,
            required: true, 
        },
        createdAt: {
            type: Date, 
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Comment = model('Comment', commentSchema);

module.exports = commentSchema;