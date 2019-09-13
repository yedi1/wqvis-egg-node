// 'use strict';
//
//
// module.exports = app => {
//   const mongoose = app.mongoose;
//   const Schema = mongoose.Schema;
//
//   const AuthSchema = new Schema({
//     name: { type: String },
//     loginname: { type: String },
//     pass: { type: String },
//     email: { type: String },
//     url: { type: String },
//     profile_image_url: { type: String },
//     location: { type: String },
//     signature: { type: String },
//     profile: { type: String },
//     weibo: { type: String },
//     avatar: { type: String },
//     is_block: { type: Boolean, default: false },
//     create_at: { type: Date, default: Date.now },
//     update_at: { type: Date, default: Date.now },
//     is_star: { type: Boolean },
//     level: { type: String },
//     active: { type: Boolean, default: false },
//
//     receive_reply_mail: { type: Boolean, default: false },
//     receive_at_mail: { type: Boolean, default: false },
//
//     accessToken: { type: String },
//   });
//
//   AuthSchema.index({ loginname: 1 }, { unique: true });
//   AuthSchema.index({ email: 1 }, { unique: true });
//   AuthSchema.index({ score: -1 });
//   AuthSchema.index({ githubId: 1 });
//   AuthSchema.index({ accessToken: 1 });
//
//
//   AuthSchema.virtual('isAdvanced').get(function() {
//     // 积分高于 700 则认为是高级用户
//     return this.score > 700 || this.is_star;
//   });
//
//   AuthSchema.pre('save', function(next) {
//     const now = new Date();
//     this.update_at = now;
//     next();
//   });
//
//   return mongoose.model('User', AuthSchema);
// };
