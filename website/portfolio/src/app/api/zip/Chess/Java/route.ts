import { downloadType} from "@/app/projects/projectContainer";
import { GETInterface } from "@/app/api/zip/GETInterface";

export async function GET(){
    return GETInterface(3, downloadType.Java);
}
