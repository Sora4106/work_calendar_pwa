(()=>{var _={blink:!0,gecko:!1,webkit:!1,unknown:!1},K=()=>navigator.vendor==="Google Inc."||navigator.userAgent.includes("Edg/")?"blink":navigator.vendor==="Apple Computer, Inc."?"webkit":navigator.vendor===""&&navigator.userAgent.includes("Firefox")?"gecko":"unknown",C=K(),R=()=>typeof ImageDecoder>"u"?!1:C==="blink",B=()=>typeof Intl.v8BreakIterator<"u"&&typeof Intl.Segmenter<"u",z=()=>{let i=[0,97,115,109,1,0,0,0,1,5,1,95,1,120,0];return WebAssembly.validate(new Uint8Array(i))},M=()=>{let i=document.createElement("canvas");return i.width=1,i.height=1,i.getContext("webgl2")!=null?2:i.getContext("webgl")!=null?1:-1},D=()=>window.chrome&&chrome.runtime&&chrome.runtime.id,w={browserEngine:C,hasImageCodecs:R(),hasChromiumBreakIterators:B(),supportsWasmGC:z(),crossOriginIsolated:window.crossOriginIsolated,webGLVersion:M(),isChromeExtension:D()};function c(...i){return new URL(I(...i),document.baseURI).toString()}function I(...i){return i.filter(e=>!!e).map((e,n)=>n===0?S(e):F(S(e))).filter(e=>e.length).join("/")}function F(i){let e=0;for(;e<i.length&&i.charAt(e)==="/";)e++;return i.substring(e)}function S(i){let e=i.length;for(;e>0&&i.charAt(e-1)==="/";)e--;return i.substring(0,e)}function E(i,e){return i.canvasKitBaseUrl?i.canvasKitBaseUrl:e.engineRevision&&!e.useLocalCanvasKit?I("https://www.gstatic.com/flutter-canvaskit",e.engineRevision):"canvaskit"}var v=class{constructor(){this._scriptLoaded=!1}setTrustedTypesPolicy(e){this._ttPolicy=e}async loadEntrypoint(e){let{entrypointUrl:n=c("main.dart.js"),onEntrypointLoaded:t,nonce:r}=e||{};return this._loadJSEntrypoint(n,t,r)}async load(e,n,t,r,a){a??=l=>{l.initializeEngine(t).then(u=>u.runApp())};let{entrypointBaseUrl:s}=t,{entryPointBaseUrl:o}=t;if(!s&&o&&(console.warn("[deprecated] `entryPointBaseUrl` is deprecated and will be removed in a future release. Use `entrypointBaseUrl` instead."),s=o),e.compileTarget==="dart2wasm")return this._loadWasmEntrypoint(e,n,s,a);{let l=e.mainJsPath??"main.dart.js",u=c(s,l);return this._loadJSEntrypoint(u,a,r)}}didCreateEngineInitializer(e){typeof this._didCreateEngineInitializerResolve=="function"&&(this._didCreateEngineInitializerResolve(e),this._didCreateEngineInitializerResolve=null,delete _flutter.loader.didCreateEngineInitializer),typeof this._onEntrypointLoaded=="function"&&this._onEntrypointLoaded(e)}_loadJSEntrypoint(e,n,t){let r=typeof n=="function";if(!this._scriptLoaded){this._scriptLoaded=!0;let a=this._createScriptTag(e,t);if(r)console.debug("Injecting <script> tag. Using callback."),this._onEntrypointLoaded=n,document.head.append(a);else return new Promise((s,o)=>{console.debug("Injecting <script> tag. Using Promises. Use the callback approach instead!"),this._didCreateEngineInitializerResolve=s,a.addEventListener("error",o),document.head.append(a)})}}async _loadWasmEntrypoint(e,n,t,r){if(!this._scriptLoaded){this._scriptLoaded=!0,this._onEntrypointLoaded=r;let{mainWasmPath:a,jsSupportRuntimePath:s}=e,o=c(t,a),l=c(t,s);this._ttPolicy!=null&&(l=this._ttPolicy.createScriptURL(l));let d=(await import(l)).compileStreaming(fetch(o)),p;e.renderer==="skwasm"?p=(async()=>{let h=await n.skwasm;return window._flutter_skwasmInstance=h,{skwasm:h.wasmExports,skwasmWrapper:h,ffi:{memory:h.wasmMemory}}})():p=Promise.resolve({}),await(await(await d).instantiate(await p,{loadDynamicModule:async(h,j)=>{let A=fetch(c(t,h)),L=c(t,j);this._ttPolicy!=null&&(L=this._ttPolicy.createScriptURL(L));let x=import(L);return[await A,await x]}})).invokeMain()}}_createScriptTag(e,n){let t=document.createElement("script");t.type="application/javascript",n&&(t.nonce=n);let r=e;return this._ttPolicy!=null&&(r=this._ttPolicy.createScriptURL(e)),t.src=r,t}};async function T(i,e,n){if(e<0)return i;let t,r=new Promise((a,s)=>{t=setTimeout(()=>{s(new Error(`${n} took more than ${e}ms to resolve. Moving on.`,{cause:T}))},e)});return Promise.race([i,r]).finally(()=>{clearTimeout(t)})}var g=class{setTrustedTypesPolicy(e){this._ttPolicy=e}loadServiceWorker(e){if(!e||!("serviceWorker"in navigator))return Promise.resolve();let n=()=>{console.warn(`Loading the service worker using Flutter bootstrap is deprecated and will stop working in a future release.
For more details, see: https://github.com/flutter/flutter/issues/156910`)},t=()=>{let{serviceWorkerVersion:r,serviceWorkerUrl:a=c(`flutter_service_worker.js?v=${r}`),timeoutMillis:s=4e3}=e,o=a;this._ttPolicy!=null&&(o=this._ttPolicy.createScriptURL(o));let l=navigator.serviceWorker.register(o).then(u=>this._getNewServiceWorker(u,r)).then(this._waitForServiceWorkerActivation);return T(l,s,"prepareServiceWorker")};return e.serviceWorkerUrl!=null?(n(),t()):navigator.serviceWorker.getRegistration().then(r=>r?t():Promise.resolve())}async _getNewServiceWorker(e,n){if(!e.active&&(e.installing||e.waiting))return console.debug("Installing/Activating first service worker."),e.installing||e.waiting;if(e.active.scriptURL.endsWith(n))return console.debug("Loading from existing service worker."),e.active;{let t=await e.update();return console.debug("Updating service worker."),t.installing||t.waiting||t.active}}async _waitForServiceWorkerActivation(e){if(!e||e.state==="activated")if(e){console.debug("Service worker already active.");return}else throw new Error("Cannot activate a null service worker!");return new Promise((n,t)=>{e.addEventListener("statechange",()=>{e.state==="activated"&&(console.debug("Activated new service worker."),n())})})}};var y=class{constructor(e,n="flutter-js"){let t=e||[/\.js$/,/\.mjs$/];window.trustedTypes&&(this.policy=trustedTypes.createPolicy(n,{createScriptURL:function(r){if(r.startsWith("blob:"))return r;let a=new URL(r,window.location),s=a.pathname.split("/").pop();if(t.some(l=>l.test(s)))return a.toString();console.error("URL rejected by TrustedTypes policy",n,":",r,"(download prevented)")}}))}};var k=i=>{let e=WebAssembly.compileStreaming(fetch(i));return(n,t)=>((async()=>{let r=await e,a=await WebAssembly.instantiate(r,n);t(a,r)})(),{})};var U=(i,e,n,t)=>(window.flutterCanvasKitLoaded=(async()=>{if(window.flutterCanvasKit)return window.flutterCanvasKit;let r=n.hasChromiumBreakIterators&&n.hasImageCodecs;if(!r&&e.canvasKitVariant=="chromium")throw"Chromium CanvasKit variant specifically requested, but unsupported in this browser";let a=r&&e.canvasKitVariant!=="full",s=t;e.canvasKitVariant=="experimentalWebParagraph"?s=c(s,"experimental_webparagraph"):a&&(s=c(s,"chromium"));let o=c(s,"canvaskit.js");i.flutterTT.policy&&(o=i.flutterTT.policy.createScriptURL(o));let l=k(c(s,"canvaskit.wasm")),u=await import(o);return window.flutterCanvasKit=await u.default({instantiateWasm:l}),window.flutterCanvasKit})(),window.flutterCanvasKitLoaded);var W=async(i,e,n,t)=>{let a=!n.hasImageCodecs||!n.hasChromiumBreakIterators?"skwasm_heavy":e.enableWimp?"wimp":"skwasm",s=c(t,`${a}.js`),o=s;i.flutterTT.policy&&(o=i.flutterTT.policy.createScriptURL(o));let l=k(c(t,`${a}.wasm`));return await(await import(o)).default({skwasmSingleThreaded:e.enableWimp||!n.crossOriginIsolated||n.isChromeExtension||e.forceSingleThreadedSkwasm,instantiateWasm:l,locateFile:(d,p)=>d.endsWith(".ww.js")?URL.createObjectURL(new Blob([`
"use strict";

let eventListener;
eventListener = (message) => {
    const pendingMessages = [];
    const data = message.data;
    data["instantiateWasm"] = (info,receiveInstance) => {
        const instance = new WebAssembly.Instance(data["wasm"], info);
        return receiveInstance(instance, data["wasm"])
    };
    import(data.js).then(async (skwasm) => {
        await skwasm.default(data);

        removeEventListener("message", eventListener);
        for (const message of pendingMessages) {
            dispatchEvent(message);
        }
    });
    removeEventListener("message", eventListener);
    eventListener = (message) => {

        pendingMessages.push(message);
    };

    addEventListener("message", eventListener);
};
addEventListener("message", eventListener);
`],{type:"application/javascript"})):c(t,d),mainScriptUrlOrBlob:s})};var P=w.supportsWasmGC,G=P&&w.webGLVersion>0,b=class{async loadEntrypoint(e){let{serviceWorker:n,...t}=e||{},r=new y,a=new g;a.setTrustedTypesPolicy(r.policy),await a.loadServiceWorker(n).catch(o=>{console.warn("Exception while loading service worker:",o)});let s=new v;return s.setTrustedTypesPolicy(r.policy),this.didCreateEngineInitializer=s.didCreateEngineInitializer.bind(s),s.loadEntrypoint(t)}async load({serviceWorkerSettings:e,onEntrypointLoaded:n,nonce:t,config:r}={}){r??={};let a=_flutter.buildConfig;if(!a)throw"FlutterLoader.load requires _flutter.buildConfig to be set";let s=r.wasmAllowList?.[w.browserEngine]??_[w.browserEngine],o=m=>{switch(m){case"skwasm":return G&&s;default:return!0}},l=m=>m.compileTarget==="dart2wasm"&&!P||r.renderer&&r.renderer!=m.renderer?!1:o(m.renderer),u=a.builds.find(l);if(!u)throw"FlutterLoader could not find a build compatible with configuration and environment.";let d={};d.flutterTT=new y,e&&(d.serviceWorkerLoader=new g,d.serviceWorkerLoader.setTrustedTypesPolicy(d.flutterTT.policy),await d.serviceWorkerLoader.loadServiceWorker(e).catch(m=>{console.warn("Exception while loading service worker:",m)}));let p=E(r,a);u.renderer==="canvaskit"?d.canvasKit=U(d,r,w,p):u.renderer==="skwasm"&&(d.skwasm=W(d,r,w,p));let f=new v;return f.setTrustedTypesPolicy(d.flutterTT.policy),this.didCreateEngineInitializer=f.didCreateEngineInitializer.bind(f),f.load(u,d,r,t,n)}};window._flutter||(window._flutter={});window._flutter.loader||(window._flutter.loader=new b);})();
//# sourceMappingURL=flutter.js.map

