import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { PrismaQuestionsRepository } from './prisma/repositories/prisma-questions-repository'
import { PrismaAnswerAttachmentsRepository } from './prisma/repositories/prisma-answer-attachments-repository'
import { PrismaAnswerCommentsRepository } from './prisma/repositories/prisma-answer-comments-repository'
import { PrismaAnswersRepository } from './prisma/repositories/prisma-answers-repository'
import { PrismaQuestionAttachmentsRepository } from './prisma/repositories/prisma-question-attachment-repository'
import { PrismaQuestionCommentsRepository } from './prisma/repositories/prisma-question-comments-repository'

@Module({
  providers: [
    PrismaService,
    PrismaAnswersRepository,
    PrismaQuestionsRepository,
    PrismaAnswerCommentsRepository,
    PrismaQuestionCommentsRepository,
    PrismaAnswerAttachmentsRepository,
    PrismaQuestionAttachmentsRepository,
  ],
  exports: [PrismaService],
})
export class DatabaseModule {}
