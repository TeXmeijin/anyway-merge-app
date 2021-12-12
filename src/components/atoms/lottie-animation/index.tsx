import santa from "https://assets1.lottiefiles.com/packages/lf20_begllstz.json";
import doorDecoration from "https://assets1.lottiefiles.com/packages/lf20_i7y3y8fi.json";
import tree from "https://assets1.lottiefiles.com/packages/lf20_vluuzzxp.json";
import Lottie, { LottieProps, Options } from "react-lottie";

const mapping = {
  doorDecoration,
  tree,
  santa,
};

type LottieNameType = "doorDecoration" | "tree" | "santa";

type Props = {
  name: LottieNameType;
  options?: Omit<Options, "animationData">;
} & Omit<LottieProps, "options">;

const LottieAnimation = ({
  name,
  options: defaultOptions,
  ...attrs
}: Props) => {
  const options: Options = { ...defaultOptions, animationData: mapping[name] };
  return <Lottie options={options} {...attrs} />;
};

export default LottieAnimation;
