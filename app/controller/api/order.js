'use strict';

const Controller = require('egg').Controller;
// const _ = require('lodash');

class OrderController extends Controller {

  async index() {
    const { ctx, service } = this;
    const orders = await service.order.queryOrders();
    // const Order = ctx.request.Order;
    ctx.body = {
      success: true,
      status: 1,
      data: orders,
      message: '',
    };
  }

  async create(ctx) {
    // const all_tabs = ctx.app.config.tabs.map(tab => {
    //   return tab[ 0 ];
    // });

    // TODO: 此处可以优化，将所有使用 egg_validate 的 rules 集中管理，避免即时新建对象
    // ctx.validate({
    //   title: {
    //     type: 'string',
    //     max: 100,
    //     min: 5,
    //   },
    //   content: { type: 'string' },
    // });

    const body = ctx.request.body;

    // 储存新订单

    const orders = await ctx.service.order.newAndSave(
      body
    );


    ctx.body = {
      success: true,
      status: 1,
      data: orders,
      message: '',
    };
  }
}

module.exports = OrderController;

