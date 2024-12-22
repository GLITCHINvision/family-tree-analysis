const mongoose = require('mongoose');

const FamilyMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  profession: { type: String },
  hobbies: [String],
  relationship: { type: String, required: true },
  children: [String],
  parent: { type: String },
});

module.exports = mongoose.model('FamilyMember', FamilyMemberSchema);
