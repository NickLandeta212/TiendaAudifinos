# Audífonos · Uni

Catálogo web de audífonos con el stock al día. Página estática (HTML + JS) que lee precios y stock de Supabase.

## Cambiar stock o precios
Supabase → proyecto **audifonos-uni** → Table Editor → tabla `productos`.
Edita `stock` o `precio` y guarda: la página lo muestra al recargar. Para ocultar un producto pon `activo` en `false`.

## WhatsApp e Instagram
En `config.js`, llena `whatsapp` (con código de país, sin + ni espacios, ej. 593991234567) e `instagram` (sin @).
Con eso aparece el botón "Pedir" en cada producto.

## Publicar en Vercel
vercel.com → Add New → Project → importa este repo → Framework: **Other** → Deploy.
No necesita build ni variables de entorno. Cada cambio que subas a GitHub se publica solo.
