import BadRequest from "../errors/BadRequest.js";
import { filtersEndereco } from '../services/viaCepApi.js';


const pagination = async (req, res, next) => {
    try {
        let { limit = 5, page = 1, ordination = 'bairro:-1'} = req.query;

        let [sortField, order] = ordination.split(':');

        limit = parseInt(limit);
        page = parseInt(page);
        order = parseInt(order);

        const result = req.result;

        if(limit > 0 && page > 0) {
            const resultPage = await result.find()
                .sort({ [sortField]: order})
                .skip((page - 1) * limit)
                .limit(limit)
                .exec();

            res.status(200).json(resultPage.map((e) => filtersEndereco(e)));
        }else{
            next(new BadRequest());
        }

    }catch(error) {
        next(error);
    }
}

export default pagination;