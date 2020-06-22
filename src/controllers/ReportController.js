const { Op } = require('sequelize');
const User = require('../models/User');


module.exports = {
    async show(req, res) {
        // encotrar tds usuarios q tem @hotmail.com
        //desses, eu quero tds na "Rua do nada"
        //desses, eu quero as tecnologias q comecam com Node

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@hotmail.com'
                }
            },
            include: [
                { association: 'addresses', where: { street: 'Rua do Nada' } },
                {
                    association: 'techs',
                    required: false, // msm no cara não tendo a tech mas tendo o endereco ele aparece mas com tech vazia (left outer join)
                    where: {
                        name: {
                            [Op.iLike]: 'node%'
                        }
                    }
                }
            ]

        })

        return res.json(users);
    }
};