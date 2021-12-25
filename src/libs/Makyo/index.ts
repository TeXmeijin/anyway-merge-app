import { goodEngineer as Script } from "./JavaScript/compiled";

const goodEngineer = (value: string): boolean => {
  return Script(value);
};
export default goodEngineer;
