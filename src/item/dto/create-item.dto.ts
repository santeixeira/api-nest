import { IsNotEmpty } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  description: string;
  color: string;
  marca: string;
  @IsNotEmpty()
  ncmId: number;
  @IsNotEmpty()
  value: number;
  @IsNotEmpty()
  quantity: number;
  @IsNotEmpty()
  type: string;
}

const dto = new CreateItemDto();
export const createData = {
  description: dto.description,
  color: dto.color,
  marca: dto.marca,
  ncmId: dto.ncmId,
  value: dto.value,
  quantity: dto.quantity,
  type: dto.type,
};
