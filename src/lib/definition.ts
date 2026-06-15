export interface Project {
  id: number;
  project_name: string;
}

export interface Task {
  id: number;
  title: string;
  project_id: number;
  is_done: boolean;
  date_completion: string;
}
