// Datos que puedes cambiar sin tocar el resto del código.
window.TIENDA = {
  // Supabase (la clave pública es segura en el navegador: las tablas están protegidas con RLS)
  supabaseUrl: "https://qrkmiqiwbqamnedublwq.supabase.co",
  supabaseKey: "sb_publishable_zmOORP4LvEwXAJmm7fUgaw_uh_f0u15",

  // Contacto: número con código de país, sin + ni espacios (ej. 593991234567)
  whatsapp: "",
  instagram: "",

  // Datos para transferencia (se muestran cuando el cliente elige "Transferencia").
  // Si los dejas vacíos, la página dice que los envías por WhatsApp.
  transferencia: {
    banco: "",
    tipo: "",      // Ahorros o Corriente
    numero: "",
    titular: "",
    cedula: "",
  },
};
