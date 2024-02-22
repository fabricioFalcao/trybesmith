import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'PittyVéia';

type TokenPayload = {
  id: number,
  username: string,
};

const sign = (payload: TokenPayload): string => jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });

const verify = (token: string): TokenPayload => jwt.verify(token, JWT_SECRET) as TokenPayload;

export default {
  sign,
  verify,
};