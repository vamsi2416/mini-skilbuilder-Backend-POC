import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Question } from "./Questions";
import { User } from "./User";
import { v4 as uuidv4 } from "uuid";

@Entity({ name: "answers" })
export class Answer {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "user_id" })
  userId: string;

  @Column({ name: "question_id" })
  questionId: string;

  @Column()
  number: number;

  @Column({ name: "answer_text" })
  answerText: string;

  @Column()
  confidence: number;

  @Column()
  differentiation: number;

  @Column()
  risk: string;

  @Column({ name: "merge_answers" })
  mergeAnswers: string;

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

  @Column({
    name: "updated_at",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;
}
