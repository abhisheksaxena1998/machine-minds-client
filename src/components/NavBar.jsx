import logo from "../assets/mindmart.svg";
import {
  ShoppingCartOutlined,
  ProfileOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";

const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="Your SVG" className="w-48 -ml-4" />
      <div className="w-full flex justify-between flex-row-reverse items-center max-w-7xl mx-auto">
        <ul className="flex list-none hidden sm:flex flex-row-reverse gap-10 -mt-36">
          <li>
            <ProfileOutlined className="text-150-percent" />
          </li>
          <li>
            <Badge count="4">
              <ShoppingCartOutlined className="text-150-percent" />
            </Badge>
          </li>
          <li>
            <Badge count={11} showZero color="#faad14">
              <ShoppingOutlined className="text-150-percent" />
            </Badge>
          </li>
        </ul>

        <div className="flex sm:hidden flex-row-reverse flex-1 justify-end items-center">
          <div
            className={`flex flex-row-reverse -mt-16 p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="flex list-none flex-row-reverse justify-end items-start flex-1 gap-4 mt-12">
              <li>
                <ProfileOutlined className="text-150-percent" />
              </li>
              <li>
                <Badge count="4">
                  <ShoppingCartOutlined className="text-150-percent" />
                </Badge>
              </li>
              <li>
                <Badge count={11} showZero color="#faad14">
                  <ShoppingOutlined className="text-150-percent" />
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
