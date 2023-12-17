/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { prisma } from "~/server/prisma";

// let player = {
//   id: 1,
//   name: "Hello World",
// };

// export const userRouter = createTRPCRouter({
//   addUser: publicProcedure
//   .input(z.object({text}))
// })

export const playerRouter = createTRPCRouter({
  add: publicProcedure
    .input(
      z.object({
        name: z.string().min(1).max(32),
        avatar: z.string().url().min(1),
      }),
    )
    .mutation(async ({ input }) => {
      const player = await prisma.player.create({
        data: { name: input.name, avatar: input.avatar },
      });
      return player;
    }),
});
