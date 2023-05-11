import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Question } from "../entity/Questions";

export class AnswersController {
  private questionsRepository = getRepository(Question);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.questionsRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.questionsRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.questionsRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.questionsRepository.findOne(
      request.params.id
    );
    if (!userToRemove) throw new Error("User not found");
    await this.questionsRepository.remove(userToRemove);
  }
}
