# Audífonos · Uni

Catálogo web de audífonos con el stock al día. Página estática (HTML + JS) que lee precios y stock de Supabase.

## Cambiar stock o precios
Supabase → proyecto **audifonos-uni** → Table Editor → tabla `productos`.
Edita `stock` o `precio` y guarda: la página lo muestra al recargar. Para ocultar un producto pon `activo` en `false`.

## Pedidos y pago (efectivo o transferencia)
El cliente agrega productos con "Agregar", toca "Hacer pedido", elige **efectivo** (paga al recibir) o
**transferencia**, y deja su nombre y WhatsApp. Al confirmar recibe un código (ej. `8F23K`).

Los pedidos llegan a Supabase → tabla `pedidos` (una fila por producto; las filas del mismo pedido comparten `codigo`).
Para llevar el control cambia `estado`: `nuevo` → `confirmado` → `entregado` (o `cancelado`).
El stock no se descuenta solo: bájalo en `productos` cuando entregues.

## WhatsApp, Instagram y cuenta bancaria
En `config.js`:
- `whatsapp` (con código de país, sin + ni espacios, ej. 593991234567) e `instagram` (sin @).
  Con WhatsApp, al terminar el pedido aparece "Enviar pedido por WhatsApp" con el resumen.
- `transferencia`: banco, tipo, número, titular y cédula. Se muestran al elegir transferencia.
  Si los dejas vacíos, se le dice al cliente que le envías los datos por WhatsApp.

## Publicar en Vercel
vercel.com → Add New → Project → importa este repo → Framework: **Other** → Deploy.
No necesita build ni variables de entorno. Cada cambio que subas a GitHub se publica solo.

## Panel de pedidos (admin.html)
Entra a `/admin.html` con el correo del dueño. La primera vez pulsa "Primera vez: crear mi acceso", elige una contraseña y confirma el correo.
Ahí ves los pedidos agrupados por código, escribes al cliente por WhatsApp con un mensaje ya armado (incluye los datos de transferencia) y marcas "Pago confirmado", "Entregado" o "Cancelar".
Al marcar "Entregado" el stock baja solo; "Reabrir" lo devuelve. También puedes ajustar el stock con + y −.
Solo el correo del dueño puede ver los pedidos (regla en Supabase).
