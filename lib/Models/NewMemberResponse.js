/**
 * GlobalMilesAirlineAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const Response = require('./Response');

/**
 * Creates an instance of NewMemberResponse
 */
class NewMemberResponse extends Response {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.ffpNumber = this.constructor.getValue(obj.ffpNumber || obj.ffp_number);
        this.tierType = this.constructor.getValue(obj.tierType || obj.tier_type);
        this.needExtraInfo = this.constructor.getValue(obj.needExtraInfo || obj.need_extra_info);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'ffpNumber', realName: 'ffp_number' },
            { name: 'tierType', realName: 'tier_type' },
            { name: 'needExtraInfo', realName: 'need_extra_info', array: true },
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
        return {
        };
    }
}

module.exports = NewMemberResponse;
