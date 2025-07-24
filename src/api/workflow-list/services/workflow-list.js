'use strict';

/**
 * workflow-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::workflow-list.workflow-list');
