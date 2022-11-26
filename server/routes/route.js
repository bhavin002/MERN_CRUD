import express from 'express';
const router = express.Router();
import {adduser,getusers,getUserById,editUser,deleteUser,userById} from '../controller/user_control.js';

router.post('/adduser',adduser)
router.get('/',getusers)
router.get('/edit/:id', getUserById);
router.put('/edit/:id',editUser);
router.delete('/:id',deleteUser)
router.get('/details/:id',userById)


export default router;