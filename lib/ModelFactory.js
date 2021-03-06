/**
 * GlobalMilesAirlineAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const FlightCreateRequest = require('../lib/Models/FlightCreateRequest');
const Response = require('../lib/Models/Response');
const Amount = require('../lib/Models/Amount');
const FlightMax = require('../lib/Models/FlightMax');
const PassengerMax = require('../lib/Models/PassengerMax');
const AwardMilesRules = require('../lib/Models/AwardMilesRules');
const MemberSearchRequest = require('../lib/Models/MemberSearchRequest');
const PassengerMin = require('../lib/Models/PassengerMin');
const NewMemberRequest = require('../lib/Models/NewMemberRequest');
const FlightMin = require('../lib/Models/FlightMin');
const MemberSearchResponse = require('../lib/Models/MemberSearchResponse');
const FlightSimple = require('../lib/Models/FlightSimple');
const User = require('../lib/Models/User');
const FlightStatusResponse = require('../lib/Models/FlightStatusResponse');
const FlightStatusRequest = require('../lib/Models/FlightStatusRequest');
const NewMemberResponse = require('../lib/Models/NewMemberResponse');

const classMap = {
    FlightCreateRequest,
    Response,
    Amount,
    FlightMax,
    PassengerMax,
    AwardMilesRules,
    MemberSearchRequest,
    PassengerMin,
    NewMemberRequest,
    FlightMin,
    MemberSearchResponse,
    FlightSimple,
    User,
    FlightStatusResponse,
    FlightStatusRequest,
    NewMemberResponse,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
