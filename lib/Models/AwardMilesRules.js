/**
 * GlobalMilesAirlineAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of AwardMilesRules
 */
class AwardMilesRules extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.awardType = this.constructor.getValue(obj.awardType || obj.award_type);
        this.baseRatio = this.constructor.getValue(obj.baseRatio || obj.base_ratio);
        this.checkinRatio = this.constructor.getValue(obj.checkinRatio || obj.checkin_ratio);
        this.checkoutRatio = this.constructor.getValue(obj.checkoutRatio || obj.checkout_ratio);
        this.surveyRatio = this.constructor.getValue(obj.surveyRatio || obj.survey_ratio);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'awardType', realName: 'award_type' },
            { name: 'baseRatio', realName: 'base_ratio' },
            { name: 'checkinRatio', realName: 'checkin_ratio' },
            { name: 'checkoutRatio', realName: 'checkout_ratio' },
            { name: 'surveyRatio', realName: 'survey_ratio' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = AwardMilesRules;
