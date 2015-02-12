var expect = require('chai').expect;
var concat = require('concat-stream');
var httplib = require('http');
var telehash = require('../../lib/mesh.js');
var lob = require('lob-enc');
var chat = require('../../ext/chat.js');

describe('telehash/chat', function(){
  var idA = {"keys":{"1a":"akndnx5kbansip6xphxymwckpqkjj26fcm"},"secrets":{"1a":"ksxslm5mmtymnbph7nvxergb7oy3r35u"},"hashname":"5uegloufcyvnf34jausszmsabbfbcrg6fyxpcqzhddqxeefuapvq"};
  var idB = {"keys":{"1a":"apkoh54rkobkeela6d62hblhqd7grqd5dm"},"secrets":{"1a":"ljfm3ov42x2fl6gsg6bxiqgtstnxls7r"},"hashname":"fvifxlr3bsaan2jajo5qqn4au5ldy2ypiweazmuwjtgtg43tirkq"};

  it('should export an extension', function(){
    expect(chat).to.be.a('object');
    expect(chat.name).to.be.equal('chat');
  });

  it('should create a new extension', function(done){
    var mesh = {};
    chat.mesh(mesh, function(err, ext){
      expect(err).to.not.exist;
      expect(ext).to.be.a('object');
//      expect(ext.chat).to.be.a('function');
      expect(mesh.chat).to.be.a('function');
      done();
    });
  });



});
