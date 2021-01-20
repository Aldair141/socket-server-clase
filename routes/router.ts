import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', (request: Request, response: Response) => {
    response.json({
        ok: true,
        message: 'Todo está bien :3'
    });
});

router.post('/mensajes/:id', (request: Request, response: Response) => {

    const mensaje = request.body.mensaje;
    const remitente = request.body.remitente;
    const id = request.params.id;

    response.json({
        ok: true,
        message: {
            mensaje,
            remitente,
            id
        }
    });
 });

export default router;