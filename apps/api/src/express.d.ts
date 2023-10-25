declare global {
  namespace Express {
    interface Request {
      authInfo: any;
    }
  }
}
