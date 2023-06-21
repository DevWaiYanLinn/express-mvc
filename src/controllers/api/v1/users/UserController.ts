import type { Request, Response } from 'express';
import BaseController from '../../../BaseController';
import Hash from '../../../../core/hash/Hash';
import userRequest from '../../../../validators/users/userRequest';
import prisma from '../../../../prisma';

class UserController extends BaseController {
    constructor() {
        super();
        this.getAll = this.getAll.bind(this);
        this.store = this.store.bind(this);
    }

    public async getAll(req: Request, res: Response) {
        const users = await prisma.users.findMany();
        res.status(200).json({ users });
    }

    public async store(req: Request, res: Response) {
        let { name, email, password } = req.body;;
        const errors = await this.validate(userRequest.store(), {
            name,
            email,
            password,
        });
        if (errors) {
            return res.status(422).json(errors);
        }
        password = await Hash.make(password);
        await this.model.users.create({
            data: {
                name,
                email,
                password,
            },
        });
        res.status(200).json({ name, email });
    };
}

export default new UserController();
