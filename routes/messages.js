var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/',(req,res,next)=>{
    Message.find().exec((err,result)=>{
        if(err){
            return res.status(500).json({
                myErroTitle: "Erro ao encontrar a menssagem no banco de dados ",
                myError:err
            })
        }
        res.status(200).json({
            myMsgSucess:'Mensagem recuperada com sucesso',
            objsMessageSRecuperados:result
        })
    })
})


router.post('/', (req, res, next) => {

    var message = new Message({
        content: req.body.content
    });
    console.log("messageA:",message);
    message.save((err, result) => {
        console.log("messageB:",message);
        console.log("err:",err);
        console.log("result:",result);
        if (err) {
            return res.status(500).json({
                myErroTitle: "Erro ao tentar salvar a Mensagem",
                myError: err
            });
        }
        res.status(200).json({
            myMsgSucess: "Mensagem Salva com sucesso",
            objMessageSave: result
        })
    });
    console.log("message:",message);
})

module.exports = router;