// Empty array to accumulate all objects inside class Location
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locArray = [];
var cityLocation = /** @class */ (function () {
    function cityLocation(locName, strName, strNo, locImage, dateVisit, timeVisit) {
        this.locationName = locName;
        this.streetName = strName;
        this.streetNo = strNo;
        this.image = locImage;
        this.timeVisit = timeVisit;
        this.dateVisit = dateVisit;
        locArray.push(this);
        // console.table(this)
    }
    cityLocation.prototype.locDisplay = function () {
        return " \n        <div class=\" col-lg-3 col-md-6 col-sm-1 px-1 box-height mb-2 mb-lg-0 al shadow-sm p-3 mb-5 bg-body rounded\">\n\n            <p class=\" text-center px-2 h4\"> " + this.locationName + "</p>\n            <p class=\"text-center\">  " + this.streetName + "  " + this.streetNo + " </p>\n            \n            <img class=\"rounded mx-auto d-none d-md-flex \" src=\"" + this.image + "\" alt=\"" + this.streetName + "\">\n\n            <div class=\"col text-center \">\n            <p class=\"text-center\"> Date/time visited : " + this.dateVisit + "  " + this.timeVisit + " </p>\n            </div>\n        </div>\n        ";
    };
    return cityLocation;
}());
// ----------------- declaring variables ----------------------------
new cityLocation("Schönbrunn Palace", 'Schönbrunner Schloßstraße', 47, 'images\\image1.jpg', '2020-09-15T01:00:02Z', '');
new cityLocation('National Library', 'Josefsplatz', 1, "images\\image2.jpg", '2021-01-04T05:47:03Z', '');
new cityLocation('State Opera', 'Opernring', 2, "images\\image3.jpg", '2020-09-16T15:14:35Z', '');
new cityLocation('Karlskirche', 'Kreuzherrengasse', 1, "images\\image4.jpg", '2021-03-11T21:16:56Z', '');
// ---------------- Alloted space in HTML (location)  ------------------
var addressSpace = document.getElementById('location');
// ---------------- Loop for (location) items ------------------
for (var _i = 0, locArray_1 = locArray; _i < locArray_1.length; _i++) {
    var val = locArray_1[_i];
    addressSpace.innerHTML += val.locDisplay();
}
// ===============================RESTAURANT class ======================
// Empty array to accumulate all objects inside class Rest
var restArray = [];
var Rest = /** @class */ (function (_super) {
    __extends(Rest, _super);
    function Rest(locName, strName, strNo, locImage, dateVisit, timeVisit, cuisine, takeaway, telephone) {
        var _this = _super.call(this, locName, strName, strNo, locImage, dateVisit, timeVisit) || this;
        _this.cuisine = cuisine;
        _this.takeaway = takeaway;
        _this.telephone = telephone;
        restArray.push(_this);
        return _this;
        // console.table(restArray)
    }
    Rest.prototype.restDisplay = function () {
        return " \n        <div class=\" col-lg-3 col-md-6 col-sm-1 px-1 box-height mb-2 mb-lg-0 al shadow-sm p-3 mb-5 bg-body rounded\">\n            <p class=\" text-center px-2 h4\"> " + this.locationName + "</p>\n            <p class=\"text-center\">  " + this.streetName + "  " + this.streetNo + " </p>\n            \n            <img class=\"rounded mx-auto d-none d-md-flex\" src=\"" + this.image + "\"; alt=\"" + this.locationName + "\">\n            <div class=\"col text-center \">\n                <p>Cuisine: " + this.cuisine + "</p>\n                <p>Takeaway: " + this.takeaway + "</p>\n                <p>Tel. number: " + this.telephone + "</p>\n            </div>\n            <div class=\"col text-center \">\n                <p class=\"text-center\"> Date/time visited : " + this.dateVisit + "  " + this.timeVisit + " </p>\n            </div>\n        </div>\n        ";
    };
    return Rest;
}(cityLocation));
// ----------------- declaring variables ----------------------------
new Rest("Golden Dragon", 'Währingerstrasse', 27, 'images\\image5.jpg', '2021-01-01T20:25:58Z', '', 'chinese', "yes", 676767);
new Rest("da Paolini", 'Mariahilferstr.', 33, 'images\\image6.jpg', '2020-09-05T09:31:32Z', '', 'Italian', "yes", 235565);
new Rest("Bab ElHana", 'Kärntnerstrasse', 55, 'images\\image7.jpg', '2020-06-03T17:55:05Z', '', 'Arabic', "Yes", 22233);
new Rest("Grinsteidl", 'Michaelerplatz', 2, 'images\\image8.jpg', '2020-05-09T09:34:48Z', '', 'Austrian', "No", 99999);
// ------------------------ Location Loop -----------------------------
var restSpace = document.getElementById('rest');
for (var _a = 0, restArray_1 = restArray; _a < restArray_1.length; _a++) {
    var val = restArray_1[_a];
    restSpace.innerHTML += val.restDisplay();
}
// ===============================EVENTS class ======================
// Empty array to accumulate all objects inside class Event
var eventsArray = [];
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(locName, strName, strNo, locImage, dateVisit, timeVisit, eventDate, eventTime, ticketP) {
        var _this = _super.call(this, locName, strName, strNo, locImage, dateVisit, timeVisit) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketP = ticketP;
        eventsArray.push(_this);
        return _this;
    }
    Events.prototype.eventsDisplay = function () {
        return " \n        <div class=\" col-lg-3 col-md-6 col-sm-1 px-1 box-height mb-2 mb-lg-0 al shadow-sm p-3 mb-5 bg-body rounded\">\n            <p class=\" text-center px-2 h4\"> " + this.locationName + "</p>\n            <p class=\"text-center\">  " + this.streetName + "  " + this.streetNo + " </p>\n            \n            <img class=\"rounded mx-auto d-none d-md-flex\" src=\"" + this.image + "\"; alt=\"" + this.locationName + "\">\n            <div class=\"col text-center \">\n                <p>Date: " + this.eventDate + "</p>\n                <p>Time: " + this.eventTime + "</p>\n                <p>Price: \u20AC " + this.ticketP + "</p>\n            </div>\n            <div class=\"col text-center \">\n            <p class=\"text-center\"> Date/time visited : " + this.dateVisit + "  " + this.timeVisit + " </p>\n            </div>\n        </div>\n        ";
    };
    return Events;
}(cityLocation));
// ----------------- declaring variables ----------------------------
new Events("Donaufest", 'Donauinsel', 1, 'images\\image9.jpg', '2021-01-11T21:16:23Z', '', '20.05.2019', "09:00", 0);
new Events("Bon Jovi", 'Stadthalle', 1, 'images\\image10.jpg', '2020-07-31T12:00:37Z', '', '22.04.2019', "20:00", 120);
new Events("Mozart Ensamble", 'Konzerthaus', 1, 'images\\image11.jpg', '2021-01-13T11:44:28Z', '', '19.10.2019', "19:00", 150);
new Events("The Nutckracker", 'Wieneroper', 1, 'images\\image12.jpg', '2020-06-13T22:31:56Z', '', '07.07.2019', "19:00", 200);
// ------------------------ Events Loop -----------------------------
var eventsSpace = document.getElementById('events');
for (var _b = 0, eventsArray_1 = eventsArray; _b < eventsArray_1.length; _b++) {
    var val = eventsArray_1[_b];
    eventsSpace.innerHTML += val.eventsDisplay();
}
/* __________________SORT Ascending  ________________________*/
function compareA(a, b) {
    var dateA = Date.parse(a.dateVisit);
    var dateB = Date.parse(b.dateVisit);
    var comparison = 0;
    if (dateA > dateB) {
        comparison = 1;
    }
    else if (dateA < dateB) {
        comparison = -1;
    }
    return comparison;
}
/* __________________SORT Descending  ________________________*/
function compareD(a, b) {
    var dateA = Date.parse(a.dateVisit);
    var dateB = Date.parse(b.dateVisit);
    var comparison = 0;
    if (dateA > dateB) {
        comparison = -1;
    }
    else if (dateA < dateB) {
        comparison = 1;
    }
    return comparison;
}
// ---------- event listener function for both buttons /LOCATIONS --------------
document.getElementById("ascend").addEventListener("click", sortCallA);
document.getElementById("descend").addEventListener("click", sortCallD);
// ---------------- sort function (location) ------------------
var realLocArray = [];
//    extracting the real location list from the total list
for (var i = 0; i < 4; i++) {
    realLocArray[i] = locArray[i];
}
function sortCallA() {
    //  call the sort function 
    var sortList = realLocArray.sort(compareA);
    //  empty space before re-render
    addressSpace.innerHTML = "";
    //  fill the now empty space with sorted items
    for (var _i = 0, sortList_1 = sortList; _i < sortList_1.length; _i++) {
        var val = sortList_1[_i];
        addressSpace.innerHTML += val.locDisplay();
    }
}
function sortCallD() {
    var sortList = realLocArray.sort(compareD);
    //  empty space before re-render
    addressSpace.innerHTML = "";
    //  fill the now empty space with sorted items
    for (var _i = 0, sortList_2 = sortList; _i < sortList_2.length; _i++) {
        var val = sortList_2[_i];
        addressSpace.innerHTML += val.locDisplay();
    }
}
// ---------- event listener function for both buttons /Restaurants --------------
document.getElementById("ascend").addEventListener("click", sortCallRestA);
document.getElementById("descend").addEventListener("click", sortCallRestD);
// ---------------- sort function (Restaurants) ------------------
function sortCallRestA() {
    var sortList = restArray.sort(compareA);
    console.table('Asc Restaurant -->' + sortList);
    //  empty space before re-render
    restSpace.innerHTML = "";
    //  fill the now empty space with sorted items
    for (var _i = 0, sortList_3 = sortList; _i < sortList_3.length; _i++) {
        var val = sortList_3[_i];
        restSpace.innerHTML += val.locDisplay();
    }
}
function sortCallRestD() {
    var sortList = restArray.sort(compareD);
    console.table('Desc Restaurant -->' + sortList);
    //  empty space before re-render
    restSpace.innerHTML = "";
    //  fill the now empty space with sorted items
    for (var _i = 0, sortList_4 = sortList; _i < sortList_4.length; _i++) {
        var val = sortList_4[_i];
        restSpace.innerHTML += val.locDisplay();
    }
}
document.getElementById("ascend").addEventListener("click", sortCallEventsA);
document.getElementById("descend").addEventListener("click", sortCallEventsD);
// ---------------- sort function (Events) ------------------
function sortCallEventsA() {
    var sortList = eventsArray.sort(compareA);
    //  empty space before re-render
    eventsSpace.innerHTML = "";
    //  fill the now empty space with sorted items
    for (var _i = 0, sortList_5 = sortList; _i < sortList_5.length; _i++) {
        var val = sortList_5[_i];
        eventsSpace.innerHTML += val.locDisplay();
    }
}
function sortCallEventsD() {
    var sortList = eventsArray.sort(compareD);
    //  empty space before re-render
    eventsSpace.innerHTML = "";
    //  fill the now empty space with sorted items
    for (var _i = 0, sortList_6 = sortList; _i < sortList_6.length; _i++) {
        var val = sortList_6[_i];
        eventsSpace.innerHTML += val.locDisplay();
    }
}
