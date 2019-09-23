/* 
 * @Author: yedi 
 * @Date: 2019-09-17 01:31:49  
 * @Last Modified by: yedi
 * @Last Modified time: 2019-09-17 01:38:53
 * @Title: 员工管理  
 */
'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const EmployeesSchema = new Schema({
    orderId: {
      type: Date,
      default: Date.now
    },
    create_at: {
      type: Date,
      default: Date.now
    },
    companyName: {
      type: String
    },
    productName: {
      type: String
    },
    productType: {
      type: String
    },
    channel: {
      type: String
    }, // 渠道
    brand: {
      type: String
    },
    marketContacts: {
      type: String
    }, // 市场/行销
    marketContactsMobile: {
      type: String
    },
    salesLeader: {
      type: String
    },
    salesLeaderMobile: {
      type: String
    },
    otherContacts: {
      type: String
    },
    otherContactsMobile: {
      type: String
    },
    orderPerson: {
      type: String
    }, // 开单人
    orderChannel: {
      type: String
    }, // 订单来源
    deliveryType: {
      type: String
    }, // 交货方式
    deliveryAddress: {
      type: String
    }, // 交货地址
    expectDeliveryTime: {
      type: Date,
      default: Date.now
    }, // 交货地址
    importantLevel: {
      type: Number
    },
    dataUpload: {
      type: String
    },
    remark: {
      type: String
    },
    update_at: {
      type: Date,
      default: Date.now
    },
    orderStatus: {
      type: Number
    },
    complete_at: {
      type: Date,
      default: Date.now
    },

  });

  EmployeesSchema.index({
    orderId: 1
  }, {
    unique: true
  });

  // EmployeesSchema.virtual('isAdvanced').get(function() {
  //   // 积分高于 700 则认为是高级用户
  //   return this.score > 700 || this.is_star;
  // });

  EmployeesSchema.pre('save', function (next) {
    const now = new Date();
    this.update_at = now;
    next();
  });

  return mongoose.model('Employees', EmployeesSchema);
};