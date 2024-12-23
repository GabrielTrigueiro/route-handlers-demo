import { headers, cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();
  (await cookies()).set("resultPerPage", "20");
  const theme = request.cookies.get("theme");
  // ? Duas formas de pegar o header de uma requisição
  console.log(requestHeaders.get("authorization"));
  console.log(headerList);
  console.log(theme);
  console.log((await cookies()).get("resultPerPage"));
  // ? Dá pra mandar uma página html como resposta
  return new Response("<h1>Hello from the API</h1>", {
    headers: {
      "content-type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
