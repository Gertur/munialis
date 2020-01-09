const obrasControllers = {};
const Obras = require('../models/obras');

obrasControllers.getObras= async (req, res) =>{
    const obras = await Obras.find();
    res.json(obras); 
}
obrasControllers.createObras = async (req, res) => {
    const {titulo, descripcion, estado_obra, presupuesto, avance, objetivos} = req.body;
    const newobras = new Obras({titulo, descripcion, estado_obra, presupuesto, avance, objetivos});
    await newobras.save();
    res.status(200).send({
        message:'¡Obra registrada satisfactoriamente!'
    })
}
obrasControllers.deleteObras = async (req, res)=>{
    await Obras.findByIdAndDelete(req.params.id);
    res.status(200).send({
        message:'¡Obra eliminada satisfactoriamente!'
    })
}
obrasControllers.getObra = async (req, res) =>{
    const obra = await Obras.findById(req.params.id);
    res.json(obra);
}
module.exports = obrasControllers;