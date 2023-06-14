import { Body, Delete, Example, Get, Patch, Post, Route } from 'tsoa';
import { User, UserCreateRequest, UserUpdateRequest } from '../models/user';

@Route('Users')
export class UsersController {
  /** Get the current user */
  @Get('Current')
  @Example<User>({
    createdAt: new Date(),
    email: 'test@test.com',
    name: "chatGPT",
    id: 1,
  })
  public async Current(): Promise<User> {
    return {
      createdAt: new Date(),
      name: "chatGPT",
      email: 'test@test.com',
      id: 1,
    };
  }

  /** Get user by ID */
  @Get('{userId}')
  public async Get(userId: number): Promise<User> {
    if(typeof userId !== "number") {
      throw new Error("User ID must be a number");
    }
    
    return {
      createdAt: new Date(),
      name: "chatGPT",
      email: 'test2@test.com',
      id: userId,
    };
  }

  /**
   * Create a user
   * @param request This is a user creation request description
   */
  @Post()
  public async Create(@Body() request: UserCreateRequest): Promise<User> {
    return {
      createdAt: new Date(),
      name: request.name,
      email: request.email,
      id: 666, // Ideally, you would use a method to generate a unique ID here.
    };
  }

  /** Delete a user by ID */
  @Delete('{userId}')
  public async Delete(userId: number): Promise<void> {
    return Promise.resolve();
  }

  /** Update a user */
  @Patch()
  public async Update(@Body() request: UserUpdateRequest): Promise<User> {
    return {
      createdAt: request.createdAt,
      name: request.name,
      email: request.email,
      id: 1337, // Ideally, you would use the ID from the request here.
    };
  }
}
