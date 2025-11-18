"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = exports.airportsEndpoint = exports.aircraftEndpoint = exports.routesEndpoint = exports.URL = void 0;
exports.URL = '/oskyapi'; //'https://opensky-network.org/api';
exports.routesEndpoint = 'api/routes?callsign={callsign}';
exports.aircraftEndpoint = 'api/metadata/aircraft/icao/{icao24}';
exports.airportsEndpoint = 'api/airports/?icao={ICAO}';
class Constants {
}
exports.Constants = Constants;
Constants.DEFAULT_MIN_LATITUDE = 45.8389;
Constants.DEFAULT_MAX_LATITUDE = 47.8229;
Constants.DEFAULT_MIN_LONGITUDE = 5.9962;
Constants.DEFAULT_MAX_LONGITUDE = 10.5226;
