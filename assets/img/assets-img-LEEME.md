# ASSETS DE IMAGEN — coloca aquí tus fotos

1. `adrian-retrato.jpg` → foto de PLANO MEDIO con brazos cruzados (usada en hero de index y LPs).
2. `adrian-cuerpo.jpg`  → foto de CUERPO ENTERO (usada en Doctrina de index y /sobre-mi).

Las fotos actuales tienen fondo blanco: el sitio las integra sobre panel crema con
`mix-blend-mode: multiply` (clase .photo-paper), así se ven integradas HOY.

MEJORA OPCIONAL (recomendada para producción): elimina el fondo (remove.bg / Photoshop),
exporta PNG transparente, sustituye el contenedor por `.photo-cut` y coloca la imagen
directamente sobre navy deep + glow (§6.3 del manual).