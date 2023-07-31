import { NextResponse } from "next/server";

const middleware = (request) => {
  return NextResponse.redirect(new URL("/docs/yourID", request.url));
};
export default middleware;

export const config = {
  matcher: ["/docs"],
};
