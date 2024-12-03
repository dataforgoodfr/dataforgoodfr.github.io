'use strict';

/**
 * press-release service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::press-release.press-release');
