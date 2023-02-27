import { createApi } from "unsplash-js";
import.meta.env.MODE;
const unsplash = createApi({
  accessKey: import.meta.env.VITE_APP_API_KEY!,
  headers: { "X-Custom-Header": "foo" },
});

export default unsplash;
