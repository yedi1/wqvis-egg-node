"use strict";

// const utility = require('utility');
// const uuid = require('uuid');
const Service = require("egg").Service;

class OrderService extends Service {
  /*
   * 根据用户名列表查找用户列表
   * @param {Array} names 用户名列表
   * @return {Promise[Orders]} 承载用户列表的 Promise 对象
   */
  async queryOrders(obj) {
    // const query = obj;
    return this.ctx.model.Order.find({}).exec();
  }

  // incrementScoreAndReplyCount(id, score, replyCount) {
  //   const query = { _id: id };
  //   const update = { $inc: { score, reply_count: replyCount } };
  //   return this.ctx.model.Order.findByIdAndUpdate(query, update).exec();
  // }
  //
  // incrementCollectTopicCount(id) {
  //   const query = { _id: id };
  //   const update = { $inc: { collect_topic_count: 1 } };
  //   return this.ctx.model.Order.findByIdAndUpdate(query, update).exec();
  // }

  newAndSave(obj) {
    const order = new this.ctx.model.Order(obj);
    // order.companyName = '2222222222222';
    return order.save();
  }
}

module.exports = OrderService;
