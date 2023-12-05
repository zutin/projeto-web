import { Controller, Get, Post, Param, Body, Put, Delete, UseGuards} from '@nestjs/common';
import { FindPostUseCase } from '../usecases/findPost/findPost.useCase';
import { CreatePostUseCase } from '../usecases/createPost/createPost.useCase';
import { UpdatePostUseCase } from '../usecases/updatePost/updatePost.useCase';
import { DeletePostUseCase } from '../usecases/deletePost/deletePost.useCase';
import { CreatePostRequest } from '../usecases/createPost/createPost.dto';
import { UpdatePostRequest } from '../usecases/updatePost/updatePost.dto';
import { FindAllPostUseCase } from '../usecases/findAllPost/findAllPost.useCase';
import { ApiBearerAuth, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '@/apps/auth/src/configuration/jwt-auth.guard';

@Controller('posts')

export class PostsController {
  constructor(
    private findPostUseCase: FindPostUseCase,
    private createPostUseCase: CreatePostUseCase,
    private updatePostUseCase: UpdatePostUseCase,
    private deletePostUseCase: DeletePostUseCase,
    private findAllPostUseCase: FindAllPostUseCase
    ) {}

  @Get(':id?')
  @ApiParam({ name: 'id', required: false, example: '598f5184-e74a-40d2-a2e6-de97b739ff83' })
  @ApiOkResponse({ status: 200, description: 'Returns all posts if no id is provided, otherwise returns the post with the provided id' })
  @ApiNotFoundResponse({ status: 400, description: 'Post not found' })
  @ApiInternalServerErrorResponse({ status: 500, description: 'Internal server error' })
  async findPost(@Param('id') id?: string) {
    return this.findPostUseCase.execute(id);
  }

  @Get()
  @ApiOkResponse({ status: 200, description: 'Returns all posts' })
  @ApiNotFoundResponse({ status: 400, description: 'Post not found' })
  @ApiInternalServerErrorResponse({ status: 500, description: 'Internal server error' })
  async findAllPosts() {
    return this.findAllPostUseCase.execute();
  }

  @Post()
  @ApiCreatedResponse({ status: 201, description: 'Post created successfully' })
  @ApiNotFoundResponse({ status: 400, description: 'Content is missing' })
  @ApiInternalServerErrorResponse({ status: 500, description: 'Internal server error' }) 
  async createPost(@Body() data: CreatePostRequest) {
    return this.createPostUseCase.execute(data);
  }

  @Put(':id')
  @ApiParam({ name: 'id', example: '598f5184-e74a-40d2-a2e6-de97b739ff83' })
  @ApiResponse({ status: 200, description: 'Post updated successfully' })
  @ApiNotFoundResponse({ status: 400, description: 'Content is missing' })
  @ApiInternalServerErrorResponse({ status: 500, description: 'Internal server error' })
  async updatePost(@Param('id') id: string, @Body() data: UpdatePostRequest) {
    return this.updatePostUseCase.execute(id, data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', example: '598f5184-e74a-40d2-a2e6-de97b739ff83' })
  @ApiNoContentResponse({ description: 'Post deleted successfully' })
  @ApiNotFoundResponse({ status: 400, description: 'Post not found' })
  @ApiInternalServerErrorResponse({ status: 500, description: 'Internal server error' })
  async deletePost(@Param('id') id: string) {
    return this.deletePostUseCase.execute(id);
  }
}
