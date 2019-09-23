/* 
 * @Author: yedi 
 * @Date: 2019-09-17 01:33:10  
 * @Last Modified by: yedi
 * @Last Modified time: 2019-09-17 01:38:01
 * @Title: 测量管理  
 */
'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const MeasureSchema = new Schema({
    orderId: {
      type: Date,
      default: Date.now
    },
    planTime: {
      type: Date,
      default: Date.now
    },
    create_at: {
      type: Date,
      default: Date.now
    },
    measureLeader: {
      type: String
    },
    dataUpload: {
      type: String
    },
    location: {
      type: String
    },
    remark: {
      type: String
    },
    complete_at: {
      type: Date,
      default: Date.now
    },
    takeTime: {
      type: Date,
      default: Date.now
    }, // 耗时
    update_at: {
      type: Date,
      default: Date.now
    },
    status: {
      type: Number
    },
  });

  MeasureSchema.index({
    orderId: 1
  }, {
    unique: true
  });

  // MeasureSchema.virtual('isAdvanced').get(function() {
  //   // 积分高于 700 则认为是高级用户
  //   return this.score > 700 || this.is_star;
  // });

  MeasureSchema.pre('save', function (next) {
    const now = new Date();
    this.update_at = now;
    next();
  });

  return mongoose.model('Measure', MeasureSchema);
};