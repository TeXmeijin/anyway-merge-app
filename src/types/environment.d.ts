namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    SECRET: string;
    SIGNIN_USERNAME: string;
    SIGNIN_PASSWORD: string;
  }
}
