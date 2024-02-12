const express = require('express');
const router = express.Router();
const voitures = [{id:1,name:"megan"},{id:2,name:"BMW"},{id:3,name:"clio"}]
router.get('/all', (req, res) => {
    res.send(voitures)
});


router.get('/:id', (req, res) => {
    const voiture = voitures.find((element) => element.id == req.params.id);
  res.send(voiture);
});


router.post('/add', (req, res) => {
    const voiture = req.body
    const v = voitures.find((element) => element.id == voiture.id);
    if(v){
        res.send('id is already exist')
    }else{
        voitures.push(voiture)
        res.send(voitures)
    }
    
});

router.put('/:id', (req, res) => {
    
    const v = voitures.find((element) => element.id == req.body.id);
    if(v){
        v.id = req.body.id
        v.name = req.body.name
        res.send(voitures)
    }else{
        res.send('car not found')
    }
    
});

router.delete('/delete/:id', (req, res) => {
    const voiture = voitures.find((element) => element.id == req.params.id);
    if(voiture){
        const index = voiture.id - 1
        voitures.splice(index,1)
        res.send('the car is deleted');
    }
    else{
        res.send('car not found')
    }
});
module.exports = router;