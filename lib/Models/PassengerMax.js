/**
 * GlobalMilesAirlineAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of PassengerMax
 */
class PassengerMax extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.firstName = this.constructor.getValue(obj.firstName || obj.first_name);
        this.lastName = this.constructor.getValue(obj.lastName || obj.last_name);
        this.mobile = this.constructor.getValue(obj.mobile);
        this.email = this.constructor.getValue(obj.email);
        this.language = this.constructor.getValue(obj.language, 'en');
        this.gender = this.constructor.getValue(obj.gender);
        this.birthday = this.constructor.getValue(obj.birthday);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'firstName', realName: 'first_name' },
            { name: 'lastName', realName: 'last_name' },
            { name: 'mobile', realName: 'mobile' },
            { name: 'email', realName: 'email' },
            { name: 'language', realName: 'language' },
            { name: 'gender', realName: 'gender' },
            { name: 'birthday', realName: 'birthday' },
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

module.exports = PassengerMax;
