import { Composition } from "remotion";
import { ServMitr } from "./ServMitr";

export const RemotionRoot = () => {
  return (
    <Composition
      id="ServMitr"
      component={ServMitr}
      durationInFrames={900}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
