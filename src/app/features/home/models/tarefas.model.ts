import { Data } from "@angular/router";

export interface Tarefas {
    id: number;
    description: string;
    completed: boolean;
    inclusionDate: Date;
}