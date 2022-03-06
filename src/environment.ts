type Env = "production" | "preview" | "development";

const env = process.env.NEXT_PUBLIC_VERCEL_ENV as Env;
const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL as string;

const isDevelopment = env === "development";
const isPreview = env === "preview";
const isProduction = env === "production";

export const environment = {
  name: env,
  isDevelopment,
  isPreview,
  isProduction,
  origin: vercelUrl ? `https://${vercelUrl}` : `http://localhost:3000`,
};
