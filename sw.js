// Menület: uygulama olarak yüklenebilmesi için gereken arka plan dosyası.
// Hiçbir şeyi önbelleğe almaz; her açılışta sitenin en güncel hâli gelir.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body style="font-family:sans-serif;background:#fae9db;text-align:center;padding-top:30vh">İnternet bağlantısı yok.<br><br><a href="./">Tekrar dene</a></body>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
