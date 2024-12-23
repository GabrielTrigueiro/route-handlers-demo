import { redirect } from "next/navigation";
import { comments } from "../data";

export type RequestProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function GET(_request: Request, { params }: RequestProps) {
  const id = (await params).id;
  if (parseInt(id) > comments.length) {
    redirect("/comments");
  }
  const comment = comments.find((comment) => comment.id === parseInt(id));
  return Response.json(comment);
}

export async function PATCH(request: Request, { params }: RequestProps) {
  const id = (await params).id;
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  comments[index].text = text;
  return Response.json(comments[index]);
}

export async function DELETE(_request: Request, { params }: RequestProps) {
  const id = (await params).id;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  comments.splice(index, 1);
  return Response.json(comments);
}
