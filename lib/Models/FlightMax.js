/**
 * GlobalMilesAirlineAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of FlightMax
 */
class FlightMax extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.airline = this.constructor.getValue(obj.airline);
        this.cabinType = this.constructor.getValue(obj.cabinType || obj.cabin_type);
        this.flightNumber = this.constructor.getValue(obj.flightNumber || obj.flight_number);
        this.pnr = this.constructor.getValue(obj.pnr);
        this.ticketNumber = this.constructor.getValue(obj.ticketNumber || obj.ticket_number);
        this.departureAirport =
          this.constructor.getValue(obj.departureAirport
     || obj.departure_airport);
        this.arrivalAirport = this.constructor.getValue(obj.arrivalAirport || obj.arrival_airport);
        this.departureDateTime =
          this.constructor.getValue(obj.departureDateTime
     || obj.departure_date_time);
        this.arrivalDateTime =
          this.constructor.getValue(obj.arrivalDateTime
     || obj.arrival_date_time);
        this.totalAmount = this.constructor.getValue(obj.totalAmount || obj.total_amount);
        this.distance = this.constructor.getValue(obj.distance);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'airline', realName: 'airline' },
            { name: 'cabinType', realName: 'cabin_type' },
            { name: 'flightNumber', realName: 'flight_number' },
            { name: 'pnr', realName: 'pnr' },
            { name: 'ticketNumber', realName: 'ticket_number' },
            { name: 'departureAirport', realName: 'departure_airport' },
            { name: 'arrivalAirport', realName: 'arrival_airport' },
            { name: 'departureDateTime', realName: 'departure_date_time' },
            { name: 'arrivalDateTime', realName: 'arrival_date_time' },
            { name: 'totalAmount', realName: 'total_amount', type: 'Amount' },
            { name: 'distance', realName: 'distance' },
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

module.exports = FlightMax;