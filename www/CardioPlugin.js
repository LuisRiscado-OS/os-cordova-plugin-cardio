
/** 
	OutSystems - Mobility Experts
	João Gonçalves - 23/11/2015
*/

function CardioPlugin() {
}

//LR - Added more inputs following the same pattern.
exports.scanCard = function (successCallback, errorCallback, requireExpiry, requireCvv, requirePostalCode, suppressManual, requireCardholderName, hideCardIOLogo, useCardIOLogo) {
	cordova.exec(successCallback, errorCallback, "CardioPlugin", "scanCard", [requireExpiry, requireCvv, requirePostalCode, suppressManual, requireCardholderName, hideCardIOLogo, useCardIOLogo]);
};