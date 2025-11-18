"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveCategory = exports.resolvePositionSource = exports.StateVectorChangeTypeEnumeration = void 0;
;
;
var StateVectorChangeTypeEnumeration;
(function (StateVectorChangeTypeEnumeration) {
    StateVectorChangeTypeEnumeration[StateVectorChangeTypeEnumeration["None"] = 0] = "None";
    StateVectorChangeTypeEnumeration[StateVectorChangeTypeEnumeration["PositionChanged"] = 1] = "PositionChanged";
    StateVectorChangeTypeEnumeration[StateVectorChangeTypeEnumeration["OtherChanged"] = 2] = "OtherChanged";
})(StateVectorChangeTypeEnumeration || (exports.StateVectorChangeTypeEnumeration = StateVectorChangeTypeEnumeration = {}));
;
;
;
;
;
;
const resolvePositionSource = (positionSource) => {
    var reslovedPositionSource = 'Unknown position source';
    switch (positionSource) {
        case 0:
            reslovedPositionSource = 'ADS-B';
            break;
        case 1:
            reslovedPositionSource = 'ASTERIX';
            break;
        case 2:
            reslovedPositionSource = 'MLAT';
            break;
        case 3:
            reslovedPositionSource = 'FLARM';
            break;
    }
    ;
    return reslovedPositionSource;
};
exports.resolvePositionSource = resolvePositionSource;
const resolveCategory = (category) => {
    var reslovedCategory = `Unknown category ${category}`;
    switch (category) {
        case 0:
            reslovedCategory = 'No information at all';
            break;
        case 1:
            reslovedCategory = 'No ADS-B Emitter Category Information';
            break;
        case 2:
            reslovedCategory = 'Light (< 15500 lbs)';
            break;
        case 3:
            reslovedCategory = 'Small (15500 to 75000 lbs)';
            break;
        case 4:
            reslovedCategory = 'Large (75000 to 300000 lbs)';
            break;
        case 5:
            reslovedCategory = 'High Vortex Large (aircraft such as B-757)';
            break;
        case 6:
            reslovedCategory = 'Heavy (> 300000 lbs)';
            break;
        case 7:
            reslovedCategory = 'High Performance (> 5g acceleration and 400 kts)';
            break;
        case 8:
            reslovedCategory = 'Rotorcraft';
            break;
        case 9:
            reslovedCategory = 'Glider / sailplane';
            break;
        case 10:
            reslovedCategory = 'Lighter-than-air';
            break;
        case 11:
            reslovedCategory = 'Parachutist / Skydiver';
            break;
        case 12:
            reslovedCategory = 'Ultralight / hang-glider / paraglider';
            break;
        case 13:
            reslovedCategory = 'Reserved';
            break;
        case 14:
            reslovedCategory = 'Unmanned Aerial Vehicle';
            break;
        case 15:
            reslovedCategory = 'Space / Trans-atmospheric vehicle';
            break;
        case 16:
            reslovedCategory = 'Surface Vehicle - Emergency Vehicle';
            break;
        case 17:
            reslovedCategory = 'Surface Vehicle - Service Vehicle';
            break;
        case 18:
            reslovedCategory = 'Point Obstacle (includes tethered balloons)';
            break;
        case 19:
            reslovedCategory = 'Cluster Obstacle';
            break;
        case 20:
            reslovedCategory = 'Line Obstacle';
            break;
    }
    ;
    return reslovedCategory;
};
exports.resolveCategory = resolveCategory;
