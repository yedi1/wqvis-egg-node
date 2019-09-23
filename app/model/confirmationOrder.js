'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ConfirmationOrderSchema = new Schema({
    orderId: { type: Date, default: Date.now },
    create_at: { type: Date, default: Date.now },
    leader: { type: String }, // 下单人
    orderAmount: { type: Number }, // 订单金额
    planTime: { type: String },
    remark: { type: String },
    update_at: { type: Date, default: Date.now },
    orderStatus: { type: Number },
    complete_at: { type: Date, default: Date.now },

  });

  ConfirmationOrderSchema.index({ orderId: 1 }, { unique: true });

  // ConfirmationOrderSchema.virtual('isAdvanced').get(function() {
  //   // 积分高于 700 则认为是高级用户
  //   return this.score > 700 || this.is_star;
  // });

  ConfirmationOrderSchema.pre('save', function(next) {
    const now = new Date();
    this.update_at = now;
    next();
  });

  return mongoose.model('ConfirmationOrder', ConfirmationOrderSchema);
};
