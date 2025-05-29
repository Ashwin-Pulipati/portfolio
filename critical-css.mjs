import { generate } from "critical";

generate({
  base: "build/",
  src: "index.html",
  dest: "index.html",
  inline: true,
  minify: true,
  width: 1300,
  height: 900,
})
  .then(() => {
    console.log("✅ Critical CSS inlined into index.html");
  })
  .catch((err) => {
    console.error("❌ Error inlining critical CSS:", err);
    process.exit(1);
  });
