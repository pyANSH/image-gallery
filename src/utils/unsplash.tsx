import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "9MBBOE7YIiIa_z3GDBm-HObAf8SIwt7-UxtHpmd-34U",
  headers: { "X-Custom-Header": "foo" },
});

export default unsplash;
