'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d54e9df0058e9d23d2d76aed7492e6ce",
"version.json": "efb61b870f4c9d7ae51a51a1e2116262",
"Icon.png": "834bb489acdf2cfb3466a57c19e60b23",
"googleb91878f2b0f4b57b.html": "9421914e5bd9cf0ee977af645c73396a",
"favicon.ico": "711491c09aa3b22cc9ed74828afb9b23",
"index.html": "c08056a3cadbf7934d1ba18b56a0974f",
"/": "c08056a3cadbf7934d1ba18b56a0974f",
"firebase-messaging-sw.js": "8c95541031b703d032623c4e4a9cb6e3",
"main.dart.js": "083c163ae16c8a5b60f7010cbb021b2e",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"cors.json": "8861c0a0ed75a1bdd886de781c6466c4",
"git.txt": "b4e6e78c355468972960fc8ce1f31d2f",
"favicon.png": "834bb489acdf2cfb3466a57c19e60b23",
"icons/Icon-192.png": "b8f559c28b715f3e6e7ed604a7598213",
"icons/Icon-maskable-192.png": "b8f559c28b715f3e6e7ed604a7598213",
"icons/Icon-maskable-512.png": "834bb489acdf2cfb3466a57c19e60b23",
"icons/Icon-512.png": "834bb489acdf2cfb3466a57c19e60b23",
"manifest.json": "61a3a1eab18f341e23e2b9e23fab6b9c",
"sitemap.xml": "d516f471d045ae971de84bb25ad06e8f",
"robots.txt": "fa1ded1ed7c11438a9b0385b1e112850",
".git/config": "05ceac03bf46f12cc45f4c6861a2edf9",
".git/objects/61/58f93db7894b58156ffcd9fb6344c6e3439842": "8355c2a70b11e7c4023371a83001f03c",
".git/objects/50/b26435be4ded619202a0b0a57b5f9a656383de": "b87385ec285485cdbf607a8f5a99d7d6",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "dc1d3b6ac68817e26c52a2b7aca98a10",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "d3a449987a90cb27a061aa0094db79da",
".git/objects/51/ac868d2e4ae1bd595259ed84b7b017381d96cb": "f101f56765d475a648e366ba29b429c2",
".git/objects/3d/f05f49183222dcefda941ea736efbc6038d3ea": "af96957414477682e983fff292406512",
".git/objects/3d/3f7d3a511f11688a16deff9522c80fbd810b4e": "20d11f2e72722c129dd2a2ac37ae9590",
".git/objects/58/44da2adc71738b58420730bfcfe4dac1523f89": "b1cd8eeeb471a5fb6659967e3912a133",
".git/objects/58/556fb420334e9ddf8c9836c7e0a54c3f2a087d": "4d2bf41e2f3d6ecae135b5b8441f7a7c",
".git/objects/93/7af4ba9609656e2d1defb7d071ec9fa6c5118c": "e5d8c26c21b09e98ce908a0d13a910f9",
".git/objects/34/3b9c4db1fef22238d0c601f65031db43fa282b": "7a44477481dd9ab88c13f0b67c9a5230",
".git/objects/05/ab5a09858f7f93130e8d82b4d4628611c1d78a": "ce4182aaa0e27a0d598ab30a5e0d0e1c",
".git/objects/9c/180e753efcce5ce4a410ee031109ef75065691": "3b44de3870e25c0ed89a6cb210be9de2",
".git/objects/b2/2cd598da2dffaa752790a247e98a1eaee40759": "c9e180e9c3f52affa6b2fb50e9d3fd74",
".git/objects/da/a1626b1cdf57e35b59c29ce6dd3a3a7885c27a": "75a637b7e53d2758713c6c5495835927",
".git/objects/d6/764eeaa9967b028ffe1236c4e0a2ef0b118e17": "7149d16fc5dd32c4128732f3d71363e9",
".git/objects/bc/88c370b048d87bb9b87d933b0e99a3251da46c": "dd36468b612606ee925926bc63290b9d",
".git/objects/ab/9b39c5781d6410349f980ce719d99cf7803aed": "57cfd44c92cb72a683fcb2f7df50d1cc",
".git/objects/e2/808edc08282e78e9086a99e938227d234d3e68": "9484cd965a12047a749e57ba8fbf6a16",
".git/objects/e2/fd76826b890a0dafc0f7734788632555389250": "1022d6e24436ffdf354551c00975b116",
".git/objects/c7/03dd3b2eca0a40cbdc4af7f60b7a54bb8eb247": "e1cbd762191a374ae8a1a8f54131b5c5",
".git/objects/c7/80367379235d644371d36b89551c3c14d68d92": "d238fcaab3bafd2453881ebb23930a3b",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "9ac88320211880cc3e45982e35ed6886",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "ab44c9734516beeebec6230aeae5d2ce",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f2/565e0da438662c56dec8d6583acc8f0f0258d6": "ea7b5f43436f24dc7b487d864a4fa003",
".git/objects/f5/90f0b39f6df550d90d12774b290109b0bfabe9": "7dd3519b7b2f8f10f32851cf664bd677",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "1571a0047b31531c7a039af463995b54",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "0c4bbf647e92f25144f535178c7f7f15",
".git/objects/27/53aa301e2f8cd112719eae8f85b9ee58c71038": "9f257c0da4f4210ea948593fcfc61d34",
".git/objects/4b/466e6bf1d628a4b670fbb91bd693a7382e9b33": "4283f2499e7a7171140f3598a5e3fcc2",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "e14aa589bb7e68e3a524c297a802bde9",
".git/objects/80/685558edb1bbffb0171be55305b1e83cfbc4d4": "939a569062366c9eb3d94d07b175056a",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "dee38288e294701bf8f665ae546a43e3",
".git/objects/28/06afab9bcb4571c1a117812bada3f6749dd6be": "1782cd682ea3d824b9a83fba067a13ef",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "37f85982bf33ae590630cf59163c306a",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "77f02e77879661926a5cd8bda5692a61",
".git/objects/86/6501a22de88d046af5e729672970a7252fef16": "24082441a44d68017ca35626b7241a35",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "86093f3409129ad1ad40b48457ae8f1b",
".git/objects/43/508c0adbf776b3fe429c644ff42d369e5af644": "5244a1f4eecc3b8d779cc3f22a95b8f4",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/00/9397a89572b6313db9ef8198d94e85b2c02a57": "0d93b36b88b47361e43f86cc08822565",
".git/objects/5c/f797de50451b5071d1dd8e4cd8333251eff199": "61b4f96da3f5214a6a4a39466131ccea",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "93034798fbadab9d29fbfc286c300b25",
".git/objects/98/17179904630982e1fd0d05ed920485f9a3b6ee": "80aacd93c25cae8fe2263cbc9b4357fd",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "23e8f7ce2c2856c1943e6cb51334416e",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "6d57e2d4816384a5236f4a52d9f1014b",
".git/objects/08/332ef489d0e24a3c95867735c801b07c28f1a9": "8894e504d24d7b7973d019983126dcb8",
".git/objects/99/b3a5b6ec66be4cec842529a05d39c4c95d2cfc": "2cce1b4dedaaa905a3c8f9e7a2074aca",
".git/objects/97/780bffee08caa6287eaa27a0a470c67aa6099a": "21fcace2379c17818fd150a5eb373b45",
".git/objects/0a/12dc21915c78d859350d65f9c75ac0323abacc": "aea7d4821bdf9390834e6f060aa8cd29",
".git/objects/d3/5e0bfd65d13fe8bfc9857468ad2e336a391aa6": "f3a07e4f1f2179d5e1fc57b86f7e350a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/ba/42fad37792e8ae1aad7a077d3dbbd5d0eef8c3": "bfaaa64a1b6570b3640eb1f665e014e1",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "6e9c97fa8e93a6aa5ba45802bd0c8331",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "6a4baf0ee5d7f24d01892e880c87e9b5",
".git/objects/aa/f7db8171425cec061a942ceb5b41271f222a5d": "a03418e1e9c38eee35262a26fe2ab3de",
".git/objects/af/fd3b3efdad55aa06e7a3802018a35f00289f4b": "03b131a02b27f28a2401b9f5163fb1ae",
".git/objects/db/b525dc786de35de4252b523ef4314b1e754022": "6259bbe3d4dd9ebe5659fd24f5fd17d6",
".git/objects/b0/0c684d3ef14be87f0badd2eecc88babc70fea0": "9ff3ce330d5df0be682c8e0063c1b84e",
".git/objects/b9/4732d426a93370686589c8b436cad39f35e5a0": "4a3cf921647f11de81351af7b39a57b4",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "a488dd5b768f3e95bb3ded676201c413",
".git/objects/f9/7da9510550d207a28d79bbc217a1db33bf348a": "bf2a47201798507ad1b5d23ae12301e8",
".git/objects/e8/431de2af6ddc65029559506ba74f4ee41190c9": "38423b1f79ebdf4ed4fe638c3e0b9f1c",
".git/objects/fa/af06f6f42fa4a4efbbd84357100b3c6eb5c944": "e313aae6a03c2bb3df69103f4438c06f",
".git/objects/c2/1dcf9d2dedb67bda4acb783b59a2f9d4d138e2": "75d02d01bfe516ab60a84967d2b1e4cd",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/e9/1db7fe61df88f5392d0201c7587613c41b4f38": "4e859f0d1123ee74fe98a3229a9c5aa2",
".git/objects/e9/e57dc4d41b9b46e05112e9f45b7ea6ac0ba15e": "f87a9679d1436cdc6f5844cadb91fbcf",
".git/objects/ce/0513b79a0782d5e4c5f67a82f0745ab4831b90": "fc6b7bb21bc58e6384c94551196acc24",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "eaf69ee68e07ccd33759fba4b5e36d4e",
".git/objects/79/38f52df34b597404d0034ae3074064bae5de41": "5e0b026f9cac069c68e61c6230c9e22e",
".git/objects/79/6c8605b40759348c7308269a58fee3d0b674e8": "116f91e7e9ccb2ac6b97348bdc1cec4d",
".git/objects/48/e2b71267fbe82a596f83c205bb24d9b05a0ed7": "487ac51ff523860522f500f20af83c0d",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "035b9bca4ff3f565e4b9d2dba298d005",
".git/objects/70/6076497a390f8489cbd737885c3c1a8c405d71": "16a564a0a8c3c8b5bda4139eeee3a488",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "6dc767ec6498faa598b6dd7d00386498",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "20f626d45eb3c9e3f81b2b860aa28f84",
".git/objects/4a/01ac24b6e2a710e5421f16bb23108823b5d502": "6bf5f63947b860ff25ac09550263353b",
".git/objects/78/098c0b737789d90eb518c08ae8658a1cd3bfc6": "39d74fa1420df81248e0cc9935a8e6b8",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "761dc13aa1b552ddd7312bc4ec9c7664",
".git/objects/25/38f15b996574ecc3ff090b55d007feb7c2980c": "aa75e79cf8fa853300f658136335a26e",
".git/HEAD": "6bf18e9e3b6344d0dc431b44a76eb623",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "560b8b5be6e9ae77a3faf930755b6ffd",
".git/logs/refs/heads/proyecto": "baa53e20fa2281b7b3178a4dfd81c918",
".git/logs/refs/remotes/origin/proyecto": "c3916f32678191af208518200e971642",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/proyecto": "3463e22da82a1f26072b6fc3328cbbe4",
".git/refs/remotes/origin/proyecto": "3463e22da82a1f26072b6fc3328cbbe4",
".git/gk/config": "30b0850e0dd983b2a36966f91e16b785",
".git/index": "71a8a07a87c80a1f9f6fcf477e247768",
".git/COMMIT_EDITMSG": "62ad87852b0f5873155aec6712d45222",
".git/FETCH_HEAD": "1cb3c230af360ef4b470ce2b3fcc0f6e",
"assets/AssetManifest.json": "e48d75e0c75324cdf8765f38e80a98b9",
"assets/NOTICES": "4b293e8ce71d6e5b0ebd8b5c21739e36",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/AssetManifest.bin.json": "8a14f0c5b84a7102a762835e8a3887dd",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_3d_controller/assets/model_viewer.min.js": "11f3833db561a92ac9100cd43d28899b",
"assets/packages/flutter_3d_controller/assets/model_viewer_template.html": "d370dc1bc2b1dd29090c1946dbef646a",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "dd677b435b16f44e4ca08a9f354bac24",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "322de1ded6dc91e092112993befc9df4",
"assets/fonts/MaterialIcons-Regular.otf": "21206934bcb94cc05a28c40ded9e30c0",
"assets/assets/svg/Robot.glb": "14891d52aae9b6033f6e84d55079159e",
"assets/assets/svg/availability.svg": "8a9be7f469512eb7688093e96141c6b8",
"assets/assets/svg/genetic.svg": "0e2aede7f79f0a3766373d1b8a8576e3",
"assets/assets/env.txt": "ae43fa8535f28d8fe5798746d692fbb4",
"assets/assets/img/Harvard.png": "07ae8ef490f56c7887dc8bc6a530442e",
"assets/assets/img/yotraje.png": "9c86fefd3939ca92ec5c2dd25ee4fbc4",
"assets/assets/img/logo.jpeg": "11cb8bbe498d5b9a44249d97ab3dd550",
"assets/assets/img/Google.png": "c7a7bc3e92284258d65635859ed8c174",
"assets/assets/img/image.png": "6c511d4d2a21539c260ed544e1e7989e",
"robot.txt": "4804c70c9e04100578624f67f27e30e3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
