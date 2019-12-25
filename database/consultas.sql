
/*
Obtiene los fiadores que actualmente son fiadores en otro credito
Si devuelve 0 registros, se puede conceder el credito
Sino, hay que mostrar la lista de fiadores por los cuales se le deniega el credito
*/

SELECT cf.idFiador
FROM credito c
INNER JOIN credito_fiador cf
ON cf.idCredito = c.id
WHERE cf.idFiador IN (1, 3, 5, 11, 15, 20, 23, 23)
AND c.estado='en cobro';

