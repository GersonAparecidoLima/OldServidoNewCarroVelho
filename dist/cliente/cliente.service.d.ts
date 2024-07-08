import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from '../entitites/cliente/cliente.entity';
import { Repository } from 'typeorm';
export declare class ClienteService {
    private clienteRepository;
    constructor(clienteRepository: Repository<Cliente>);
    create(createClienteDto: CreateClienteDto): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<Cliente[]>;
    findOne(id: number): string;
    update(id: number, updateClienteDto: UpdateClienteDto): string;
    remove(id: number): string;
}
