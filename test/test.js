//-Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser
//-Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
// var assert = require('assert'),
index = require('../index');
var chai = require('chai');


//Chai options:chai
//-should:
//var should = chai.should();
//(variable).should.be.a(<type>);
//"Hello".should.be.a('string');
//(variable).should.equal(ans);
//(variable).should.have.lengthof(<num>);
//(variable).should.have.property(<name>).with.lengthof(<num>);
//
//-expect: 
//var expect = chai.expect;
//expect(result).to.be.a(<type>);
//expect(result).to.equal(ans);
//expect(result).to.have.lengthof(<num>);
//expect(result).to.have.property(<name>).with.lengthof(<num>);
//
//-assert:
var assertc = chai.assert;
//assertc.typeOf(func, <type>, <optional message>);
//assertc.equal(func, <ans>);
//assertc.lengthOf(func, <num>)
//assertc.property(func/val, <name>);
//assertc.lengthOf(func.<name>, <num>);

function IndexTest(){
	describe('In index.js', function() {
        describe('CHESS 960 Row function return type', function() {
			it('should return whether chessboard960 function returns an array.', function(){
			  assert.typeOf( index.chessboard960arrays(), 'array');
            });
        });
        
        describe('CHESS 960 function returned array length', function() {
            it('should return array length of row 1', function(){
                assert.lengthOf(index.chessboard960arrays(), 2, 'value has a length of 2');
            });
        });

        describe('CHESS 960 function Row 1 length', function() {
            it('should return array length of row 1', function(){
                assert.lengthOf(index.chessboard960arrays()[0], 8, 'value has a length of 8');
            });
        });

        describe('CHESS 960 Rows 1 & 8 combined length', function() {
			it('should return combined array lengths holding black and white pieces (8 each, 16 total)', function(){
			  assert.equal(index.chessboard960(), 16 ,'value has length of 16');
			});
        });
        
            describe('CHESS Piece Color White', function() {
                it('should return whether piece will be color "white"', function(){
                  assert.equal( 'white', index.pieceColor(9812));
                });
            });

            describe('CHESS Piece Color Black', function() {
                it('should return whether piece will be color "black"', function(){
                  assert.equal( 'black', index.pieceColor(9820));
                });
            });
	});		
}

IndexTest();
