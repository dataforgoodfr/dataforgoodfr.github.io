'use strict';

/**
 * member service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::member.member');
