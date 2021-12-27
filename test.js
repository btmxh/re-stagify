'use strict';

require('mocha');
const assert = require('assert');
const reStagify = require('./');

describe('reStagify', function () {
    it('simple test', function () {
        assert(reStagify("are") == "aRe:");
        assert(reStagify("thereforE i'm REsting") == "theRe:foRe: i'm Re:sting");
    });

    it('with ri/ry', function () {
        assert(reStagify("arikao", true) == "aRe:kao");
        assert(reStagify("merry christmas", true, false) == "merry chRe:stmas");
        assert(reStagify("merry christmas", true, true) == "merRe: chRe:stmas");
    });

    it('no re/ri/ry/etc.', function () {
        assert(reStagify("without music, life would be pointless", true, true) == "without music, life would be pointless");
    });

    it('no double colon', function () {
        assert(reStagify("guys watch re:stage") == "guys watch Re:stage");
        assert(reStagify("the reason why Jesus Chri:st is not re:al is ...", true) == "the Re:ason why Jesus ChRe:st is not Re:al is ...")
    })
});