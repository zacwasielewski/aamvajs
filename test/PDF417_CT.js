var should = require('chai').should(),
    expect = require('chai').expect,
    aamva = require('../index');

var data = '@AMVA 6360060101DL00290198DAAREGULARLPSAMPLE,SELECTCTID,A,3RDDAG60 STATE STDAIWETHERSFIELDDAJCTDAK061091896  DAQ119000555DARD   DASB         DAT     DBA20131107DBB19940101DBC1DBD20111115DAU601DAYBLUDBF00DBHY';

var res = aamva.parse(data);

describe('state', function() {
    it('should be set to CT', function(){
        expect(res.state).to.equal("CT");
    });
});

describe('address', function() {
    it('should be set to 60 STATE ST', function(){
        expect(res.address).to.equal("60 STATE ST");
    });
});

describe('gender', function() {
    it('should be set to MALE', function(){
        expect(res.sex).to.equal("MALE");
    });
});

describe('name', function() {
    it('first should be set to SELECTCTID', function(){
        expect(res.name.first).to.equal("SELECTCTID");
    });
    it('last should be set to REGULARLPSAMPLE', function(){
        expect(res.name.last).to.equal("REGULARLPSAMPLE");
    });
});

describe('birthday', function() {
    it('year should be 19940101', function(){
        expect(res.birthday).to.equal('19940101');
    });
});

describe('postal_code', function() {
    it('should be 06109', function(){
        expect(res.postal_code).to.equal("06109");
    });
});

