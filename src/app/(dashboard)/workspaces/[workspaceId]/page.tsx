import { getCurrent } from "@/features/auth/action";
import { redirect } from "next/navigation";

const WorkspaceIdPage =  async () => {


    const user = await getCurrent();

    if(!user) redirect('/sign-in');

    return (
        <div>

                workspace id

        </div>

    );

};

export default WorkspaceIdPage;