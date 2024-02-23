import z from 'zod'

//estructura del compañero De La Rosa Madero, Carlos
// {
//   id: number,
//   title: string,
//   done: boolean
// }

const todoSchema = z.object({
  id: z.number(),
  title: z.string(),
  done: z.boolean(),
})

export function validateTodo(input) {
  return todoSchema.safeParse(input)
}

export function validatePartialTodo(input) {
  return todoSchema.partial().safeParse(input)
}
