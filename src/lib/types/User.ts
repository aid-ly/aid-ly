import type { Post, User } from '@prisma/client';

export type SafeUser = Omit<User, 'password' | 'updatedAt'>;

export interface SafeUserWithPosts extends SafeUser {
	posts: Post[];
}

export interface SafePostWithUser extends Post {
	user: SafeUser;
}
