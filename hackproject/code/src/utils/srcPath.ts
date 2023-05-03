import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const rootPath = path.join(path.dirname(__filename), "../../");

export default rootPath;