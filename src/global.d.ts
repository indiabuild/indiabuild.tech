/// <reference types="@solidjs/start/env" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      GOOGLE_CLIENT_REDIRECT: string;
      APP_HOST: string;
      JWT_SECRET: string;
      DB_HOST: string;
      DB_PORT?: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_NAME: string;
    }
  }
}

export {};