if (!window._flutter) {
  window._flutter = {};
}
_flutter.buildConfig = {"engineRevision":"77e2e94772b6eb43759e34ed1ad7da4674e19cab","builds":[{"compileTarget":"dart2js","renderer":"canvaskit","mainJsPath":"main.dart.js"},{}]};


const APP_VERSION_LABEL =
  document.querySelector('meta[name="worcat:version"]')?.content?.trim() ||
  'v0.0.0+0';
const APP_UPDATED_AT =
  document.querySelector('meta[name="worcat:updated-at"]')?.content?.trim() ||
  'unknown';
const RELOAD_DELAY_MS = 1200;
const CURSOR_FRAME_SIZE = 128;
const CURSOR_FRAME_COORDINATES = Array.from({length: 9}, (_, index) => {
  const column = index % 3;
  const row = Math.floor(index / 3);
  return {
    x: column * CURSOR_FRAME_SIZE,
    y: row * CURSOR_FRAME_SIZE,
    width: CURSOR_FRAME_SIZE,
    height: CURSOR_FRAME_SIZE,
  };
});
const CURSOR_HOTSPOT_X = 12;
const CURSOR_HOTSPOT_Y = 10;
const CURSOR_CANVAS_SIZE = 64;
const CURSOR_OPAQUE_ALPHA_THRESHOLD = 8;
const CURSOR_IDLE_DELAY_MS = 220;
const CURSOR_ANIMATION_INTERVAL_MS = 150;
const CURSOR_STATE_SEQUENCES = Object.freeze({
  run: {
    initial: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    loop: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  sleep: {
    initial: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    loop: [7, 8],
  },
  click: {
    initial: [0, 1, 2, 3, 4, 5, 6, 7],
    loop: [2, 3, 4, 5, 6, 7],
  },
});
const CURSOR_STATES = Object.freeze({
  run: {
    sheetUrl: 'cursors/cat-run-cursor-sheet.png',
    intervalMs: CURSOR_ANIMATION_INTERVAL_MS,
  },
  sleep: {
    sheetUrl: 'cursors/cat-sleep-cursor-sheet.png',
    intervalMs: CURSOR_ANIMATION_INTERVAL_MS,
  },
  click: {
    sheetUrl: 'cursors/cat-click-cursor-sheet.png',
    intervalMs: CURSOR_ANIMATION_INTERVAL_MS,
  },
});

let reloadQueued = false;
let animatedCursorTimerId = null;
let cursorIdleTimerId = null;
let cursorFramesByState = null;
let cursorState = 'sleep';
let cursorFacing = 'right';
let cursorFrameIndex = 0;
let cursorIntroCompleted = false;
let cursorIsMoving = false;
let cursorHoverBridgeInteractive = false;
let cursorPointInteractive = false;
let cursorLastClientX = null;
let cursorLastClientY = null;
let cursorEnabled = false;
let cursorBootstrapArmed = false;
let cursorInitializationPromise = null;
const UPDATE_TARGET_SESSION_KEY = 'worcat-update-target';

function resolveAppUrl(path) {
  return new URL(path, document.baseURI).toString();
}

function resolveBrowserTimezone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Taipei';
  } catch (_) {
    return 'Asia/Taipei';
  }
}

