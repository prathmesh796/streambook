import { NextResponse } from "next/server";

export async function GET(request) {

}

export async function HEAD(request) { }

export async function POST(request) {
    try {
        let data = await request.json()
        console.log(data)
        return NextResponse.json()
    } catch (error) {
        console.error(error.NextResponse.data)
    }

}

export async function PUT(request) { }

export async function DELETE(request) { }

export async function PATCH(request) { }