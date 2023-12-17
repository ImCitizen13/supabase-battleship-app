/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { prisma } from "~/server/prisma";

export const battleRouter = createTRPCRouter({
  add: publicProcedure
    .input(
      z.object({
        name: z.string().min(1).max(32),
        // host: z.object()
        host: z.object({
          id: z.number(),
          name: z.string(),
          avatar: z.string(),
        }),
      }),
    )
    .mutation(async ({ input }) => {
      const player = await prisma.battle.create({
        data: { name: input.name, playerId: input.host.id },
        include: {
          host: true,
        },
      });
      return player;
    }),
});