function toBase64UrlUint8Array(value) {
  const normalized = `${value || ''}`.trim();
  const padding = '='.repeat((4 - (normalized.length % 4)) % 4);
  const base64 = (normalized + padding).replace(/-/g, '+').replace(/_/g, '/');
  const decoded = window.atob(base64);
  return Uint8Array.from(decoded, (char) => char.charCodeAt(0));
}

function serializePushSubscription(subscription) {
  if (!subscription) {
    return null;
  }

  const json = typeof subscription.toJSON === 'function'
    ? subscription.toJSON()
    : {};
  const keys = json.keys || {};

  return {
    endpoint: subscription.endpoint || '',
    expirationTime:
      subscription.expirationTime == null
        ? null
        : Number(subscription.expirationTime),
    p256dh: keys.p256dh || '',
    auth: keys.auth || '',
  };
}

function createPushStatus({
  supported,
  permission,
  subscription = null,
  reason = null,
}) {
  return {
    supported,
    permission,
    subscription,
    timezoneName: resolveBrowserTimezone(),
    reason,
  };
}

async function ensurePushRegistration() {
  const registration = await registerServiceWorker();
  if (registration) {
    return registration;
  }
  return navigator.serviceWorker.ready;
}

async function worcatPushGetStatus() {
  const supported =
    'serviceWorker' in navigator &&
    'PushManager' in window &&
    'Notification' in window;

  if (!supported) {
    return createPushStatus({
      supported: false,
      permission: 'unsupported',
      reason: 'push_not_supported',
    });
  }

  const permission = Notification.permission || 'default';

  try {
    const registration = await ensurePushRegistration();
    const subscription = await registration.pushManager.getSubscription();
    return createPushStatus({
      supported: true,
      permission,
      subscription: serializePushSubscription(subscription),
    });
  } catch (error) {
    return createPushStatus({
      supported: true,
      permission,
      reason: error?.message || `${error}`,
    });
  }
}

