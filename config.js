// Datos que puedes cambiar sin tocar el resto del código.
window.TIENDA = {
  // Supabase (la clave pública es segura en el navegador: la tabla está protegida con RLS)
  supabaseUrl: "https://qrkmiqiwbqamnedublwq.supabase.co",
  supabaseKey: "sb_publishable_zmOORP4LvEwXAJmm7fUgaw_uh_f0u15",

  // Contacto: número con código de país, sin + ni espacios (ej. 593991234567)
  whatsapp: "",
  instagram: "",

  // Datos para pagos por transferencia. Si los dejas vacíos, al cliente se le dice
  // que le envías los datos por WhatsApp.
  transferencia: {
    banco: "",    // ej. "Banco Pichincha"
    tipo: "",     // ej. "Ahorros"
    numero: "",   // número de cuenta
    titular: "",  // nombre del titular
    cedula: "",   // cédula del titular (opcional)
  },
};
