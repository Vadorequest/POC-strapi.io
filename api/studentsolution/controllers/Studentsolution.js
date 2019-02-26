'use strict';

/**
 * Studentsolution.js controller
 *
 * @description: A set of functions called "actions" for managing `Studentsolution`.
 */

module.exports = {

  /**
   * Retrieve studentsolution records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.studentsolution.search(ctx.query);
    } else {
      return strapi.services.studentsolution.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a studentsolution record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.studentsolution.fetch(ctx.params);
  },

  /**
   * Count studentsolution records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.studentsolution.count(ctx.query);
  },

  /**
   * Create a/an studentsolution record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.studentsolution.add(ctx.request.body);
  },

  /**
   * Update a/an studentsolution record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.studentsolution.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an studentsolution record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.studentsolution.remove(ctx.params);
  }
};