async function worcatPushSubscribe(vapidPublicKey) {
  const supported =
    'serviceWorker' in navigator &&
    'PushManager' in window &&
    'Notification' in window;

  if (!supported) {
    return createPushStatus({
      supported: false,
      permission: 'unsupported',
      reason: 'push_not_supported',
    });
  }

  const trimmedKey = `${vapidPublicKey || ''}`.trim();
  if (!trimmedKey) {
    return createPushStatus({
      supported: true,
      permission: Notification.permission || 'default',
      reason: 'push_public_key_missing',
    });
  }

  let permission = Notification.permission || 'default';
  if (permission !== 'granted') {
    permission = await Notification.requestPermission();
  }

  if (permission !== 'granted') {
    return createPushStatus({
      supported: true,
      permission,
      reason: 'push_permission_not_granted',
    });
  }

  const registration = await ensurePushRegistration();
  let subscription = await registration.pushManager.getSubscription();

  if (!subscription) {
    subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: toBase64UrlUint8Array(trimmedKey),
    });
  }

  return createPushStatus({
    supported: true,
    permission,
    subscription: serializePushSubscription(subscription),
  });
}

async function worcatPushUnsubscribe() {
  const supported =
    'serviceWorker' in navigator &&
    'PushManager' in window &&
    'Notification' in window;

  if (!supported) {
    return createPushStatus({
      supported: false,
      permission: 'unsupported',
      reason: 'push_not_supported',
    });
  }

  const registration = await ensurePushRegistration();
  const subscription = await registration.pushManager.getSubscription();
  if (subscription) {
    await subscription.unsubscribe();
  }

  return createPushStatus({
    supported: true,
    permission: Notification.permission || 'default',
  });
}

function worcatPushBridge(action, vapidPublicKey, callbackName) {
  const callback = window[callbackName];
  if (typeof callback !== 'function') {
    return;
  }

  const runner = async () => {
    switch (action) {
      case 'status':
        return worcatPushGetStatus();
      case 'subscribe':
        return worcatPushSubscribe(vapidPublicKey);
      case 'unsubscribe':
        return worcatPushUnsubscribe();
      default:
        return createPushStatus({
          supported: false,
          permission: 'unsupported',
          reason: 'push_bridge_unknown_action',
        });
    }
  };

  void runner()
    .then((payload) => callback(JSON.stringify(payload)))
    .catch((error) => {
      callback(
        JSON.stringify(
          createPushStatus({
            supported: false,
            permission: 'unsupported',
            reason: error?.message || `${error}`,
          }),
        ),
      );
    });
}

window.worcatPushGetStatus = worcatPushGetStatus;
window.worcatPushSubscribe = worcatPushSubscribe;
window.worcatPushUnsubscribe = worcatPushUnsubscribe;
window.worcatPushBridge = worcatPushBridge;

