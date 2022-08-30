import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

// const FullScreenWrapper = styled.div`
//     top:0px;
//     right:0px;
//     bottom:0px;
//     left:0px;
// `;

export default function Background(props) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          THREE,
          el: vantaRef.current,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: props.color.highlightColor,
          midtoneColor: props.color.midtoneColor,
          lowlightColor: props.color.lowlightColor,
          baseColor: props.color.baseColor,
          blurFactor: 0.7,
          zoom: props.zoom ?? 0.9,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div ref={vantaRef} style={{height: '100vh'}}>{props.children}</div>;
}
