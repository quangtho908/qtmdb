import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseService } from "src/shared/base.service";
import { UpdateTaskDto, CreateTaskDto } from "./task.dto";
import { Task, TaskDocument } from "./task.schema";

@Injectable()
export class TaskService extends BaseService<TaskDocument> {
    constructor(
        @InjectModel(Task.name) taskModel: Model<TaskDocument>
    ){super(taskModel)}

    async getById(id: string): Promise<TaskDocument> {
        const data = await this.findById(id);
        if(!data) throw new NotFoundException("Task is not found");
        return data;
    }

    async createTask(create: CreateTaskDto) {
        return await this.create<CreateTaskDto>(create);
    }

    async updateTask(id: string, update: UpdateTaskDto) {
        return await this.updateById(id, update);
    }
}
