import { headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();
  // ? Duas formas de pegar o header de uma requisição
  console.log(requestHeaders.get("authorization"));
  console.log(headerList);
  // ? Dá pra mandar uma página html como resposta
  return new Response("<h1>Hello from the API</h1>", {
    headers: {
      "content-type": "text/html",
    },
  });
}
