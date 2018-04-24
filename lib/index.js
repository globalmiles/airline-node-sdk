/**
  * @module GlobalMilesAirlineAPILib
  *
  * API for Airlines
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const MembersController = require('./Controllers/MembersController');
const FlightsController = require('./Controllers/FlightsController');
const FlightCreateRequest = require('./Models/FlightCreateRequest');
const Response = require('./Models/Response');
const Amount = require('./Models/Amount');
const FlightMax = require('./Models/FlightMax');
const GenderTypeEnum = require('./Models/GenderTypeEnum');
const PassengerMax = require('./Models/PassengerMax');
const AwardMilesRules = require('./Models/AwardMilesRules');
const LanguageTypeEnum = require('./Models/LanguageTypeEnum');
const AwardTypeEnum = require('./Models/AwardTypeEnum');
const MemberSearchRequest = require('./Models/MemberSearchRequest');
const FlightStatusTypeEnum = require('./Models/FlightStatusTypeEnum');
const PassengerMin = require('./Models/PassengerMin');
const NewMemberRequest = require('./Models/NewMemberRequest');
const FlightMin = require('./Models/FlightMin');
const MemberSearchResponse = require('./Models/MemberSearchResponse');
const FlightSimple = require('./Models/FlightSimple');
const User = require('./Models/User');
const FlightStatusResponse = require('./Models/FlightStatusResponse');
const FlightStatusRequest = require('./Models/FlightStatusRequest');
const NewMemberResponse = require('./Models/NewMemberResponse');
const ExtraInfoTypeEnum = require('./Models/ExtraInfoTypeEnum');
const RoutingTypeEnum = require('./Models/RoutingTypeEnum');
const TierTypeEnum = require('./Models/TierTypeEnum');
const CabinTypeEnum = require('./Models/CabinTypeEnum');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of GlobalMilesAirlineAPILib
    Configuration,
    Environments,
    // controllers of GlobalMilesAirlineAPILib
    MembersController,
    FlightsController,
    // models of GlobalMilesAirlineAPILib
    FlightCreateRequest,
    Response,
    Amount,
    FlightMax,
    GenderTypeEnum,
    PassengerMax,
    AwardMilesRules,
    LanguageTypeEnum,
    AwardTypeEnum,
    MemberSearchRequest,
    FlightStatusTypeEnum,
    PassengerMin,
    NewMemberRequest,
    FlightMin,
    MemberSearchResponse,
    FlightSimple,
    User,
    FlightStatusResponse,
    FlightStatusRequest,
    NewMemberResponse,
    ExtraInfoTypeEnum,
    RoutingTypeEnum,
    TierTypeEnum,
    CabinTypeEnum,
    // exceptions of GlobalMilesAirlineAPILib
    APIException,
};

module.exports = initializer;
