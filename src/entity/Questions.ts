import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: "question_text" })
  questionText: string;

  @Column({
    name: "is_deleted",
    default: false,
  })
  isDeleted: boolean;

  @Column({
    name: "created_at",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;
}
