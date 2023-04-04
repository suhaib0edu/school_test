'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "539c900687f75e7d7a8e642a93a4fac8",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"main.dart.js": "4b8bf130b377cdf406e3119bfaadeb06",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"manifest.json": "fa5ffa589ce38f09ae8191b5fe69e3ce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "5b603c2c0801a9ded3b79159fc38b404",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"index.html": "c9137669caba92d684270df21f1dde3b",
"/": "50361092d8d0ad40596d1e641335dfe2",
"school_test/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"school_test/version.json": "539c900687f75e7d7a8e642a93a4fac8",
"school_test/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"school_test/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"school_test/canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"school_test/canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"school_test/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"school_test/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"school_test/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"school_test/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"school_test/main.dart.js": "517aae1896ee99f6bbf3151da09a1aff",
"school_test/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"school_test/manifest.json": "fa5ffa589ce38f09ae8191b5fe69e3ce",
"school_test/.git/packed-refs": "a82373b751a78fb56dcc5eba387629d0",
"school_test/.git/index": "1cb09559f00e7b193abd00103d4fee62",
"school_test/.git/logs/refs/heads/main": "88b64df26501d1e01edfc812a8679aed",
"school_test/.git/logs/refs/remotes/origin/HEAD": "88b64df26501d1e01edfc812a8679aed",
"school_test/.git/logs/HEAD": "88b64df26501d1e01edfc812a8679aed",
"school_test/.git/refs/heads/main": "671eba52eb36bae7bb55829a44010b71",
"school_test/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"school_test/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"school_test/.git/config": "158c0504a0a5e12980853587047749a2",
"school_test/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"school_test/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"school_test/.git/objects/pack/pack-8d712d9bab9235060d62f9b039463104b5e795a2.idx": "16767db8d7f063a6fb6b71974b09e0a5",
"school_test/.git/objects/pack/pack-8d712d9bab9235060d62f9b039463104b5e795a2.pack": "daac8dee857c40b8b32f2ed98a5f339f",
"school_test/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"school_test/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"school_test/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"school_test/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"school_test/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"school_test/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"school_test/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"school_test/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"school_test/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"school_test/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"school_test/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"school_test/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"school_test/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"school_test/.git/FETCH_HEAD": "aa8b57d4c346772eaefde761d24de1ed",
"school_test/index.html": "50361092d8d0ad40596d1e641335dfe2",
"school_test/assets/NOTICES": "f24805140ffeb8a2a4199c707c3c5b51",
"school_test/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"school_test/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"school_test/assets/shaders/ink_sparkle.frag": "08c34a0bd7ef2d9b2f5fd13bfcdb8e8f",
"school_test/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"school_test/assets/AssetManifest.json": "1a7c21442185c09f51a980384c729634",
"school_test/assets/assets/cute_little_girl.jpg": "b36aeab9d0b5602aa9d0f9ef2908774c",
"assets/NOTICES": "f24805140ffeb8a2a4199c707c3c5b51",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "08c34a0bd7ef2d9b2f5fd13bfcdb8e8f",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "1a7c21442185c09f51a980384c729634",
"assets/assets/cute_little_girl.jpg": "b36aeab9d0b5602aa9d0f9ef2908774c"
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
