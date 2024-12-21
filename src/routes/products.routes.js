import { Router } from "express";

const router = Router()

router.get('/productos', (req, res) =>{
    res.send('Obteniendo productos')
})

router.get('/productos/:id', (req, res) =>{
    res.send('Obteniendo producto')
})

router.post('/productos', (req, res) =>{
    res.send('Creando producto')
})

router.put('/productos/:id', (req, res) =>{
    res.send('Actualizando producto')
})

router.delete('/productos/:id', (req, res) =>{
    res.send('Eliminando producto')
})

export default router;