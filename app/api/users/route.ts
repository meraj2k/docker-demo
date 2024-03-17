import { Users } from "@/app/lib/users";

const users = new Users();

export const GET = async (req: Request) => {

    try {
        const responseObj = await users.createUser("meraj2k", "meraj@gmail.com", "asdf");
        return Response.json({ data: responseObj }, { status: 200 });

    } catch (eror) {
        console.log(eror)
        return Response.json({ eror }, { status: 500 })
    }
}