import { downloadType } from "@/app/projects/projectContainer";
import { GETInterface } from "../../getInterface";

export async function GET(){
    return GETInterface(2, downloadType.Windows);
}
