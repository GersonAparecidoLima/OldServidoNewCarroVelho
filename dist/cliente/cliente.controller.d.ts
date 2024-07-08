import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    create(createClienteDto: CreateClienteDto): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<import("../entitites/cliente/cliente.entity").Cliente[]>;
    findOne(id: string): string;
    update(id: string, updateClienteDto: UpdateClienteDto): string;
    remove(id: string): string;
}
