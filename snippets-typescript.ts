/**
 * Function overload
 */

 function foo(arg1: number, arg2: number): number
 function foo(arg1: string, arg2: string): string
 function foo(arg1: string | number, arg2: string | number): string | number {
   return arg1 || arg2
 }
 
 // ❎ x is of type string
 const x = foo('sample1', 'sample2')
 // ❎ y is of type number
 const y = foo(10, 24)
 
 console.log(`x`, typeof x, x)
 console.log(`y`, typeof y, y)
 
 export default foo
 
 /**
  * Pick<Type, Keys>
  */
 interface Todo {
   title: string
   description: string
   completed: boolean
 }

 type TodoPreview = Pick<Todo, "title", | "completed">

 const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
 }