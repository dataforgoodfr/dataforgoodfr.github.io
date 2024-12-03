'use strict';

/**
 * volunteer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::volunteer.volunteer');
