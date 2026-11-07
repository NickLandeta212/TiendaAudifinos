# Audífonos · Uni

Catálogo web de audífonos con el stock al día. Página estática (HTML + JS) que lee precios y stock de Supabase.

## Cambiar stock o precios
Supabase → proyecto **audifonos-uni** → Table Editor → tabla `productos`.
Edita `stock` o `precio` y guarda: la página lo muestra al recargar. Para ocultar un producto pon `activo` en `false`.

## Pedidos y pagos
Cada producto tiene el botón **Comprar**. El cliente elige cantidad y forma de pago (efectivo o transferencia).
Los pedidos llegan a Supabase → tabla `pedidos` (columnas `metodo_pago`, `total`, `estado`).
Cambia `estado` a `confirmado`, `entregado` o `cancelado` según avance. Recuerda bajar el `stock` en `productos` al entregar.

## Datos de transferencia
En `config.js`, llena `transferencia` (banco, tipo, número, titular, cédula). Si los dejas vacíos, la página dice que los envías por WhatsApp.

## WhatsApp e Instagram
En `config.js`, llena `whatsapp` (con código de país, sin + ni espacios, ej. 593991234567) e `instagram` (sin @).
Con eso aparece el botón "Pedir" en cada producto.

## Publicar en Vercel
vercel.com → Add New → Project → importa este repo → Framework: **Other** → Deploy.
No necesita build ni variables de entorno. Cada cambio que subas a GitHub se publica solo.
