type Recurrence = 'daily' | 'weekly' | 'monthly' | 'yearly';

type Priority = 'low' | 'medium' | 'high';

export type GREvent = {
  event_category_path?: any[] | null;
  event_category_id?: number | null;
  name: string;
  priority: Priority | null;
  tag: string | null;
  is_completed: boolean;
  start_date: string;
  end_date?: string | null;
  is_recurring: boolean;
  recurrence_type?: Recurrence | null;
  recurrence_end_date?: string | null;
};
