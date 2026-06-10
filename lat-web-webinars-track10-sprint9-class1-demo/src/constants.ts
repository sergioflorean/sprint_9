export interface PostData {
  id: number;
  title: string;
  body: string;
}

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const initialPosts: PostData[] = [
  {
    id: 1,
    title: "Bienvenidos a mi nuevo blog",
    body: "Este es el primer post de mi blog personal.",
  },
  {
    id: 2,
    title: "TypeScript es increíble",
    body: "La tipación estática nos ayuda a evitar errores antes de ejecutar el código.",
  },
];

export const fakeUser: UserData = {
  id: 1,
  name: "Maria",
  username: "maria_dev",
  email: "maria@example.com",
};
