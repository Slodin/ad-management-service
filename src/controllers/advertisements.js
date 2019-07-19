import express from 'express';
import models from '../models';
var router = express.Router();

router.post('/', async (req, res, next) => {
    try{
        let ad = new models.Advertisements({
            mediaType: req.body.mediaType,
            mediaUrl: req.body.mediaUrl,
            adLink: req.body.adLink,
            identifier: req.body.identifier
        });
        let result = await ad.save();
        res.status(200).send({_id: result._id});
    }catch(err){
        res.status(500).send({
            error_code: 'interal_server_error',
            error_message: 'An error has occured, please check your network',
            error: err
        })
    }
});

router.get('/', async (req, res, next) => {
    try{
        let result;
        if(req.query && req.query.hasOwnProperty('id')){
            result = await models.Advertisements.findOne({_id: req.query.id});
        } else if(req.query && req.query.hasOwnProperty('identifier')){
            if( Array.isArray(req.query.identifier)){
                result = await models.Advertisements.find({identifier: req.query.identifier});
            } else {
                result = await models.Advertisements.findOne({identifier: req.query.identifier});
            }
        }  else {
            result = await models.Advertisements.find().sort({createdAt:-1});
        }

        if(result)
            res.status(200).send(result);
        else 
            res.status(400).send({
                error_code: 'resource_not_found',
                error_message: 'We did not find the resource you are looking for',
            });
    }catch(err){
        res.status(500).send({
            error_code: 'interal_server_error',
            error_message: 'An error has occured, please check your network',
            error: err
        })
    }
});

router.put('/', async (req, res, next) => {
    try{
        await models.Advertisements.updateOne({_id: req.body.id}, req.body);
        res.status(200).send("Updated!")
    }catch(err){
        res.status(500).send({
            error_code: 'interal_server_error',
            error_message: 'An error has occured, please check your network',
            error: err
        })
    }
});

router.delete('/', async (req, res)=> {
    try{
        await models.Advertisements.deleteOne({_id: req.body.id});
        res.status(200).send("Deleted!")
    }catch(err){
        res.status(500).send({
            error_code: 'interal_server_error',
            error_message: 'An error has occured, please check your network',
            error: err
        })
    }
})

export default router;
