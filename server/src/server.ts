import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

const app = Fastify();
const prismaTable = new PrismaClient()

app.register(cors)

app.get('/hello', async  () => {
   const habits = await prismaTable.habit.findMany ({
      where: {
         title: {
            startsWith: 'Beber'
         }
      }
   })
    
   return habits
})

app.listen({
    port: 3333,
}).then(() => {
   console.log("http console running")
})