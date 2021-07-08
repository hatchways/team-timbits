import { User } from '../interface/User';

// Data is temporary, will be changed later

const mockLoggedInUser: User = {
  username: 'mock LoggedIn user',
  email: 'mockLoggedInUser@gmail.com',
  strategy: 'google',
  id: 12312312312,
  picture: 'asdasdasd',
  mongoId: 123123123,
};

const mockOtherUser1: User = {
  username: 'Mock test user 1',
  email: 'mockTestUser1@gmail.com',
  strategy: 'google',
  id: 12312312312,
  picture: 'asdasdasd',
  mongoId: 123123123,
};
const mockOtherUser2: User = {
  username: 'Mock test user 2',
  email: 'mockTestUser2@gmail.com',
  strategy: 'google',
  id: 12312312312,
  picture: 'asdasdasd',
  mongoId: 123123123,
};
const mockOtherUser3: User = {
  username: 'Mock test user 3',
  email: 'mockTestUser3@gmail.com',
  strategy: 'google',
  id: 12312312312,
  picture: 'asdasdasd',
  mongoId: 123123123,
};

const mockOtherUsers: User[] = [mockOtherUser1, mockOtherUser2, mockOtherUser3];

export { mockLoggedInUser, mockOtherUsers };
