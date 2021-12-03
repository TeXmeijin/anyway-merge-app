namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    SECRET: string;
    SIGIN_USERNAME: string;
    SIGIN_PASSWORD: string;
  }
}
