import { IsString, IsNotEmpty, IsDate } from "class-validator"

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  description: string

  @IsDate()
  @IsNotEmpty()
  dateCreate: Date
}

export type UpdateTaskDto = {

}
