import { Router } from "express";
const router = Router();

// Rota Teste
router.get("/teste", (req, res) => {
  res.json({ mesagem: "Rota de Teste" });
});

router.get("/teste1", (req, res) => {
    res.json({ mensagem: "Rota de Teste1"})
} );

export { router };
