import { Router } from "express";
import { getItem, getItems, postItem, updateItem, deleteItem, getCountProgram } from "../controllers/program";
import { checkJwt } from "../middleware/sesion";
import checkTeacher from "../middleware/rolTeacher";
import { validatorCreateProgram, validatorGetProgram } from "../validators/program";

const router = Router()
/* 
+ http://localhost:3002/item [Get]
 */

router.get('/', getItems);
router.get('/count', getCountProgram);
router.get('/:id', getItem);


// Rutas para crear, actualizar y eliminar profesores solo accesibles para administradores
router.post('/', validatorCreateProgram, postItem);
router.put('/:id', checkJwt, checkTeacher, validatorGetProgram, validatorCreateProgram, updateItem);
router.delete('/:id', checkJwt, checkTeacher, deleteItem);


export default router;