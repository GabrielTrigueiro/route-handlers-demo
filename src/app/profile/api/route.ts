import { headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();
  // ? Duas formas de pegar o header de uma requisição
  console.log(requestHeaders.get("authorization"));
  console.log(headerList);
  return new Response("Hello from the API");
}
