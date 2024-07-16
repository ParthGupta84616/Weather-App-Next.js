import { NextResponse } from "next/server";
import axios from "axios";


export async function GET() {
    try {
        const lat = 32.806671;
        const lon = -86.791130;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`;

        const response = await axios.get(url);

        return NextResponse.json({ message: "Success" , data:response.data}, { status: 200 });
    }  catch (error:any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}