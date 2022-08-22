/**
 * @file Sidebar Data
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

import type { HTMLDivProps, SidebarMethod } from "@/types";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CompareArea from "@/components/Method/CompareArea";
import CompareIcon from "@mui/icons-material/Compare";
import ContrastIcon from "@mui/icons-material/Contrast";
import FaceRecognitionArea from "@/components/Method/FaceRecognitionArea";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import GrayScaleArea from "@/components/Method/GrayScaleArea";
import UploadArea from "@/components/Method/UploadArea";

export const SidebarMethods: SidebarMethod[] = [
  {
    name: "upload",
    label: "Upload your image",
    render: (props: HTMLDivProps) => <UploadArea {...props} />,
    Icon: AddPhotoAlternateIcon,
  },
  {
    name: "gray",
    label: "gray",
    render: (props: HTMLDivProps) => <GrayScaleArea {...props} />,
    Icon: ContrastIcon,
  },
  {
    name: "face",
    label: "face",
    render: (props: HTMLDivProps) => <FaceRecognitionArea {...props} />,
    Icon: FaceRetouchingNaturalIcon,
  },
  {
    name: "compare",
    label: "origianl",
    render: (props: HTMLDivProps) => <CompareArea {...props} />,
    Icon: CompareIcon,
  },
];
