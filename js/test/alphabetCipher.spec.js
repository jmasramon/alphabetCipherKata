/* global describe, it*/
var assert = require('assert');
var expect = require('chai').expect;
var alphCiph = require('../src/alphabetCipher.js');

describe('Array', function() {
  'use strict';


  beforeEach(function () {
  });

  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });

  describe('encode', function () {
    it('should encode given a secret keyword', function () {
      expect(alphCiph.code('vigilance', 'meetmeontuesdayeveningatseven')).to.equal('hmkbxebpxpmyllyrxiiqtoltfgzzv');
      expect(alphCiph.code('scones', 'meetmebythetree')).to.equal('egsgqwtahuiljgs');
    });
  });

});
