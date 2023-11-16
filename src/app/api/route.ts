import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest,respone:NextResponse) {
    // return NextResponse.json({data:'phiet'});
    const fileName = request.nextUrl.searchParams.get("audio");
    // console.log('CHeck name',fileName)
    return await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/${fileName}`);
  }