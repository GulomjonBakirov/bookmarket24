import TabView from "../components/TabView";
import "../styles/home/home.css";
import Slider2 from "../components/Slider2";
import DownloadView from "../components/DownloadView";

const Data = [
  {
    title: "So'nggi Mahsulotlar",
    data: [
      {
        name: "Meroj Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "Meroj Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "Meroj Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "Meroj Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
    ],
  },
  {
    title: "Yangi Mahsulotlar",
    data: [
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
    ],
  },
  {
    title: "Ko`p o`qilganlar",
    data: [
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
    ],
  },
  {
    title: "Aksiya",
    data: [
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
    ],
  },
  {
    title: "Tez kunda",
    data: [
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
      {
        name: "O'tgan Kunlar",
        img: "https://via.placeholder.com/300x400",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="container">
      {/* <BreadCrumb children={["Home"]} /> */}
      <TabView data={Data} />
      <DownloadView />
    </div>
  );
}
