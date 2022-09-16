import { IsNotEmpty } from 'class-validator';
import SqlQuery from 'src/utils/SqlQuery';

const SQL = new SqlQuery();
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

  public createdItem() {
    const columns = `${this.description}, ${this.marca}, ${this.ncmId}, ${this.value}, ${this.quantity}, ${this.value}`;
    return columns;
  }
}
