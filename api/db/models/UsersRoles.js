const mongoose = require('mongoose');

const schema = mongoose.Schema({
    role_id : {type: mongoose.SchemaTypes.ObjectId, required:true},
    user_id : {type: mongoose.SchemaTypes.ObjectId, required:true}
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class UsersRoles extends mongoose.Model {
    constructor(parameters) {
        
    }
}

schema.loadClass(Users);
module.exports = mongoose.model("users_roles", schema);