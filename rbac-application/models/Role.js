const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const permissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
  resource: {
    type: String,
    required: true
  },
  action: {
    type: String,
    enum: ['create', 'read', 'update', 'delete'],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Permission', permissionSchema);
