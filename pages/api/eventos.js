import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try{
    await sendgrid.send({
      // to: 'eventos@101ph.co',
      to: 'ralpwd@gmail.com',
      // from: 'eventos@101ph.co',
      from: 'ralpwd+101parkhouse@gmail.com',
      subject: 'Has recibido un nuevo formulario de evento',
      html: `
        <p>Nombre: ${req.body.nombre}</p>
        <p>Correo: ${req.body.email}</p>
        <p>Celular: ${req.body.celular}</p>
        <p>Tipo de evento: ${req.body.tipo_evento}</p>
        <p>Descripción: ${req.body.descripcion}</p>
        <p>Número de personas: ${req.body.adultos} adultos y ${req.body.ninos} niños</p>
        <p>Fecha: ${req.body.fecha}</p>
        `,
    });
  } catch(error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ message: 'Email sent' });
}

export default sendEmail;