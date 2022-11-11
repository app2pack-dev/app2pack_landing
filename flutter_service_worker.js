'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6a7693bf574de382e3b33e6f08b6f309",
"index.html": "e8bf43f0f0759af2eb9bcbf001ca0349",
"/": "e8bf43f0f0759af2eb9bcbf001ca0349",
"CNAME": "4082534ded6cdfc209b74b9509946e07",
"main.dart.js": "e6aeb1973b00377e444245f99b628607",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "0881a716c159b3e396a2953df63a1a58",
"icons/Icon-192.png": "e0ae0df6064120f3443815dce967d420",
"icons/Icon-maskable-192.png": "e0ae0df6064120f3443815dce967d420",
"icons/Icon-maskable-512.png": "67c79fd6f6b70408d0cbef641dbf3407",
"icons/Icon-512.png": "67c79fd6f6b70408d0cbef641dbf3407",
"manifest.json": "1c296d8d1568bb870ea7f4246be2097f",
".git/ORIG_HEAD": "eef953eee45c1461661f5c17da690635",
".git/config": "30eb72b49e074f4d2a6f23b92959e744",
".git/objects/69/c79335d9c2e8fd6ba7050d55cd188ab01c38a0": "10a195aec4cf0272fd5ae1eefde9ed09",
".git/objects/67/570df6a50adb8c9c2746a3ea038ce1993168b1": "c81a9fdec7be1522351a40a18d3439bf",
".git/objects/9c/836b8e98842730bb36ede0366034909e6931ee": "027af3c56654bee6364cf1302d435ae7",
".git/objects/b5/c678cf45ec1cd7acd6274941080b28db7eea03": "1130685973b9187c832b7a7a1e3abbea",
".git/objects/d7/bdde118f2fb4c6d3220fe19684e98f900d67c0": "2bedd9cd80d166465bba1b171949cc5b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/6d6bfbcaec86ae75f012f710affa4c4f07274c": "c7eab65631544343fafe39b291495b20",
".git/objects/fc/7cb45ee9059420ade60f50eb9758f543f9c9d2": "41b48c7e9560f049335e5822efeb836f",
".git/objects/e3/4a00a45a1261994b2c1cfd13c345a4d2cb97bb": "ef441b8fdedc855fa28a2bbab01cf1c2",
".git/objects/c8/a139b21a8f71f5fd90e22973ee7e9ad022c4d2": "836271a87396b2216ef9584a502f1d8e",
".git/objects/c8/8ac609ced165c8d550c60ff2309177ee45d51e": "7e5df2d72f1c6bae3c78647a027ebe99",
".git/objects/20/9d5b7d7b4ca941a222535dfffb999920363a81": "4143851433473ff90c0e179f3e36de79",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/17a55b52d476c081193be55e6e55c4dff98d17": "4b3321fc386fb930804d497b85ad751b",
".git/objects/8a/eeabf7f7689da69041bfc83bd23b9786b80cbe": "7b38891ae2b7bc8eec604643c80318ee",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/e3915aae1b7d5e1d96405e9e8099a4fddd6b6d": "4dfbf8b9ae2d65aad84c89cd827f17ec",
".git/objects/21/473bd2b5e29210c849f2d49cc3ef67ae29aec0": "9d67f098bd6adb260e59c1480d3b9bee",
".git/objects/2a/96fa790d22a0955ef6619b33296faf1eeee025": "bc6eaaeb31f8647b533654b14133483d",
".git/objects/43/7b14eb24d426b636ac66b3d62a88fbc6f19f3d": "f842c32c53625fab09deb12d2950c3d2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/8260c859653bdd58b09343c0854f99806d8dbd": "de8f1fc234e20c791fbd6e1c7aa7a6c7",
".git/objects/88/768d15a02171ac43765c0b6cfd214a26cbee83": "ed010495511f76ea807b3b0efb2bc9dc",
".git/objects/09/779d2b97f8c17089009b8876dfdfdee7cc14c9": "8d5645cb5fff625abd6ed2dff79b368e",
".git/objects/96/493e2d84660813b6b42e9fa1dfd155a9dcb560": "bda06dbb1a25eb4925fd4097904ed6d5",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/5b/2ed73a4db81beb2705f5c610bac9b0b2d075c9": "0c5d8996f92f2c308d0ebebf6383e900",
".git/objects/06/398016195bf0b032b9483ca04927cc3e0109c0": "3205ae2f0b679c7221f777cddb8271f9",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/d4/cbe81c244575ea8931976731fd8a61429ae6f5": "b103ddaf21e2bb16468f7c8156ccb118",
".git/objects/dd/dfdf78f29c110a05701084b77cf8b69b430976": "15ab8aab8fabc1309d6790eba2d796e0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/77b3c5a31fcb7df50a809cb32233daeafbeebb": "e5060911e9b7695272b09ad557682c7c",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a6/91947591f8d3c0ee086f3c696bcfcc91be0227": "7776be8af568e443338a78a60463f3e1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/ff/70f99c649ccf56f24935d5f6207883818ca29b": "90e3ac04f6d2b9e6260d3c288b95c9ff",
".git/objects/f1/fc7872ac483c776238aef4d5e0db013db1459c": "58de2b92cf416653cbaf1e9fba465104",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/f3445d2571e3f5398c338f5645094756adf346": "d807482cc929fd903d84a6506162f6e7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/7fc9a45af991d9fdb6c39db456eaff8b0b3825": "fdc9b80628ffd1a6432f18b5960c189c",
".git/objects/48/0b7106a4f4efbb6a2bc023ca212e6e0ada0d60": "680c0ea2eb4938aafc1a20963d3d2517",
".git/objects/70/67eaa7240e0e93c322231184b58be2e745fa67": "1d8646a36b40fafa17220c29c752273f",
".git/objects/23/7c3e34f345f9413d84240fb4ed5357ee84ce82": "43126a215d280c577e5db04e85598b47",
".git/objects/15/d1bc916f046dd2b3010b0e9a5dd1df5cea5f52": "cd70b7359d09a5597854396545408286",
".git/objects/12/fb46b56f0cae26d9eea5bdec89b0ab514a01af": "1405ede0aa2422a6849a73a9c52cb2d3",
".git/objects/2e/8ab5ab5f648b5b82ea3f89ad486a93c1f7a17f": "911aa817c20a19e7f4e548b21988f03b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/79c7c668a0827b0a7de0f79d827f2ad996cf53": "615bfd873f314861dc483a16eabdfe93",
".git/objects/8b/a63f62d811fee48826d6ce8658d79b03fe12ba": "cbc25e769115b4a6fbb13e7301c87969",
".git/objects/8b/fca2613bc2e065b0db5a73006f740e1d7937a6": "5d207d0af110d2dc1fbef6cd6d526f9c",
".git/objects/7f/e5fd44e682afbb3b7df494e245ffe96a89710d": "830b810865aa4c2dda18e599ac555ad9",
".git/objects/25/a6a4fc242ba617256769b6bcd4f7d5a2dbed7f": "340a2eb7b2309037f6d8ddf3c4dc6ff0",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ce27059c044b58d032789519edda3d53",
".git/logs/refs/heads/master": "ce27059c044b58d032789519edda3d53",
".git/logs/refs/remotes/origin/master": "bb225ea35072efd7dcf11d94b47e4474",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "e2c566a225f36341c8b502f015c3e03d",
".git/refs/remotes/origin/master": "e2c566a225f36341c8b502f015c3e03d",
".git/index": "57f95d93fb407ffe1cd274e894d75804",
".git/COMMIT_EDITMSG": "707e764cd522e034fa405fb95056d132",
".git/FETCH_HEAD": "b16f7557382c8a01bb593bd0af0acce0",
"assets/AssetManifest.json": "636bad39f0acf517d412bf399a5d89d9",
"assets/NOTICES": "3bbb4316edde3c918014c4ddb983a892",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "176958b80fa886e84054f30154a1b2a0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/app2pack.svg": "d9297d7b04cb17f8a3133a34eac225a8",
"assets/assets/app2pack_subtitle.svg": "34efc9b7814c9e6ac76be1f3075e2a76",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
