import { createApi } from "unsplash-js";
//   code author:pyansh
const unsplash = createApi({
  accessKey: import.meta.env.VITE_APP_API_KEY!,
  headers: { "X-Custom-Header": "foo" },
});

export default unsplash;
