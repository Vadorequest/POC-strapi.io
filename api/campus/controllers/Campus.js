'use strict';

/**
 * Campus.js controller
 *
 * @description: A set of functions called "actions" for managing `Campus`.
 */

module.exports = {

  /**
   * Retrieve campus records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.campus.search(ctx.query);
    } else {
      return strapi.services.campus.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a campus record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.campus.fetch(ctx.params);
  },

  /**
   * Count campus records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.campus.count(ctx.query);
  },

  /**
   * Create a/an campus record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.campus.add(ctx.request.body);
  },

  /**
   * Update a/an campus record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.campus.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an campus record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.campus.remove(ctx.params);
  }
};
