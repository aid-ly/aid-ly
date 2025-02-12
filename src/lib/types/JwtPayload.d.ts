import type { JwtPayload as JWT } from 'jsonwebtoken';

export interface JwtPayload extends JWT {
	user_id: string;
}
