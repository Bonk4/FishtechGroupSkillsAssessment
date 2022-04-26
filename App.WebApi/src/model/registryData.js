"use strict";
exports.__esModule = true;
exports.RegistryData = void 0;
var audit_1 = require("./audit");
var nameServers_1 = require("./nameServers");
var RegistryData = /** @class */ (function () {
    function RegistryData() {
        this.CreatedDate = '';
        this.UpdatedDate = '';
        this.ExpiresDate = '';
        this.DomainName = '';
        this.Status = '';
        this.RawText = '';
        this.Header = '';
        this.StrippedText = '';
        this.Footer = '';
        this.RegistrarName = '';
        this.RegistrarIANAID = '';
        this.CreatedDateNormalized = '';
        this.UpdatedDateNormalized = '';
        this.ExpiresDateNormalized = '';
        this.WhoisServer = '';
        this.Audit = new audit_1.Audit();
        this.NameServers = new nameServers_1.NameServers();
        this.ParseCode = 0;
    }
    return RegistryData;
}());
exports.RegistryData = RegistryData;
