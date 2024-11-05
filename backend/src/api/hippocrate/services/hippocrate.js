'use strict';

/**
 * hippocrate service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hippocrate.hippocrate');
