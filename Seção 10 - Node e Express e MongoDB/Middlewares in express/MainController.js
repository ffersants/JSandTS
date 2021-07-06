module.exports = {  
    responseRootRout: (req, res, next) => {
        console.log("NO CONTROLLER")
        res.send("Enviado pelo controller")
    }
}