import { headers } from "next/headers";
import { auth } from "./auth";
import { cache } from "react";

// export async function getServerSession() {
//     return await auth.api.getSession({headers: await headers()})
// }

export const getServerSession = cache(async() => {
    console.log("getServerSession called ");

    return await auth.api.getSession({headers:await headers()})
})


