export interface BaseTask {
  id: string;
  title: string;
  color: string;
  date: Date;
  collection?: string;
  reminder?: Date;
}

export interface SimpleTask extends BaseTask {
  description: string;
}

export interface ChecklistTask extends BaseTask {
  items: { item: string; completed: boolean }[];
}

export type Task = SimpleTask | ChecklistTask;

export interface Collection {
  id: string;
  title: string;
  color: string;
}
