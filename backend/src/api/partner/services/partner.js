'use strict';

/**
 * partner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::partner.partner');
