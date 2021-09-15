import { IsString, IsNotEmpty, IsDate, IsArray } from "class-validator"

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string

  @IsString()
  description?: string

  @IsNotEmpty()
  @IsDate()
  dateCreate: Date
}

export class UpdateTaskDto {

  @IsNotEmpty()
  @IsString()
  id: string

  @IsString()
  title?: string

  @IsString()
  description?: string

  @IsDate()
  deadline?: Date

  @IsArray()
  items?: any[]
}
