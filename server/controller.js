module.exports = {

    getAll: (req, res, next) => {
        const dbInstance = req.app.get("db");
    
        dbInstance.get_inventory()
        .then( (inventory) => res.status(200).send(inventory) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong."})
            console.log(err)
        });
      },

      create: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const { name,  price, imageUrl } = req.body;
    
        dbInstance.create_product([  name,  price, imageUrl ])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong."})
            console.log(err)
        });
      },
      
       delete: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const { params } = req;
    
        dbInstance.delete_product([ params.id ])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong."})
            console.log(err)
        });
      },

       update: (req, res, next) => {
         const dbInstance = req.app.get("db");
        const { params, query } = req;
    
        dbInstance.update_product([ params.id, query.desc ])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong."})
            console.log(err)
        });
      },

      getOne: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const { params } = req;
    
        dbInstance.get_inventory_id([ params.id ])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong."})
            console.log(err)
        });
    }
}
