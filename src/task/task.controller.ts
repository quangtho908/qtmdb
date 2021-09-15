import { Body, Controller, Get, Post } from "@nestjs/common";
import { TaskService } from "./task.service";


@Controller("task")
export class TaskController {
    constructor(
        private taskService: TaskService
    ){}
    @Get()
    getById(@Body() task) {
        return this.taskService.getById(task.id);
    }

    @Post()
    create() {

    }

}