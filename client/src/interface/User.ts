export interface User {
  username: string;
  email: string;
  strategy: string;
  id: number;
  picture: string;
  mongoId: number;
}

export interface SearchUsersApiData {
  users?: User[];
  error?: { message: string };
}