function setRuntimeMetadata() {
  document.documentElement.dataset.appVersion = APP_VERSION_LABEL;
  document.documentElement.dataset.appUpdatedAt = APP_UPDATED_AT;
  window.__WORCAT_APP_VERSION__ = APP_VERSION_LABEL;
  if (readSessionValue(UPDATE_TARGET_SESSION_KEY) === APP_VERSION_LABEL) {
    removeSessionValue(UPDATE_TARGET_SESSION_KEY);
  }
}

function ensureUpdateToast() {
  let toast = document.getElementById('worcat-update-toast');
  if (toast) {
    return toast;
  }

  toast = document.createElement('div');
  toast.id = 'worcat-update-toast';
  toast.hidden = true;
  toast.style.position = 'fixed';
  toast.style.right = '20px';
  toast.style.bottom = '20px';
  toast.style.zIndex = '9999';
  toast.style.padding = '12px 16px';
  toast.style.borderRadius = '16px';
  toast.style.border = '1px solid rgba(255, 255, 255, 0.22)';
  toast.style.background = 'rgba(20, 50, 59, 0.94)';
  toast.style.boxShadow = '0 16px 40px rgba(20, 50, 59, 0.24)';
  toast.style.color = '#f8f5ee';
  toast.style.font = '600 14px/1.4 "Segoe UI", sans-serif';
  toast.style.backdropFilter = 'blur(10px)';
  document.body.appendChild(toast);
  return toast;
}

function readSessionValue(key) {
  try {
    return window.sessionStorage?.getItem(key) ?? null;
  } catch (_) {
    return null;
  }
}

function writeSessionValue(key, value) {
  try {
    window.sessionStorage?.setItem(key, value);
  } catch (_) {
    // Ignore storage failures for private mode or restricted contexts.
  }
}

function removeSessionValue(key) {
  try {
    window.sessionStorage?.removeItem(key);
  } catch (_) {
    // Ignore storage failures for private mode or restricted contexts.
  }
}

function parseVersionLabel(label) {
  if (typeof label !== 'string') {
    return null;
  }

  const match = /^v?(\d+)\.(\d+)\.(\d+)\+(\d+)$/.exec(label.trim());
  if (!match) {
    return null;
  }

  return match.slice(1).map((value) => Number.parseInt(value, 10));
}

function compareVersionLabels(left, right) {
  const leftParts = parseVersionLabel(left);
  const rightParts = parseVersionLabel(right);

  if (!leftParts || !rightParts) {
    return 0;
  }

  for (let index = 0; index < leftParts.length; index += 1) {
    if (leftParts[index] > rightParts[index]) {
      return 1;
    }
    if (leftParts[index] < rightParts[index]) {
      return -1;
    }
  }

  return 0;
}

async function clearWorcatCaches() {
  if (typeof caches === 'undefined') {
    return;
  }

  const keys = await caches.keys();
  await Promise.all(
    keys
      .filter((key) => key.startsWith(CACHE_PREFIX))
      .map((key) => caches.delete(key)),
  );
}

async function unregisterWorcatServiceWorkers() {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  const currentOrigin = window.location.origin;
  const registrations = await navigator.serviceWorker.getRegistrations();
  await Promise.all(
    registrations
      .filter((registration) => {
        try {
          return new URL(registration.scope).origin === currentOrigin;
        } catch (_) {
          return false;
        }
      })
      .map((registration) => registration.unregister()),
  );
}

function queueReload(message, targetVersion = null) {
  if (
    reloadQueued ||
    (targetVersion !== null &&
      readSessionValue(UPDATE_TARGET_SESSION_KEY) === targetVersion)
  ) {
    return;
  }

  reloadQueued = true;
  if (targetVersion !== null) {
    writeSessionValue(UPDATE_TARGET_SESSION_KEY, targetVersion);
  }
  const toast = ensureUpdateToast();
  toast.textContent = message;
  toast.hidden = false;
  window.setTimeout(() => window.location.reload(), RELOAD_DELAY_MS);
}

async function queueFreshReload(message, targetVersion) {
  if (
    reloadQueued ||
    readSessionValue(UPDATE_TARGET_SESSION_KEY) === targetVersion
  ) {
    return;
  }

  reloadQueued = true;
  writeSessionValue(UPDATE_TARGET_SESSION_KEY, targetVersion);
  const toast = ensureUpdateToast();
  toast.textContent = message;
  toast.hidden = false;

  try {
    await unregisterWorcatServiceWorkers();
    await clearWorcatCaches();
  } catch (error) {
    console.debug('Failed to clear old worCat cache before reload.', error);
  }

  window.setTimeout(() => {
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set('worcat-refresh', Date.now().toString());
    window.location.replace(nextUrl.toString());
  }, RELOAD_DELAY_MS);
}

function setAnimatedCursor(frameDataUrl) {
  document.documentElement.style.setProperty(
    '--worcat-cursor',
    `url("${frameDataUrl}") ${CURSOR_HOTSPOT_X} ${CURSOR_HOTSPOT_Y}, auto`,
  );
}

function shouldEnableAnimatedCursor() {
  return !window.matchMedia('(pointer: coarse)').matches;
}

