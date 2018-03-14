/**
 * GlobalMilesAirlineAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of FlightMin
 */
class FlightMin extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.pnr = this.constructor.getValue(obj.pnr);
        this.ticketNumber = this.constructor.getValue(obj.ticketNumber || obj.ticket_number);
        this.flightNumber = this.constructor.getValue(obj.flightNumber || obj.flight_number);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'pnr', realName: 'pnr' },
            { name: 'ticketNumber', realName: 'ticket_number' },
            { name: 'flightNumber', realName: 'flight_number' },
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

module.exports = FlightMin;