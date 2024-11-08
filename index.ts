import { wipDevServerExpectHugeBreakingChanges } from "bun";

wipDevServerExpectHugeBreakingChanges({
  // for framework authors, attach your framework
  // via the interface described in `bake.d.ts`
  framework: "react",
  routes: [
    { pattern: "/", entrypoint: "./routes/index.tsx" },
    { pattern: "/second", entrypoint: "./routes/second.tsx" },
  ],
});
