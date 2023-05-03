export enum IdValues {}

export enum CreatedAtValues {}

export enum UpdatedAtValues {}

export enum ContentsValues {}

export enum UserIdValues {}

export type NoteModel = {
  id: number;
  created_at: Date;
  updated_at: Date;
  contents: string;
  user_id: string;
};

export type NoteModels = NoteModel[];
