import { IsString } from 'class-validator';

export class CreateImageDto {
  @IsString()
  public title: string;

  @IsString()
  public description?: string;

  @IsString()
  public tags?: [string];
}
