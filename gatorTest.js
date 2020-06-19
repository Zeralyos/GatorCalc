window.onload = setup;
var version = "1.6";
var hze = 0;
var ticked = false;
var fuelStart = 230;
var fuelEnd = 230;
var fuelZones = 0;
var runEnd = 230;
var housingMod = 1;
var spiresCleared = 0;
var carpentry = 0;
var carpentry2 = 0;
var carpenryMod = 0;
var coordinated = 0;
var tauntimpFrequency = 2.97;
var efficiency = 0;
var efficiencyMod = 1
var capacity = 0;
var maxCapacity = 3;
var supply = 0;
var maxSupply = 0.2;
var overclocker = 0;
var overclockRate = 0;
var storage = 1;
var fuelPerTick = 0.5;
var magmaCellsPerZone = 16;
var popPerTick = 0;
var minTick = 0;
var maxTick = 0;
var tickRatio = 0;

var efficiencyCost = 8;
var capacityCost = 32;
var supplyCost = 64;
var overclockerCost = 512;

var totalPop = 0;
var currentPop = [];
var finalAmals = 0;
var tauntimpPercent = 0;
var maxAmalgamators = 0;
var lastCoord = 0;
var finalAmalgamatorZone = 0;
var neededPop = 0;
var finalArmySize = 0;
var coordinationArmyIncrease = 0;
var ArmySizes = [];
var coordinationThresholds;
var finalAmalRatio = 0;
var yourFinalRatio = 0;
var magmaZones = 0;
var magmiteZones = 0;
var totalMagmite = 0;

var ar1 = 10000000000;
var ar2;
var ar3;
var ar4;
var ar5;

var withheldCoords = 0;
var withholdStopZone = -1;
var totalGatorGoal = 1;
var fuelThisZone = [];
var totalFuel = [];
var overclockTicks = [];
var overclockPop = [];
var overclockPopThisZone = [];
var popWithTauntimp = [];
var popFromTauntimp = [];
var percentFromTauntimp = [];
var tauntimpThisZone = [];
var coordPop = [];
var amalRatio = [];
var adjustedRatio = [];
var currentAmals = [];

var minimizeZone = 230;
var gatorZone = 230;
var offset = false;

function setup() {
	loadSettings();
	document.getElementById("version").innerHTML = version;
}

function changeFuelStart(value) {
	fuelStart = Math.max(230, parseInt(value));
	document.getElementById("fuelStart").value = fuelStart
	if (fuelEnd < fuelStart) {
		fuelEnd = fuelStart;
		document.getElementbyId("fuelEnd").value = fuelEnd;
	}
	if (runEnd < fuelStart) {
		runEnd = fuelStart;
		document.getElementById("runEnd").value = runEnd;
	}
}

function changeFuelEnd() {}

function changeFuelZones() {}

function changeRunEnd() {}

function changeHousingMod() {}

function changeSpiresCleared() {}

function changeCarp() {}

function changeCarp2() {}

function changeCoord() {}

function changeRandimp() {}

function changeEfficiency() {}

function changeCapacity() {}

function changeSupply() {}

function changeOverclocker() {}

function checkDGUpgrades() {}

function changeHZE() {}

function changeStorage() {}

function changeSlowburn() {}

function changeMagmaFlow() {}

function calculateMagma() {}

function calculateCoordIncrease() {}

function calculateFinalAmalRatio() {}

function calculateCarpMod() {}

function calculateMinTick() {}

function calculateMaxTick() {}

function calculateCurrentPop() {}

function pasteSave(save) {}

function clearText() {}

function optimize() {}

function minimize() {}

function changeMinimizeZone() {}

function forceGator() {}

function changeGatorZone() {}

function changeWithheldCoords() {}

function changeWithheldCoordsZone() {}

function changeGatorGoal() {}

function saveSettings() {}

function loadSettings() {}

function openFAQ() {}

function enumerate() {}