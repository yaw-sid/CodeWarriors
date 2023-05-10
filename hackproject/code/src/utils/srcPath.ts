import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const srcPath = path.join(path.dirname(__filename), "../");

export default srcPath;