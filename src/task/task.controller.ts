import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateTaskDto, UpdateTaskDto } from "./task.dto";
import { TaskService } from "./task.service";


@Controller("task")
export class TaskController {
    constructor(
        private taskService: TaskService
    ){}
    @Get(":id")
    getById(@Param("id") id: string) {
        return this.taskService.getById(id);
    }

    @Post()
    create(@Body() data: CreateTaskDto) {
        return this.taskService.createTask(data);
    }

    @Put()
    update(@Body() update: UpdateTaskDto){
        return this.taskService.updateTask(update);
    }

    @Delete()
    delete(@Body("id") id: string){
        return this.taskService.deleteTask(id);
    }

}