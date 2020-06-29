import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
    async show (request: Request, response: Response){
        const { id } = request.params;

        const point = await knex('points').where('id', id).first();

        if(!point){
            return response.status(404).json({ message: "Point not found."});
        }

        const items = await knex('items')
        .join('points_items', 'items.id', '=', 'points_items.item_id' )
        .where('points_items.point_id', id)
        .select('items.title');

        return response.json({ point, items });
    }

    async create (request: Request, response: Response){

        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        }= request.body;

        // Não consegui rodar com o transaction 
        // const trx = await knex.transaction();

        const point = {
            image: 'image-fake',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        }

        const insertedIds = await knex('points').insert(point)
    
        const point_id = insertedIds[0];
    
        const pointItems = items.map((item_id : number) => {
            return {
                item_id,
                point_id,
            }
        })        
        
        await knex('points_items').insert(pointItems);
        
        return response.json({
            id: point_id,
            ... point
        });
        
        // return response.json({ id: point_id, ... points,})
    }
};

export default PointsController;