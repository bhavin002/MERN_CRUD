import user from '../model/userSchema.js';

export const adduser  = async (req,res) =>{
   const data = req.body;
   const valiUser = new user(data);
   try{
      await valiUser.save();
      res.status(201).json(valiUser);
   }
   catch(error){
      res.status(409).json({message:error.message});
   }
}

export const getusers = async (req,res) =>{
   try{
      const users = await user.find({});
      res.status(200).json(users);
   }catch{
      res.status(404).json({message:error.message})
   }
}

export const getUserById = async (request, response) => {
   try{
       const single = await user.findById(request.params.id);
       response.status(200).json(single);
   }catch( error ){
       response.status(404).json({ message: error.message })
   }
}

export const editUser = async (request, response) => {
   let FormData = request.body;
   const editUser = new user(FormData);
   try{
      await user.updateOne({_id:request.params.id},editUser);
      response.status(201).json(editUser);
   }catch( error ){
       response.status(409).json({ message: error.message })
   }
}

export const deleteUser = async (request, response) =>{
   try{
      await user.deleteOne({_id:request.params.id});
      response.status(200).json({message:'User Deleted SuccessFully'});
  }catch( error ){
      response.status(409).json({ message: error.message })
  }
}