import { Configuration, container } from "webpack";
import path from "path";
import {
  type BuildMode,
  type BuildPlatform,
  buildWebpack,
} from "@packages/build-config";
import packageJSON from "./package.json";

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
  platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
  const config: Configuration = buildWebpack({
    port: env.port ?? 3001,
    mode: env.mode ?? "development",
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      html: path.resolve(__dirname, "public", "index.html"),
      output: path.resolve(__dirname, "build"),
      src: path.resolve(__dirname, "src"),
      public: path.resolve(__dirname, "public"),
    },
    analyzer: env.analyzer,
    platform: env.platform ?? "desktop",
  });

  config.plugins.push(
    new container.ModuleFederationPlugin({
      name: "shop",
      filename: "remoteEntry.js",
      exposes: {
        "./Router": "./src/router/Router.tsx",
      },
      shared: {
        ...packageJSON.dependencies,
        react: {
          eager: true,
          requiredVersion: packageJSON.dependencies["react"],
        },
        "react-router-dom": {
          eager: true,
          requiredVersion: packageJSON.dependencies["react-router-dom"],
        },
        "react-dom": {
          eager: true,
          requiredVersion: packageJSON.dependencies["react-dom"],
        },
      },
    })
  );

  return config;
};
