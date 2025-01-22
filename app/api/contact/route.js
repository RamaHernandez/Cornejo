import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ error: "Todos los campos son obligatorios." }),
                { status: 400 }
            );
        }

        // Configurar Nodemailer
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", // Cambia según el proveedor de correo
            port: 587,
            secure: false, // Usa "true" para el puerto 465
            auth: {
                user: process.env.EMAIL_USER, // Tu correo
                pass: process.env.EMAIL_PASS, // App Password
            },
        });

        // Configurar contenido del correo
        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_TO || process.env.EMAIL_USER, // Destinatario
            subject: "Nuevo mensaje de contacto",
            text: message,
            html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
        };

        // Enviar el correo
        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: "Mensaje enviado con éxito." }), {
            status: 200,
        });
    } catch (error) {
        console.error("Error al enviar el mensaje:", error);
        return new Response(JSON.stringify({ error: "Error al enviar el mensaje." }), {
            status: 500,
        });
    }
}
