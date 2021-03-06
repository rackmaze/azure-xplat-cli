// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/appendblobname7315')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 16 Nov 2016 01:40:32 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D40DC18DDC9F1D"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '77697f59-0001-0032-33aa-3fced7000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'AppendBlob',
  'x-ms-blob-committed-block-count': '1',
  'x-ms-server-encrypted': 'false',
  date: 'Wed, 16 Nov 2016 01:40:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/appendblobname7315')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 16 Nov 2016 01:40:32 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D40DC18DDC9F1D"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '77697f59-0001-0032-33aa-3fced7000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'AppendBlob',
  'x-ms-blob-committed-block-count': '1',
  'x-ms-server-encrypted': 'false',
  date: 'Wed, 16 Nov 2016 01:40:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/storage-cli-blob-test/appendblobname7315')
  .reply(200, "HelloWorld", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 16 Nov 2016 01:40:32 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D40DC18DDC9F1D"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a23070f2-0001-0013-32aa-3fa3e6000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'AppendBlob',
  'x-ms-blob-committed-block-count': '1',
  'x-ms-server-encrypted': 'false',
  date: 'Wed, 16 Nov 2016 01:40:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/storage-cli-blob-test/appendblobname7315')
  .reply(200, "HelloWorld", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 16 Nov 2016 01:40:32 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D40DC18DDC9F1D"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a23070f2-0001-0013-32aa-3fa3e6000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'AppendBlob',
  'x-ms-blob-committed-block-count': '1',
  'x-ms-server-encrypted': 'false',
  date: 'Wed, 16 Nov 2016 01:40:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/appendblobname7315')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 16 Nov 2016 01:40:32 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D40DC18DDC9F1D"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8745ee5d-0001-0008-40aa-3f8d74000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'AppendBlob',
  'x-ms-blob-committed-block-count': '1',
  'x-ms-server-encrypted': 'false',
  date: 'Wed, 16 Nov 2016 01:40:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/appendblobname7315')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 16 Nov 2016 01:40:32 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D40DC18DDC9F1D"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8745ee5d-0001-0008-40aa-3f8d74000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'AppendBlob',
  'x-ms-blob-committed-block-count': '1',
  'x-ms-server-encrypted': 'false',
  date: 'Wed, 16 Nov 2016 01:40:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/appendblobname7315')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 16 Nov 2016 01:40:32 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D40DC18DDC9F1D"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'da6e33a2-0001-004d-03aa-3f50e5000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'AppendBlob',
  'x-ms-blob-committed-block-count': '1',
  'x-ms-server-encrypted': 'false',
  date: 'Wed, 16 Nov 2016 01:40:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/appendblobname7315')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 16 Nov 2016 01:40:32 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D40DC18DDC9F1D"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'da6e33a2-0001-004d-03aa-3f50e5000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'AppendBlob',
  'x-ms-blob-committed-block-count': '1',
  'x-ms-server-encrypted': 'false',
  date: 'Wed, 16 Nov 2016 01:40:53 GMT',
  connection: 'close' });
 return result; }]];