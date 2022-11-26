import express from 'express';
const router = express.Router();
import {adduser,getusers,getUserById,editUser,deleteUser} from '../controller/user_control.js';

router.post('/adduser',adduser)
router.get('/',getusers)
router.get('/edit/:id', getUserById);
router.put('/edit/:id',editUser);
router.delete('/:id',deleteUser)


export default router;