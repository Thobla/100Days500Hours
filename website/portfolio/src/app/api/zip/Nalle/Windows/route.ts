import { downloadType} from "@/app/projects/projectInfo";
import { GETInterface } from "@/app/api/zip/GETInterface";

export async function GET(){
    return GETInterface(5, downloadType.Windows);
}
