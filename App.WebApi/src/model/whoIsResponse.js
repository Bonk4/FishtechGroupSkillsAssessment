"use strict";
exports.__esModule = true;
exports.WhoIsResponse = void 0;
var audit_1 = require("./audit");
var contact_1 = require("./contact");
var nameServers_1 = require("./nameServers");
var registryData_1 = require("./registryData");
var WhoIsResponse = /** @class */ (function () {
    function WhoIsResponse() {
        this.CreatedDate = '';
        this.UpdatedDate = '';
        this.ExpiresDate = '';
        this.DomainName = '';
        this.Status = '';
        this.RawText = '';
        this.ParseCode = '';
        this.Header = '';
        this.StrippedText = '';
        this.Footer = '';
        this.RegistrarName = '';
        this.RegistrarIanaId = '';
        this.Contactemail = '';
        this.DomainNameExt = '';
        this.EstimatedDomainAge = 0;
        this.Registrant = new contact_1.Contact();
        this.AdministrativeContact = new contact_1.Contact();
        this.TechnicalContact = new contact_1.Contact();
        this.NameServers = new nameServers_1.NameServers();
        this.Audit = new audit_1.Audit();
        this.RegistryData = new registryData_1.RegistryData();
    }
    return WhoIsResponse;
}());
exports.WhoIsResponse = WhoIsResponse;
