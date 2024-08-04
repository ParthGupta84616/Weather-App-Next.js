import { NextResponse } from "next/server";
import axios from "axios";


export async function GET() {
    try {
        const lat = 32.806671;
        const lon = -86.791130;
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=uv_index_max`;

        const response = await axios.get(url);
        const data = response.data.daily.uv_index_max[0];

        return NextResponse.json({ message: "Success" , data}, { status: 200 });
    }  catch (error:any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}