function loadCursorSheet(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () =>
      reject(new Error(`Failed to load animated cursor sheet: ${url}`));
    image.src = url;
  });
}

function measureCursorFrameBottom(spriteSheet, frame) {
  const canvas = document.createElement('canvas');
  canvas.width = frame.width;
  canvas.height = frame.height;
  const context = canvas.getContext('2d', {willReadFrequently: true});
  if (!context) {
    throw new Error('Animated cursor measurement context is unavailable.');
  }

  context.drawImage(
    spriteSheet,
    frame.x,
    frame.y,
    frame.width,
    frame.height,
    0,
    0,
    frame.width,
    frame.height,
  );
  const pixels = context.getImageData(0, 0, frame.width, frame.height).data;
  for (let y = frame.height - 1; y >= 0; y -= 1) {
    for (let x = 0; x < frame.width; x += 1) {
      const alpha = pixels[(y * frame.width + x) * 4 + 3];
      if (alpha > CURSOR_OPAQUE_ALPHA_THRESHOLD) {
        return y;
      }
    }
  }

  return frame.height - 1;
}

function buildCursorFrames(
  spriteSheet,
  {mirror = false, alignOpaqueBottom = false} = {},
) {
  const frameBottoms = alignOpaqueBottom
    ? CURSOR_FRAME_COORDINATES.map((frame) =>
        measureCursorFrameBottom(spriteSheet, frame),
      )
    : null;
  const targetFrameBottom = frameBottoms
    ? Math.max(...frameBottoms)
    : null;

  return CURSOR_FRAME_COORDINATES.map((frame, frameIndex) => {
    const canvas = document.createElement('canvas');
    canvas.width = CURSOR_CANVAS_SIZE;
    canvas.height = CURSOR_CANVAS_SIZE;

    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Animated cursor canvas context is unavailable.');
    }

    const maxFrameWidth = CURSOR_CANVAS_SIZE - 8;
    const maxFrameHeight = CURSOR_CANVAS_SIZE - 8;
    const ratio = Math.min(
      maxFrameWidth / frame.width,
      maxFrameHeight / frame.height,
    );
    const drawWidth = frame.width * ratio;
    const drawHeight = frame.height * ratio;
    const drawX = (CURSOR_CANVAS_SIZE - drawWidth) / 2;
    const verticalOffset =
      targetFrameBottom === null
        ? 0
        : (targetFrameBottom - frameBottoms[frameIndex]) * ratio;
    const drawY = (CURSOR_CANVAS_SIZE - drawHeight) / 2 + verticalOffset;

    context.clearRect(0, 0, CURSOR_CANVAS_SIZE, CURSOR_CANVAS_SIZE);
    context.save();
    if (mirror) {
      context.translate(CURSOR_CANVAS_SIZE, 0);
      context.scale(-1, 1);
    }
    context.drawImage(
      spriteSheet,
      frame.x,
      frame.y,
      frame.width,
      frame.height,
      drawX,
      drawY,
      drawWidth,
      drawHeight,
    );
    context.restore();

    return canvas.toDataURL('image/png');
  });
}

function isTextEntryTarget(element) {
  return Boolean(
    element?.closest(
      'input, textarea, select, [contenteditable="true"], [role="textbox"]',
    ),
  );
}

function hasDisabledAncestor(element) {
  return Boolean(
    element?.closest('[disabled], [aria-disabled="true"], [data-disabled="true"]'),
  );
}

function hasPointerCursor(element) {
  let current = element;
  let depth = 0;

  while (current instanceof Element && depth < 6) {
    if (window.getComputedStyle(current).cursor === 'pointer') {
      return true;
    }

    current = current.parentElement;
    depth += 1;
  }

  return false;
}

function isInteractiveTarget(element) {
  if (!element || isTextEntryTarget(element) || hasDisabledAncestor(element)) {
    return false;
  }

  const buttonLike = element.closest(
    [
      'button',
      'a[href]',
      'summary',
      '[role="button"]',
      '[role="link"]',
      '[role="menuitem"]',
      '[role="option"]',
      '[role="tab"]',
      '[aria-haspopup="menu"]',
      '[data-worcat-clickable="true"]',
    ].join(', '),
  );

  return Boolean(buttonLike) || hasPointerCursor(element);
}

function updateInteractiveHoverFromPoint(clientX, clientY) {
  if (
    typeof clientX !== 'number' ||
    typeof clientY !== 'number' ||
    Number.isNaN(clientX) ||
    Number.isNaN(clientY)
  ) {
    cursorPointInteractive = false;
    return;
  }

  const target = document.elementFromPoint(clientX, clientY);
  cursorPointInteractive = isInteractiveTarget(target);
}

function isCursorInteractive() {
  return cursorHoverBridgeInteractive || cursorPointInteractive;
}

function getDesiredCursorState() {
  if (cursorIsMoving) {
    return 'run';
  }

  return isCursorInteractive() ? 'click' : 'sleep';
}

