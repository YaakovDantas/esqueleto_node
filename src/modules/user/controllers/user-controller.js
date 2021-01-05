import HttpStatus from 'http-status-codes'
import * as service from '../services/user-service'

export const teste = async (req, res) => {
    const user = await service.teste()
    res.status(HttpStatus.CREATED).json(user).send()
}