import prisma from "../prisma";

export class Post {
  static async findAll() {
    return prisma.post.findMany();
  }

  static async create(userId: string, data: any) {
    return prisma.post.create({
      data: {
        ...data,
        userId
      }
    });
  }
}