function getActiveFrames() {
  return (
    cursorFramesByState?.[cursorState]?.[cursorFacing] ??
    cursorFramesByState?.[cursorState]?.right ??
    []
  );
}

function getCursorSequenceSet() {
  return (
    CURSOR_STATE_SEQUENCES[cursorState] ?? {
      initial: [],
      loop: [],
    }
  );
}

function getCurrentCursorSequence() {
  const sequenceSet = getCursorSequenceSet();
  if (!cursorIntroCompleted && sequenceSet.initial.length > 0) {
    return sequenceSet.initial;
  }

  if (sequenceSet.loop.length > 0) {
    return sequenceSet.loop;
  }

  return sequenceSet.initial;
}

function applyCursorFrame() {
  const frames = getActiveFrames();
  const sequence = getCurrentCursorSequence();
  if (frames.length === 0 || sequence.length === 0) {
    return;
  }

  const sequenceIndex = Math.min(cursorFrameIndex, sequence.length - 1);
  const frameIndex = sequence[sequenceIndex] % frames.length;
  setAnimatedCursor(frames[frameIndex]);
}

function advanceCursorFrame() {
  const sequence = getCurrentCursorSequence();
  if (sequence.length <= 1) {
    cursorFrameIndex = 0;
    return;
  }

  if (!cursorIntroCompleted) {
    if (cursorFrameIndex < sequence.length - 1) {
      cursorFrameIndex += 1;
      return;
    }

    cursorIntroCompleted = true;
    cursorFrameIndex = 0;
    return;
  }

  cursorFrameIndex = (cursorFrameIndex + 1) % sequence.length;
}

function restartCursorAnimation() {
  if (animatedCursorTimerId !== null) {
    window.clearInterval(animatedCursorTimerId);
    animatedCursorTimerId = null;
  }

  applyCursorFrame();

  const sequenceSet = getCursorSequenceSet();
  const shouldAnimate =
    sequenceSet.initial.length > 1 || sequenceSet.loop.length > 1;
  if (!shouldAnimate) {
    return;
  }

  animatedCursorTimerId = window.setInterval(() => {
    advanceCursorFrame();
    applyCursorFrame();
  }, CURSOR_STATES[cursorState].intervalMs);
}

function syncCursorState({resetFrame = false, refreshFrame = false} = {}) {
  const nextState = getDesiredCursorState();
  const stateChanged = nextState !== cursorState;

  if (stateChanged) {
    cursorState = nextState;
  }

  if (stateChanged || resetFrame) {
    cursorFrameIndex = 0;
    cursorIntroCompleted = false;
    restartCursorAnimation();
    return;
  }

  if (animatedCursorTimerId === null) {
    restartCursorAnimation();
    return;
  }

  if (refreshFrame) {
    applyCursorFrame();
  }
}

function scheduleCursorIdleTransition() {
  if (cursorIdleTimerId !== null) {
    window.clearTimeout(cursorIdleTimerId);
    cursorIdleTimerId = null;
  }

  cursorIdleTimerId = window.setTimeout(() => {
    cursorIsMoving = false;
    updateInteractiveHoverFromPoint(cursorLastClientX, cursorLastClientY);
    syncCursorState({resetFrame: true});
  }, CURSOR_IDLE_DELAY_MS);
}

function handlePointerMove(event) {
  if (!cursorEnabled) {
    return;
  }

  updateInteractiveHoverFromPoint(event.clientX, event.clientY);

  let deltaX =
    typeof event.movementX === 'number' && !Number.isNaN(event.movementX)
      ? event.movementX
      : 0;

  if (deltaX === 0 && cursorLastClientX !== null) {
    deltaX = event.clientX - cursorLastClientX;
  }

  cursorLastClientX = event.clientX;
  cursorLastClientY = event.clientY;
  let facingChanged = false;

  if (deltaX < -0.5) {
    facingChanged = cursorFacing !== 'left';
    cursorFacing = 'left';
  } else if (deltaX > 0.5) {
    facingChanged = cursorFacing !== 'right';
    cursorFacing = 'right';
  }

  cursorIsMoving = true;
  scheduleCursorIdleTransition();
  syncCursorState({refreshFrame: facingChanged});
}

function handlePointerOver(event) {
  if (!cursorEnabled) {
    return;
  }

  updateInteractiveHoverFromPoint(event.clientX, event.clientY);
  if (!cursorIsMoving) {
    syncCursorState({resetFrame: true});
  }
}

function handlePointerLeave() {
  cursorLastClientX = null;
  cursorLastClientY = null;
  cursorIsMoving = false;
  cursorHoverBridgeInteractive = false;
  cursorPointInteractive = false;
  syncCursorState({resetFrame: true});
}

function bindAnimatedCursorEvents() {
  document.addEventListener('mousemove', handlePointerMove, {passive: true});
  document.addEventListener('mouseover', handlePointerOver, {passive: true});
  document.addEventListener('mouseleave', handlePointerLeave, {passive: true});
  window.addEventListener('blur', handlePointerLeave);
}

