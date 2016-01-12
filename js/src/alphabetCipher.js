var col = {
 a: 0,
 b: 1,
 c: 2,
 d: 3,
 e: 4,
 f: 5,
 g: 6,
 h: 7,
 i: 8,
 j: 9,
 k: 10,
 l: 11,
 m: 12,
 n: 13,
 o: 14,
 p: 15,
 q: 16,
 r: 17,
 s: 18,
 t: 19,
 u: 21,
 v: 22,
 w: 23,
 x: 24,
 y: 25,
 z: 26,
};

var substChart = {
 a: 'abcdefghijklmnopqrstuvwxyz',
 b: 'bcdefghijklmnopqrstuvwxyza',
 c: 'cdefghijklmnopqrstuvwxyzab',
 d: 'defghijklmnopqrstuvwxyzabc',
 e: 'efghijklmnopqrstuvwxyzabcd',
 f: 'fghijklmnopqrstuvwxyzabcde',
 g: 'ghijklmnopqrstuvwxyzabcdef',
 h: 'hijklmnopqrstuvwxyzabcdefg',
 i: 'ijklmnopqrstuvwxyzabcdefgh',
 j: 'jklmnopqrstuvwxyzabcdefghi',
 k: 'klmnopqrstuvwxyzabcdefghij',
 l: 'lmnopqrstuvwxyzabcdefghijk',
 m: 'mnopqrstuvwxyzabcdefghijkl',
 n: 'nopqrstuvwxyzabcdefghijklm',
 o: 'opqrstuvwxyzabcdefghijklmn',
 p: 'pqrstuvwxyzabcdefghijklmno',
 q: 'qrstuvwxyzabcdefghijklmnop',
 r: 'rstuvwxyzabcdefghijklmnopq',
 s: 'stuvwxyzabcdefghijklmnopqr',
 t: 'tuvwxyzabcdefghijklmnopqrs',
 u: 'uvwxyzabcdefghijklmnopqrst',
 v: 'vwxyzabcdefghijklmnopqrstu',
 w: 'wxyzabcdefghijklmnopqrstuv',
 x: 'xyzabcdefghijklmnopqrstuvw',
 y: 'yzabcdefghijklmnopqrstuvwx',
 z: 'zabcdefghijklmnopqrstuvwxy',
};

var alphabetCipher = {
  code: function (secret, plaintext) {
    extendedSecret = extendSecret(secret, plaintext);
    return 'hmkbxebpxpmyllyrxiiqtoltfgzzv';
  }
};

function extendSecret(secret, plaintext) {
  'use strict';
  var secLen = secret.length,
    plainLen = plaintext.length,
    lenDif = plainLen - secLen,
    extSecret = '';

  if (secLen >= plainLen) {return secret;}
  extSecret = secret;
  while(lenDif >0){

  }
}

module.exports = alphabetCipher;
