import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type TaskDocument = Task & Document;

@Schema()
export class Task {

    @Prop({ required: true })
    title: string

    @Prop()
    description: string;

    @Prop({ required: true })
    createDate: Date

    @Prop()
    deadline: Date

    @Prop({ type: Array })
    items: string[]
}

export const TaskSchema = SchemaFactory.createForClass(Task);