async function initializeAnimatedCursor() {
  if (cursorInitializationPromise) {
    return cursorInitializationPromise;
  }

  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return;
  }

  if (!shouldEnableAnimatedCursor()) {
    return;
  }

  cursorInitializationPromise = (async () => {
    if (animatedCursorTimerId !== null) {
      window.clearInterval(animatedCursorTimerId);
      animatedCursorTimerId = null;
    }

    const loadedSheets = await Promise.all(
      Object.entries(CURSOR_STATES).map(async ([state, config]) => [
        state,
        await loadCursorSheet(resolveAppUrl(config.sheetUrl)),
      ]),
    );

    cursorFramesByState = Object.fromEntries(
      loadedSheets.map(([state, spriteSheet]) => [
        state,
        {
          right: buildCursorFrames(spriteSheet, {
            alignOpaqueBottom: state === 'run',
          }),
          left: buildCursorFrames(spriteSheet, {
            mirror: true,
            alignOpaqueBottom: state === 'run',
          }),
        },
      ]),
    );

    cursorEnabled = true;
    window.__WORCAT_CURSOR__ = {
      setInteractiveHover(value) {
        cursorHoverBridgeInteractive = Boolean(value);
        syncCursorState({resetFrame: true});
      },
      refreshTarget(clientX, clientY) {
        updateInteractiveHoverFromPoint(clientX, clientY);
        syncCursorState({resetFrame: true});
      },
    };

    bindAnimatedCursorEvents();
    syncCursorState({resetFrame: true});
  })();

  return cursorInitializationPromise;
}

function armAnimatedCursorBootstrap() {
  if (
    cursorBootstrapArmed ||
    typeof document === 'undefined' ||
    typeof window === 'undefined' ||
    !shouldEnableAnimatedCursor()
  ) {
    return;
  }

  cursorBootstrapArmed = true;

  const startInitialization = () => {
    document.removeEventListener('pointermove', startInitialization);
    document.removeEventListener('pointerdown', startInitialization);
    document.removeEventListener('mouseover', startInitialization);

    scheduleDeferredTask(() => {
      void initializeAnimatedCursor().catch((error) => {
        console.debug('Animated cursor setup skipped.', error);
      });
    }, 80);
  };

  document.addEventListener('pointermove', startInitialization, {
    passive: true,
  });
  document.addEventListener('pointerdown', startInitialization, {
    passive: true,
  });
  document.addEventListener('mouseover', startInitialization, {
    passive: true,
  });
}

async function checkVersionManifest() {
  if (reloadQueued) {
    return;
  }

  const versionUrl = resolveAppUrl(`version.json?ts=${Date.now()}`);
  const response = await fetch(versionUrl, {
    cache: 'no-store',
    headers: {
      'cache-control': 'no-cache',
    },
  });

  if (!response.ok) {
    return;
  }

  const payload = await response.json();
  const remoteLabel =
    payload.label ??
    (payload.version && payload.buildNumber
      ? `v${payload.version}+${payload.buildNumber}`
      : null);

  if (!remoteLabel) {
    return;
  }

  const comparison = compareVersionLabels(remoteLabel, APP_VERSION_LABEL);
  if (comparison > 0) {
    await queueFreshReload(
      `New version ${remoteLabel} detected. Refreshing workspace...`,
      remoteLabel,
    );
  }
}

async function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    return null;
  }

  const serviceWorkerUrl = resolveAppUrl(
    `app_service_worker.js?v=${encodeURIComponent(APP_VERSION_LABEL)}`,
  );

  try {
    const registration = await navigator.serviceWorker.register(
      serviceWorkerUrl,
      {updateViaCache: 'none'},
    );

    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data?.type !== 'APP_UPDATED') {
        return;
      }

      const nextVersion = event.data.version ?? 'new version';
      if (compareVersionLabels(nextVersion, APP_VERSION_LABEL) <= 0) {
        return;
      }

      queueFreshReload(
        `New version ${nextVersion} detected. Refreshing workspace...`,
        nextVersion,
      );
    });

    return registration;
  } catch (error) {
    console.warn('Failed to register worCat service worker.', error);
    return null;
  }
}

function scheduleDeferredTask(task, timeoutMs = 80) {
  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(task, {timeout: timeoutMs});
    return;
  }

  window.setTimeout(task, timeoutMs);
}

function runStartupUpdateCheck(registration) {
  void registration?.update().catch((error) => {
    console.debug('Service worker update skipped.', error);
  });
}

setRuntimeMetadata();
void checkVersionManifest().catch((error) => {
  console.debug('Version check skipped.', error);
});

(async function bootstrap() {
  const registrationPromise = registerServiceWorker();

  _flutter.loader.load({
    onEntrypointLoaded: async (engineInitializer) => {
      const appRunner = await engineInitializer.initializeEngine();
      await appRunner.runApp();

      const registration = await registrationPromise;
      scheduleDeferredTask(() => runStartupUpdateCheck(registration), 120);
      scheduleDeferredTask(() => armAnimatedCursorBootstrap(), 180);
    },
  });
})();
