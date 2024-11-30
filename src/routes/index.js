import NarutoEyes from "@/views/NarutoEyes";
import EllipseSwiper from "@/views/EllipseSwiper.vue";
import HypnosisCircle from "@/views/HypnosisCircle";
import Spacecraft from "@/views/Spacecraft";
import CubeAlbum from "@/views/CubeAlbum";
import ProgressBar from "@/views/ProgressBar";
import TimeClock from "@/views/TimeClock";
import TypeWriter from "@/views/TypeWriter";
import RotatePetals from "@/views/RotatePetals";
import ColorWave from "@/views/ColorWave";
import CartoonFan from "@/views/CartoonFan";
import BounceBall from "@/views/bounce-ball.vue";

export const routes = [
  {
    icon: "el-icon-basketball",
    component: BounceBall,
  },
  {
    icon: "el-icon-view",
    component: NarutoEyes,
  },
  {
    icon: "el-icon-video-camera-solid",
    component: EllipseSwiper,
  },
  {
    icon: "el-icon-s-promotion",
    component: Spacecraft,
  },
  {
    icon: "el-icon-help",
    component: HypnosisCircle,
  },
  {
    icon: "el-icon-menu",
    component: CubeAlbum,
  },
  {
    icon: "el-icon-s-unfold",
    component: ProgressBar,
  },
  {
    icon: "el-icon-time",
    component: TimeClock,
  },
  {
    icon: "el-icon-edit",
    component: TypeWriter,
  },
  {
    icon: "el-icon-magic-stick",
    component: RotatePetals,
  },
  {
    icon: "el-icon-s-grid",
    component: ColorWave,
  },
  {
    icon: "el-icon-wind-power",
    component: CartoonFan,
  },
];
