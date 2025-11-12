import { type NextRequest, NextResponse } from "next/server";
import { search } from "@/lib/search";
import type { Locale } from "@/types";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const query = searchParams.get("q");
    const locale = searchParams.get("locale");

    if (!locale) {
      return NextResponse.json(
        { message: "Locale parameter is required" },
        { status: 400 },
      );
    }

    const results = await search(locale as Locale, query);
    return NextResponse.json(results);
  } catch (error) {
    console.error("Error in search API:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
