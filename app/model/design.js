'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const DesignSchema = new Schema({
    orderId: { type: Date, default: Date.now },
    create_at: { type: Date, default: Date.now },
    productLeader: { type: String },
    designLeader: { type: String },
    collaborator: { type: String }, // 协作人
    quoteLeader: { type: String }, // 预估报价负责人
    quoteMoneyAmount: { type: String }, // 预估金额
    normalQuote: { type: Number }, // 标准报价
    customerConfirmOrder: { type: Number }, // 客户是否确认
    orderReplyLeader: { type: String }, // 订单批复人
    orderReplyTime: { type: String }, // 订单批复时间
    otherConfirmOrder: { type: String }, // 第三方确认
    progress: { type: String }, // 设计进度
    update_at: { type: Date, default: Date.now },
    complete_at: { type: Date, default: Date.now },
    takeTime: { type: Date, default: Date.now }, // 耗时
    dataUpload: { type: String },
    purchaseList: { type: String }, // 采购清单
    remark: { type: String },
    status: { type: Number },

  });

  DesignSchema.index({ orderId: 1 }, { unique: true });

  // DesignSchema.virtual('isAdvanced').get(function() {
  //   // 积分高于 700 则认为是高级用户
  //   return this.score > 700 || this.is_star;
  // });

  DesignSchema.pre('save', function(next) {
    const now = new Date();
    this.update_at = now;
    next();
  });

  return mongoose.model('Design', DesignSchema);
};
